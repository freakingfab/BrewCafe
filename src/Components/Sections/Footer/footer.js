import React, { Component } from 'react'
import { withTranslation } from 'react-i18next';
import i18n from '../../../i18n';
import styles from './Footer.module.css'

export default withTranslation()(class footer extends Component {
    navigateTo = (id) => {
        if (id.includes('home')) {
            window.scrollTo(0, 0)
        } else {
            document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
        }

    }
    render() {
        const { t } = this.props;
        return (
            <>
                <footer id="footer" className={styles.footer}>

                    {/* footer top own code */}
                    <div className={styles.footerTop1}>
                        <div className={styles.socialMedia1}>
                            <h4>Social Media</h4>
                            <div
                                className={styles.socialLink}
                                onClick={() => { window.open('https://www.facebook.com/brewcafewinebar/') }}><i class="bx bxl-facebook"></i>
                            </div>
                            <div
                                className={styles.socialLink}
                                onClick={() => { window.open("https://www.instagram.com/brewcafewinebar/") }}><i class="bx bxl-instagram"></i>
                            </div>
                        </div>
                        <div className={styles.aboutTerms}>
                            <div
                                className={styles.termsPolicy}
                                onClick={() => { this.navigateTo('chefs') }}><span><i class="bx bx-chevron-right"></i>{t('footer-about')}</span>
                            </div>
                            <div className={styles.termsPolicy} onClick={() => {
                                if (i18n.language === 'en') {
                                    window.open('assets/docs/Terms&Conditions_Brew Café & Wine Bar.pdf')
                                } else if (i18n.language === 'fr') {

                                } else {

                                }
                            }}><span><i class="bx bx-chevron-right"></i>{t('footer-terms')}</span>
                            </div>
                            <div className={styles.termsPolicy} onClick={() => {
                                if (i18n.language === 'en') {
                                    window.open('assets/docs/Brew-PrivacyPolicy.pdf')
                                } else if (i18n.language === 'fr') {
                                    window.open('assets/docs/Terms&Conditions_desiFirangi_FR.pdf')
                                } else {
                                    window.open('assets/docs/Terms&Conditions_desiFirangi_AR.pdf')
                                }
                            }}><span><i class="bx bx-chevron-right"></i>{t('footer-privacy')}</span></div>
                        </div>
                    </div>


                    <div className="container">
                        <div className={styles.copyright}>
                            &copy; {t('footer-copyright1')} <strong><span>Brew</span></strong>. {t('footer-copyright2')}
                        </div>
                        <div className={styles.credits}>
                            {t('footer-designer')} <a href="https://koyosoftware.web.app">{t('footer-designerFirm')}</a>
                        </div>
                    </div>
                </footer>
            </>
        )
    }
})
