import React, { Component } from 'react'
import { withTranslation } from 'react-i18next';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Logo from "../../../img/Navbar/BREW-WORD_white-logo.png"
import './Chef.css'


export default withTranslation()(class chef extends Component {
    constructor(props) {
        super(props)
        this.clickHandler = this.clickHandler.bind(this)
    }

    componentDidMount() {
        window.addEventListener('click', this.clickHandler)
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.clickHandler)
    }

    clickHandler(e) {
        if (document.getElementById("bar-chef").contains(e.target)) {
            if (!document.getElementById("foreground-chef").contains(e.target)) {
                document.getElementById("bar-chef").classList.add("active");
                document.getElementById("foreground-chef").style.opacity = 0;
                document.getElementById("content1").style.opacity = 0;
                setTimeout(() => {
                    document.getElementById("foreground-chef").style.opacity = 1;
                    document.getElementById("content1").style.opacity = 1;
                    document.getElementById("bar-chef").classList.remove('active');
                }, 2500)
            }
        }
    }


    render() {
        const { t } = this.props;
        return (
            <>
                <section id="chefs" className="chefs">
                    <Carousel showArrows showStatus={false} showThumbs={false} autoPlay={false} interval={3000} stopOnHover infiniteLoop swipeable={false}>
                        {/* Bar chef Master Images and Details */}
                        <div id="bar-chef" className="bar-chef">
                            <div className="container" id="container" data-aos="fade-up">
                                <div className="row foreground-chef">
                                    <div className="abso">
                                        <div className="section-title">
                                            <h2>{t('about-about')}</h2>
                                            <p>More about <img src={Logo} height="50" alt="" /></p>
                                        </div>
                                        <div id="content1" className="content">
                                            <h3>Brew Cafe & Wine Bar | Brisbane</h3>

                                            <p className="font-italic">
                                                Speciality Cocktails | Craft Beers | Finger Food | Coffee
                                            </p>
                                            <ul>
                                                <li><i className="icofont-check-circled"></i> We do long hours, 7 days a week.
                                                </li>
                                                <li><i className="icofont-check-circled"></i> We can cater for groups large or small and for any different type of occasion.</li>
                                                <li><i className="icofont-check-circled"></i> We serve a variety of vegan and gluten free options.</li>
                                            </ul>
                                            <p>
                                                Come on in if you are looking for a fun environment, great finger food a catch up with friends over a lively coffee table or if you just wish to beat the heat with our in-house tropical drinks.
                                            </p>
                                        </div>
                                    </div>

                                    <div id="foreground-chef" class="owl-carousel owl-theme">
                                        <div class="item">
                                            <div class="product font-rale">
                                                <div className="member" data-aos="zoom-in" data-aos-delay="350">
                                                    <img src="assets/img/chef/BarChef1 - proportioned_345.jpg" alt="" />
                                                    <div className="member-info">
                                                        <div className="member-info-content">
                                                            <h4>Aksana Tsarnovska</h4>
                                                            <span>Head Bartender</span>
                                                        </div>
                                                        <div className="social" id="social">
                                                            <span onClick={() => { window.open("https://www.facebook.com/aksana.Lall") }} target="_blank"><i
                                                                class="icofont-facebook"></i></span>
                                                            <span onClick={() => { window.open("https://www.instagram.com/aksanashanus") }} target="_blank"><i
                                                                class="icofont-instagram"></i></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="item">
                                            <div class="product font-rale">
                                                <div className="member" data-aos="zoom-in" data-aos-delay="350">
                                                    <img src="assets/img/chef/BarChef2 - proportioned_345.jpg" alt="" />
                                                    <div className="member-info">
                                                        <div className="member-info-content">
                                                            <h4>John Mansour</h4>
                                                            <span>Head Bartender</span>
                                                        </div>
                                                        <div className="social" id="social">
                                                            <span onClick={() => { window.open("https://www.facebook.com/johnny.mansour.315") }} target="_blank"><i
                                                                class="icofont-facebook"></i></span>
                                                            <span onClick={() => { window.open("https://www.instagram.com/john_monsour") }} target="_blank"><i
                                                                class="icofont-instagram"></i></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        {/*End of  Bar chef Master Images and Details */}

                        {/* Food chef Master Images and Details */}
                        <div id="food-chef" className="food-chef">
                            <div className="container" id="container" data-aos="fade-up">

                                <div className="row foreground-food">
                                    <div className="abso">
                                        <div className="section-title">
                                            <h2>{t('about-about')}</h2>
                                            <p>More about <img src={Logo} height="50" alt="" /></p>
                                        </div>
                                        <div id="content2" className="content content2">
                                            <h3>Brew Cafe & Wine Bar | Brisbane</h3>

                                            <p className="font-italic">
                                                Speciality Cocktails | Craft Beers | Finger Food | Coffee
                                            </p>
                                            <ul>
                                                <li><i className="icofont-check-circled"></i> We do long hours, 7 days a week.
                                                </li>
                                                <li><i className="icofont-check-circled"></i> We can cater for groups large or small and for any different type of occasion.</li>
                                                <li><i className="icofont-check-circled"></i> We serve a variety of vegan and gluten free options.</li>
                                            </ul>
                                            <p>
                                                Come on in if you are looking for a fun environment, great finger food a catch up with friends over a lively coffee table or if you just wish to beat the heat with our in-house tropical drinks.
                                            </p>
                                        </div>
                                    </div>

                                    <div class="owl-carousel owl-theme">
                                        <div class="item">
                                            <div class="product font-rale">
                                                <div className="member" data-aos="zoom-in" data-aos-delay="350">
                                                    <img src="assets/img/chef/FoodChef01 - proportioned_345.jpg" alt="" />
                                                    <div className="member-info">
                                                        <div className="member-info-content">
                                                            <h4>Gene Gonzalez</h4>
                                                            <span>Grill Chef</span>
                                                        </div>
                                                        <div className="social" id="social">
                                                            <span onClick={() => { window.open("https://www.facebook.com/Chef-Gene-Gonzalez-1786146941658928") }} target="_blank"><i
                                                                class="icofont-facebook"></i></span>
                                                            <span onClick={() => { window.open("https://www.instagram.com/chefgenegonzalez") }} target="_blank"><i
                                                                class="icofont-instagram"></i></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="item">
                                            <div class="product font-rale">
                                                <div className="member" data-aos="zoom-in" data-aos-delay="350">
                                                    <img src="assets/img/chef/FoodChef02 - proportioned_345.jpg" alt="" />
                                                    <div className="member-info">
                                                        <div className="member-info-content">
                                                            <h4>Elias Mora</h4>
                                                            <span>{t('chef-chefDesignation')}</span>
                                                        </div>
                                                        <div className="social" id="social">
                                                            <span onClick={() => { window.open("https://www.facebook.com/Elias-Mora-Masterchef-Syria-458608950817387") }} target="_blank"><i
                                                                class="icofont-facebook"></i></span>
                                                            <span onClick={() => { window.open("https://www.instagram.com/elias_mora__") }} target="_blank"><i
                                                                class="icofont-instagram"></i></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>




                                    {/* </OwlCarousel> */}
                                </div>
                            </div>
                        </div>
                        {/* End of Food chef Master Images and Details */}

                    </Carousel>
                </section>
            </>
        )
    }
})
