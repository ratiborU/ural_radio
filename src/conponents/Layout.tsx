// import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
// import Aboutpage from '../pages/Aboutpage';
import image from "../assets/image 4.svg"
import image2 from "../assets/image 3.svg"
import Page from './Page';


const setActiveLink = ({isActive}) => isActive ? 'header__group-link header__group-link-active' : 'header__group-link';


const Layout = () => {
  return (
    <div className="wrapper">
      <header className='header'>
        {/* <div className="container"> */}
          <nav className='header__nav'>
            <div className="header__nav-group">
              <NavLink className={setActiveLink} to="/catalog">Каталог</NavLink>
              <NavLink className={setActiveLink} to="/editors">Редакция</NavLink>
              <NavLink className={setActiveLink} to="/">Главная</NavLink>
            </div>
            <div className="header__nav-group">
              <NavLink className="header__group-link header__group-link_logo" to="/">URAL RADIO ENGINEERING JOURNAL</NavLink>
            </div>
            <div className="header__nav-group">
              <NavLink className={setActiveLink} to="/contacts">Контакты</NavLink>
              <NavLink className={setActiveLink} to="/authors">Авторам</NavLink>
            </div>
            
          </nav>
          <div className='header__languages'>
            <img src={image} alt="" />
            <img src={image2} alt="" />
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