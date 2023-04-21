import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import Animation from '../TextAnimation/Animation-text';
import styles from './Hero.module.css'

export default withTranslation()(class webHeader extends Component {
    navigateTo = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
    }
    render() {
        const { t } = this.props;
        return (
            <>
                <section id="hero" className={`${styles.hero} d-flex align-items-center`}>
                    <div className={`${styles.heroContainer} container position-relative text-center text-lg-start`} data-aos="zoom-in" data-aos-delay="350">
                        <div className="row">
                            <Animation />
                            <div className="col-lg-8 col-md-8">
                                <div className={styles.heroHeader}>

                                    <h2>{t('webHeader-freshPrep')} <span>{t('webHeader-G&G')}</span> {t('webHeader-onWheels')}</h2>
                                </div>
                                <div className={styles.btns}>
                                    <p onClick={() => { this.navigateTo('menu') }} className={`${styles.btnMenu} animated fadeInUp scrollto`}>{t('webHeader-menu')}</p>
                                    <p onClick={() => { this.navigateTo('photos') }} className={`${styles.btnMenu} animated fadeInUp scrollto`}>Photo</p>
                                    {/* <p onClick={() => { this.navigateTo('videos') }} className={`${styles.btnMenu} animated fadeInUp scrollto`}>Video</p> */}
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-4 d-flex justify-content-center" data-aos="zoom-in" data-aos-delay="800">
                                <a href="https://www.youtube.com/watch?v=xw4bCq3U6Bk" className={`venobox ${styles.playBtn}`} data-vbtype="video" data-autoplay="true"></a>
                            </div>

                        </div>
                    </div>
                </section>
            </>
        )
    }
})
