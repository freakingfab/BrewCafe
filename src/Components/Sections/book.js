import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

export default withTranslation()(
    class book extends Component {
        constructor(props) {
            super(props);
            var guests = [];
            this.guests = guests;
            for (var i = 1; i <= 30; i++) {
                guests.push(String(i));
            }
            guests.push("30+");
            guests.push("50+");
            guests.push("100+");
            this.state = {
                ismodaloverlay: false,
                guests:
                    localStorage.getItem("guests") == null
                        ? "1"
                        : localStorage.getItem("guests"),
                date: new Date(new Date().getTime() + 24 * 60 * 60 * 1000)
                    .toISOString()
                    .slice(0, -14),
                time:
                    localStorage.getItem("time") == null
                        ? "09:00"
                        : localStorage.getItem("time"),
                email:
                    localStorage.getItem("email") == null
                        ? ""
                        : localStorage.getItem("email"),
                phone:
                    localStorage.getItem("phone") == null
                        ? ""
                        : localStorage.getItem("phone"),
                spot:
                    localStorage.getItem("spot") == null
                        ? ""
                        : localStorage.getItem("spot"),
                name:
                    localStorage.getItem("name") == null
                        ? ""
                        : localStorage.getItem("name"),
                message:
                    localStorage.getItem("message") == null
                        ? ""
                        : localStorage.getItem("message"),
            };
        }

        closeModal() {
            this.setState((prevState) => {
                return { ...prevState, ismodaloverlay: false };
            });
        }

        openModal() {
            this.setState((prevState) => {
                return { ...prevState, ismodaloverlay: true };
            });
        }
        setAll = (name) => (e) => {
            // var name=e.target.name
            var value = e.target.value;
            if (name == "spot") {
                value = e.target.getAttribute("value");
            }
            this.setState((prevState) => {
                return {
                    ...prevState,
                    [name]: value,
                };
            });
        };

        setPhone = (e) => {
            var value = e;
            this.setState((prevState) => {
                return {
                    ...prevState,
                    phone: value,
                };
            });
        }

        setTime() {
            var hours = document.getElementsByClassName("hours")[0].innerHTML;
            var min = document.getElementsByClassName("min")[0].innerHTML;
            this.setState((prevState) => {
                return {
                    ...prevState,
                    time: hours + ":" + min,
                };
            });
        }

        async handleSubmit(e) {
            e.preventDefault();
            document.getElementsByClassName("booking-submit-btn")[0].disabled = true;
            document.getElementsByClassName("booking-submit-btn")[0].style.cursor =
                "no-drop";
            document.getElementsByClassName(
                "booking-submit-btn"
            )[0].style.background = "hsl(46deg 100% 85% / 80%)";
            this.closeModal();
            window.alert(
                "Your details have been submitted. You will recieve a mail to the given mail account within 30 seconds"
            );
            var book = {
                guests: this.state.guests,
                date: this.state.date,
                time: this.state.time,
                email: this.state.email,
                phone: this.state.phone,
                spot: this.state.spot === "" ? "Any" : this.state.spot,
                name: this.state.name,
                message: this.state.message,
            };
            localStorage.setItem("email", this.state.email);
            localStorage.setItem("phone", this.state.phone);
            localStorage.setItem("name", this.state.name);
            localStorage.setItem("message", this.state.message);
            const response = await fetch(
                " https://wignqns83j.execute-api.ap-south-1.amazonaws.com/prod/sendmail",
                {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json",
                    },
                    body: JSON.stringify(book),
                }
            )
                .then((res) => res.json())
                .then(async (res) => {
                    const resData = await res;
                    console.log(resData);
                })
                .catch((err) => console.log(err));
        }

        render() {
            const { t } = this.props;
            return (
                <>
                    {this.state.ismodaloverlay ? <div className="back-drop"></div> : null}
                    <div
                        id="book-modal"
                        onClick={() => {
                            this.openModal();
                        }}
                        data="Book Table"
                    >
                        <i class="icofont-dining-table"></i>
                    </div>
                    <div
                        class="book-table"
                        style={{ display: this.state.ismodaloverlay ? "" : "none" }}
                    >
                        <div className="mandatory-close">
                            <p>
                                Fields marked by <span className="golden-color">*</span> are{" "}
                                <span className="golden-color">mandatory</span>
                            </p>
                            <span class="close" onClick={() => this.closeModal()}>
                                <i class="icofont-close"></i>
                            </span>
                        </div>
                        <form onSubmit={(e) => this.handleSubmit(e)} method="POST">
                            {/* <!--Top sectio Date, guest, Time --> */}
                            <div class="top-section">
                                <table width="100%">
                                    <tr>
                                        <th>Guest*</th>
                                        <th>Date*</th>
                                        <th>Time*</th>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="guest">
                                                <div id="select-guest" class="select-box">
                                                    <div
                                                        id="options-container-guest"
                                                        class="options-container"
                                                    >
                                                        {this.guests.map((guest) => {
                                                            return (
                                                                <div id="option-guest" class="option">
                                                                    <input
                                                                        type="radio"
                                                                        class="radio"
                                                                        id={guest}
                                                                        name="guests"
                                                                        value={guest}
                                                                        onClick={this.setAll("guests")}
                                                                    />
                                                                    <label for={guest}>{guest}</label>
                                                                </div>
                                                            );
                                                        })}
                                                    </div>

                                                    <div id="selected-guest" class="selected">
                                                        {this.state.guests}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>

                                        <td>
                                            <div class="date-selection">
                                                <input
                                                    id="date"
                                                    type="date"
                                                    name="date"
                                                    value={this.state.date}
                                                    onChange={this.setAll("date")}
                                                />
                                            </div>
                                        </td>
                                        <td>
                                            <div
                                                class="select-time"
                                                id="one"
                                                onClick={() => this.setTime()}
                                            >
                                                <button type="button" id="hourdec">
                                                    -
                                                </button>
                                                <span class="hours">{this.state.time.slice(0, 2)}</span>
                                                <button type="button" id="hourinc">
                                                    +
                                                </button>
                                                <span class="divider">:</span>
                                                <button type="button" id="mindec">
                                                    -
                                                </button>
                                                <span class="min">{this.state.time.slice(3, 5)}</span>
                                                <button type="button" id="mininc">
                                                    +
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                            {/* <!--End of Top sectio Date, guest, Time --> */}

                            {/* <!--Contact details Providing section--> */}
                            <div class="contact-section">
                                <table width="100%">
                                    <tr>
                                        <th>Email*</th>
                                        <th>Phone*</th>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input
                                                type="email"
                                                placeholder="Email"
                                                name="email"
                                                value={this.state.email}
                                                onChange={this.setAll("email")}
                                                required
                                            />
                                        </td>
                                        <td id="phone">
                                            <PhoneInput
                                                placeholder="00000 000000"
                                                name="phone"
                                                value={this.state.phone}
                                                onChange={this.setPhone}
                                                style={{ width: "96%", margin: "0px auto" }}
                                                international
                                                defaultCountry="IN"
                                                countryCallingCodeEditable={false}
                                                required
                                            />
                                        </td>
                                    </tr>
                                </table>
                            </div>
                            {/* <!--End of Contact details Providing section--> */}

                            {/* <!--Spot location selection area--> */}
                            <div class="spot-name-section">
                                <table width="100%">
                                    <tr>
                                        <td>
                                            <div class="spot">
                                                <div id="select-spot" class="select-box">
                                                    <div
                                                        id="options-container-spot"
                                                        class="options-container"
                                                    >
                                                        <div
                                                            id="option-spot"
                                                            class="option"
                                                            name="spot"
                                                            value="Pool Side"
                                                            onClick={this.setAll("spot")}
                                                        >
                                                            <input
                                                                type="radio"
                                                                class="radio"
                                                                id="Pool"
                                                                name="spot"
                                                                value="Pool Side"
                                                            />
                                                            <label for="Pool">Pool Side</label>
                                                        </div>
                                                        <div
                                                            id="option-spot"
                                                            class="option"
                                                            name="spot"
                                                            value="Bar Side"
                                                            onClick={this.setAll("spot")}
                                                        >
                                                            <input
                                                                type="radio"
                                                                class="radio"
                                                                id="bar"
                                                                name="spot"
                                                                value="Bar Side"
                                                                onClick={this.setSpot}
                                                            />
                                                            <label for="bar">Bar Side</label>
                                                        </div>
                                                        <div
                                                            id="option-spot"
                                                            class="option"
                                                            name="spot"
                                                            value="Al Fresco"
                                                            onClick={this.setAll("spot")}
                                                        >
                                                            <input
                                                                type="radio"
                                                                class="radio"
                                                                id="fresco"
                                                                name="spot"
                                                                value="Al Fresco"
                                                                onClick={this.setSpot}
                                                            />
                                                            <label for="fresco">Al Fresco</label>
                                                        </div>
                                                    </div>

                                                    <div id="selected-spot" class="selected">
                                                        {this.state.spot === ""
                                                            ? "Spot Selection"
                                                            : this.state.spot}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>

                                        <td>
                                            <input
                                                type="text"
                                                placeholder="Name"
                                                oninvalid="this.setCustomValidity('Please Enter Your Name')"
                                                name="name"
                                                value={this.state.name}
                                                onChange={this.setAll("name")}
                                            />
                                        </td>
                                    </tr>
                                </table>
                            </div>
                            {/* <!--End of Spot location selection area--> */}

                            {/* <!--Message section--> */}
                            <div class="message-section">
                                <table width="100%">
                                    <tr>
                                        <th>Message</th>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="count-msg">
                                                <textarea
                                                    maxlength="300"
                                                    name="message"
                                                    value={this.state.message}
                                                    id="message"
                                                    placeholder="Send a message...."
                                                    onChange={this.setAll("message")}
                                                ></textarea>
                                                <div class="count-words">
                                                    <span class="word-len">0</span>/300
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                            {/* <!--Message section--> */}

                            <div class="submit text-center">
                                <button type="submit" class="booking-submit-btn">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </>
            );
        }
    }
);