import React, { Component } from 'react'
import { withTranslation } from 'react-i18next';
import Logo from "../../../img/Navbar/BREW-WORD_white-logo.png"
import styles from './Contact.module.css'

export default withTranslation()(class contact extends Component {
    render() {
        const { t } = this.props;
        return (
            <>
                <section id="contact" className={`${styles.contact} pb-2`}>
                    <div className="container" data-aos="fade-up">
                        <div className="section-title">
                            <h2>{t('contact-contactHeader')}</h2>
                            <p><img src={Logo} height="50" alt="" /> Location</p>
                        </div>
                    </div>
                    <div data-aos="fade-up">
                        <iframe
                            style={{ border: '0', width: '100%', height: '350px' }}
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14160.016377053667!2d153.01638406977543!3d-27.469131900000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b915a048ffd576d%3A0xf323b068f954cd0c!2sBrew+Cafe+%26+Wine+Bar!5e0!3m2!1sen!2sau!4v1552233862933"
                            frameBorder="0"
                            allowFullScreen>
                        </iframe>
                    </div>
                    <div className="container3" data-aos="fade-up">
                        <div className={styles.contactRow}>
                            <div className={styles.contactCol}>
                                <div className={styles.info}>
                                    <div className={styles.address}>
                                        <div className="icon-container">
                                            <i className="icofont-google-map"></i>
                                        </div>
                                        <div className={styles.verticalCenterDiv}>
                                            <p>Lower Burnett Lane, Brisbane, Queensland 4000 Australia</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`${styles.contactCol} ${styles.times}`}>
                                <div className={styles.info}>
                                    <div className={styles.openHours}>
                                        <div className={`icon-container ${styles.bottomTime}`}>
                                            <p className=""><i className="fa fa-angle-up"></i>Timings</p>
                                            <div className={styles.timingsBottom}>
                                                <ul>
                                                    <li><span>Mon-Wed: 07:00 - 22:00</span></li>
                                                    <li><span>Thu: 07:00 - 23:00</span></li>
                                                    <li><span>Fri: 07:00 - 12:00</span></li>
                                                    <li><span>Sat: 08:00 - 12:30</span></li>
                                                    <li><span>Sun: 08:00 - 10:00</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className={`${styles.contactCol} ${styles.mailPhone}`}>
                                <div className={styles.info}>
                                    <div className={styles.verticalCenterDiv}>
                                        <p className={styles.contactUs}>{t('contact-contactMethods')}</p>
                                    </div>
                                    <div className={styles.contactIconsMargin}>
                                        <div className={styles.email}>
                                            <span
                                                onClick={() => { window.open("https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=hayden@brewcafewinebar.com") }}
                                                className={`${styles.contactIcon} pointer`}><i
                                                    className="icofont-envelope"></i></span>

                                        </div>
                                        <div className={styles.phone}>
                                            <span className={`${styles.contactIcon} pointer`}
                                                onClick={() => { window.open("tel:+61 7 3211 4242", "_self") }}>
                                                <i className="icofont-phone"></i>
                                            </span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
})