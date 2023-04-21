import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import Logo from "../../../img/Navbar/BREW-WORD_white-logo.png"
import styles from './NavBar.module.css'
import $ from "jquery";

const NavBar = (props) => {
    const { t } = useTranslation();
    // const [state, setState] = useState({ activeID: "home" })
    const [activeID, setActiveID] = useState("home");
    const nav_sections = $("section");

    useEffect(() => {
        $(window).on("scroll", function () {
            var cur_pos = $(this).scrollTop() + 200;
            nav_sections.each(function () {
                var top = $(this).offset().top;
                var bottom = top + $(this).outerHeight();

                if (cur_pos >= top && cur_pos <= bottom) {
                    setActiveID($(this).attr("id"));
                }
                // if (cur_pos < 300) {
                //   $(".nav-menu ul:first li:first").addClass("active");
                // }
            });
        });
    });

    const navigateTo = (id) => {
        if (id.includes('home')) {
            window.scrollTo(0, 0)
        } else {
            document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
        }
        setActiveID({ activeID: id });
    }

    const isActive = (id) => {
        if (activeID === id) {
            return 'active';
        } else {
            return '';
        }
    }

    return (
        <>
            <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center justify-content-between">
                    <h1 className={styles.logo}><a href="index.html">
                        <img src={Logo} height="40" alt="" /> |  <span className={styles.companyHeader}>Coffee, wine & dine!</span>
                    </a>
                    </h1>
                    <nav className={`${styles.navMenu} nav-menu d-none d-lg-block`}>
                        <ul>
                            <li className={isActive('home')}><p onClick={() => { navigateTo('home') }}>{t('navBar-home')}</p></li>
                            <li className={isActive('chefs')}><p onClick={() => { navigateTo('chefs') }}>{t('navBar-about')}</p></li>
                            <li className={isActive('menu')}><p onClick={() => { navigateTo('menu') }}>{t('navBar-menu')}</p></li>
                            <li className={isActive('photos')}><p onClick={() => { navigateTo('photos') }}>Photo</p></li>
                            <li className={isActive('contact')}><p onClick={() => { navigateTo('contact') }}>{t('navBar-contact')}</p></li>
                        </ul>
                    </nav>
                </div>
                <button type="button" className="mobile-nav-toggle d-lg-none"><i className="icofont-navigation-menu"></i></button>
            </header>
            <nav className="mobile-nav d-lg-none">
                <button type="button" className="mobile-nav-close">
                    <i className="icofont-close"></i>
                </button>
                <ul>
                    <li className={isActive('home')}><p onClick={() => { navigateTo('home') }}>{t('navBar-home')}</p></li>
                    <li className={isActive('chefs')}><p onClick={() => { navigateTo('chefs') }}>{t('navBar-about')}</p></li>
                    <li className={isActive('menu')}><p onClick={() => { navigateTo('menu') }}>{t('navBar-menu')}</p></li>
                    <li className={isActive('photos')}><p onClick={() => { navigateTo('photos') }}>Photo</p></li>
                    <li className={isActive('contact')}><p onClick={() => { navigateTo('contact') }}>{t('navBar-contact')}</p></li>
                </ul>
            </nav>
            <div className="mobile-nav-overly"></div>
        </>
    );
};

export default NavBar;