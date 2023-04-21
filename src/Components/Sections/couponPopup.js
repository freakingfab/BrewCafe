import React, { useEffect } from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useState } from 'react';

const CouponPopup = () => {
    const [isCouponPopup, setIsCouponPopup] = useState(false);
    const [value, setValue] = useState()
    const closeModal = () => {
        setIsCouponPopup(false);
    }

    const openModal = () => {
        setIsCouponPopup(true)
    }

    const openSecondPage = () => {
        document.querySelector(".coupon-cards").style.right = "100%"
    }
    const openFirstPage = () => {
        document.querySelector(".coupon-cards").style.right = "0%"
    }

    useEffect(() => {

        var flag = 0;
        if (flag === 0) {
            setTimeout(function () {
                openModal()
            }, 10000);
        }

    }, [])

    return (
        <>
            {isCouponPopup ? <div onClick={() => { closeModal() }} className="back-drop2"></div> : null}
            <div class="coupon-popup" style={{ display: isCouponPopup ? "" : "none" }}>
                <div class="coupon-cards">
                    <div class="welcome-coupon">
                        <div class="coupon-text">
                            <p>50% off on everything!</p>
                            <p>Get your coupon now.</p>
                        </div>
                        <button class="get-coupon" onClick={() => { openSecondPage() }}>Get My Coupon</button><br />
                        <button class="no-thanks" onClick={() => { closeModal() }}>No Thanks</button>
                    </div>
                    <div class="details-coupon">
                        <i onClick={() => { openFirstPage() }} class="icofont-double-left" title="Go back"></i>
                        <div class="coupon-text">
                            <p>50% off on everything!</p>
                            <p>Get your coupon now.</p>
                        </div>
                        <form>
                            <div class="email-phone">
                                <div class="email">
                                    <input type="email" className="coupon-form" placeholder="Email*" />
                                </div>
                                <div class="phone">
                                    <PhoneInput
                                        className="coupon-form"
                                        placeholder="00000 000000"
                                        name="phone"
                                        value={value}
                                        onChange={setValue}
                                        // style={{ width: "96%", margin: "0px auto" }}
                                        international
                                        defaultCountry="IN"
                                        countryCallingCodeEditable={false}
                                        required
                                        style={{ width: '88%', margin: 'auto', padding: '2px 6px', fontSize: '13px' }}
                                    />
                                </div>
                            </div>
                        </form>
                        <button class="coupon-submit" onClick={() => closeModal()}>Submit</button>
                        <div class="coupon-info">
                            <p>Your coupon is valid for 3 months. You can use it any number of times as you like on any day of the week within 7 days of the first use between 10 AM to 5 PM.
                            </p>
                            <p className="fst-italic">
                                Please click on the URL in the email to get your code.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CouponPopup;