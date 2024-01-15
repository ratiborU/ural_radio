import React, { useState, useEffect } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
// import Aboutpage from '../pages/Aboutpage';
import image from "../assets/image 4.svg"
import image2 from "../assets/image 3.svg"
import Page from './Page';
import { LOCALES } from '../i18n/locales'
import { FormattedMessage } from 'react-intl'


const setActiveLink = ({isActive}) => isActive ? 'header__group-link header__group-link-active' : 'header__group-link';


const languages = [
  { name: 'English', code: LOCALES.ENGLISH },
  { name: 'Русский', code: LOCALES.RUSSIAN }
]


const Layout = ({ currentLocale, handleChange }) => {

  return (
    <div className="wrapper">
      <header className='header'>
        {/* <div className="container"> */}
          <nav className='header__nav'>
            <div className="header__nav-group">
              <NavLink className={setActiveLink} to="/catalog"><FormattedMessage id='header-navlink1' /></NavLink>
              <NavLink className={setActiveLink} to="/editors"><FormattedMessage id='header-navlink2' /></NavLink>
              <NavLink className={setActiveLink} to="/"><FormattedMessage id='header-navlink3' /></NavLink>
            </div>
            <div className="header__nav-group">
              <NavLink className="header__group-link header__group-link_logo" to="/">URAL RADIO ENGINEERING JOURNAL</NavLink>
            </div>
            <div className="header__nav-group">
              <NavLink className={setActiveLink} to="/contacts"><FormattedMessage id='header-navlink4' /></NavLink>
              <NavLink className={setActiveLink} to="/authors"><FormattedMessage id='header-navlink5' /></NavLink>
            </div>
            
          </nav>
          <div className='header__languages'>
            <div className="header__language-img">
              <img src={image} alt="" onClick={() => handleChange(LOCALES.ENGLISH)}/>
            </div>
            <div className="header__language-img">
              <img src={image2} alt="" onClick={() => handleChange(LOCALES.RUSSIAN)}/>
            </div>
          </div>
        {/* </div> */}
        
      </header>


      <Page>
        <Outlet/>
      </Page>
      

      <footer className='footer'>
        <div className="footer__text">2023 г. Издательство Уральского университета Россия, 620083, Екатеринбург, ул. Тургенева, 4</div>
      </footer>
    </div>
  );
};

export default Layout;