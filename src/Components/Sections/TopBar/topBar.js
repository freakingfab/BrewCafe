import React, { Component } from 'react'
import i18n from '../../../i18n';
import { withTranslation } from 'react-i18next';
import styles from './TopBar.module.css'

export default withTranslation()(class topBar extends Component {
  changeLng = (lng) => {
    i18n.changeLanguage(lng);
    this.setState();
    window.history.replaceState(null, null, '/' + lng)
  }
  render() {
    const { t } = this.props;
    var arStyle = {};
    var enStyle = {};
    var esStyle = {};
    var frStyle = {};
    var guStyle = {};
    if (i18n.language === "ar") {
      arStyle = { fontWeight: 'bold' };
    } else if (i18n.language === 'en') {
      enStyle = { fontWeight: 'bold' };
    } else if (i18n.language === 'es') {
      esStyle = { fontWeight: 'bold' };
    } else if (i18n.language === 'fr') {
      frStyle = { fontWeight: 'bold' };
    } else {
      guStyle = { fontWeight: 'bold' };
    }

    return (
      <>
        <div id="topbar" className="d-flex align-items-center fixed-top">
          <div className="container d-flex justify-content-between ">
            <div className={styles.contactInfo}>
              <a href="tel:+91 98679 10690" className={styles.topbarIcon}><i className="icofont-phone"></i> </a>
              <span>
                <a href="//api.whatsapp.com/send?phone=+91 98679 10690"
                  className={styles.topbarIcon} target="_blank" rel="noopener noreferrer"><i className="icofont-whatsapp"></i> </a>
              </span>
              <span className={styles.contactDays}>Timings<i className="fa fa-angle-down"></i>
                <div className={styles.timings}>
                  <ul>
                    <li><span>Mon-Wed: 07:00 - 22:00</span></li>
                    <li><span>Thu: 07:00 - 23:00</span></li>
                    <li><span>Fri: 07:00 - 12:00</span></li>
                    <li><span>Sat: 08:00 - 12:30</span></li>
                    <li><span>Sun: 08:00 - 10:00</span></li>
                  </ul>
                </div>
              </span>
            </div>
            <div className={styles.languages}>
              <select value={i18n.language} onChange={(event) => { this.changeLng(event.target.value) }} className={styles.languageSelector}>
                <option value="ar">AR</option>
                <option value="en">EN</option>
                {/* <option value="es">ES</option> */}
                <option value="fr">FR</option>
                {/* <option value="gu">GU</option> */}
              </select>
            </div>
          </div>
        </div>
      </>
    )
  }
})
