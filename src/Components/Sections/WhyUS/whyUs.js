import React, { Component } from 'react'
import { withTranslation } from 'react-i18next';
import Logo from "../../../img/Navbar/BREW-WORD_white-logo.png"
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import styles from './WhyUs.module.css'

export default withTranslation()(class whyUs extends Component {
    render() {
        const { t } = this.props;
        return (
            <>
                <section id="why-us" className={styles.whyUs}>
                    <div className="container" data-aos="fade-up">

                        <div className="section-title">
                            <h2>{t('whyUs-whyUs')}</h2>
                            <p className="long-text">Why Choose <img src={Logo} height="50" alt="" /></p>
                            <p className="small-text">Why <img src={Logo} height="50" alt="" /></p>
                        </div>

                        <div className={`row ${styles.whyUsDesktop}`}>

                            <div className="col-lg-4">
                                <div className={styles.box} data-aos="zoom-in" data-aos-delay="300">
                                    <div className={styles.mobileBoxView}>
                                        <span className={styles.boxNo}>{t('whyUs-1')}</span>
                                        <h4 className="box-head">{t('whyUs-heading1')}</h4>
                                    </div>
                                    <div className={styles.pcBoxView}>
                                        <span className={styles.boxNo}>{t('whyUs-1')}</span>
                                        <h4 className="box-head">{t('whyUs-heading1')}</h4>
                                    </div>
                                    <p>{t('whyUs-message1')}</p>
                                </div>
                            </div>

                            <div className="col-lg-4 mt-4 mt-lg-0">
                                <div className={styles.box} data-aos="zoom-in" data-aos-delay="650">
                                    <div className={styles.mobileBoxView}>
                                        <span className={styles.boxNo}>{t('whyUs-2')}</span>
                                        <h4>{t('whyUs-heading2')}</h4>
                                    </div>
                                    <div className={styles.pcBoxView}>
                                        <span className={styles.boxNo}>{t('whyUs-2')}</span>
                                        <h4>{t('whyUs-heading2')}</h4>
                                    </div>
                                    <p>{t('whyUs-message2')}</p>
                                </div>
                            </div>

                            <div className="col-lg-4 mt-4 mt-lg-0">
                                <div className={styles.box} data-aos="zoom-in" data-aos-delay="1000">
                                    <div className={styles.mobileBoxView}>
                                        <span className={styles.boxNo}>{t('whyUs-3')}</span>
                                        <h4>{t('whyUs-heading3')}</h4>
                                    </div>
                                    <div className={styles.pcBoxView}>
                                        <span className={styles.boxNo}>{t('whyUs-3')}</span>
                                        <h4>{t('whyUs-heading3')}</h4>
                                    </div>
                                    <p>{t('whyUs-message3')}</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.whyUsMobile}>
                            <Splide
                                options={{
                                    speed: 1000,
                                    interval: 3000,
                                    rewind: true,
                                    type: "slide",
                                    perPage: 1,
                                    pagination: true,
                                    gap: "0",
                                    autoplay: true,
                                    pauseOnHover: false,
                                    resetProgress: false,
                                    arrows: false,
                                    updateOnMove: true,
                                }}
                                hasSliderWrapper
                            >
                                <SplideSlide>
                                    <div className={styles.box} data-aos="zoom-in" data-aos-delay="300">
                                        <div className={styles.pcBoxView}>
                                            <span className={styles.boxNo}>{t('whyUs-1')}</span>
                                            <h4 className="box-head">{t('whyUs-heading1')}</h4>
                                        </div>
                                        <div className={styles.mobileBoxView}>
                                            <span className={styles.boxNo}>{t('whyUs-1')}</span>
                                            <h4 className="box-head">{t('whyUs-heading1')}</h4>
                                        </div>
                                        <p>{t('whyUs-message1')}</p>
                                    </div>
                                </SplideSlide>
                                <SplideSlide>
                                    <div className={styles.box} data-aos="zoom-in" data-aos-delay="650">
                                        <div className={styles.pcBoxView}>
                                            <span className={styles.boxNo}>{t('whyUs-2')}</span>
                                            <h4 className="box-head">{t('whyUs-heading2')}</h4>
                                        </div>
                                        <div className={styles.mobileBoxView}>
                                            <span className={styles.boxNo}>{t('whyUs-2')}</span>
                                            <h4>{t('whyUs-heading2')}</h4>
                                        </div>
                                        <p>{t('whyUs-message2')}</p>
                                    </div>
                                </SplideSlide>
                                <SplideSlide>
                                    <div className={styles.box} data-aos="zoom-in" data-aos-delay="1000">
                                        <div className={styles.pcBoxView}>
                                            <span className={styles.boxNo}>{t('whyUs-3')}</span>
                                            <h4 className="box-head">{t('whyUs-heading3')}</h4>
                                        </div>
                                        <div className={styles.mobileBoxView}>
                                            <span className={styles.boxNo}>{t('whyUs-3')}</span>
                                            <h4>{t('whyUs-heading3')}</h4>
                                        </div>
                                        <p>{t('whyUs-message3')}</p>
                                    </div>
                                </SplideSlide>
                            </Splide>
                        </div>
                    </div>
                </section>
            </>
        )
    }
})
