// import React from 'react';
import { Link, Outlet } from 'react-router-dom';
// import Aboutpage from '../pages/Aboutpage';
import image from "../assets/image 4.svg"
import image2 from "../assets/image 3.svg"
import Page from './Page';

const Layout = () => {
  return (
    <div className="wrapper">
      <header className='header'>
        <div className="container">
          <nav className='header__nav'>
            <div className="header__nav-group">
              <Link className="header__group-link" to="/catalog">Каталог</Link>
              <Link className="header__group-link" to="/editors">Редакция</Link>
              <Link className="header__group-link" to="/">Главная</Link>
            </div>
            <div className="header__nav-group">
              <Link className="header__group-link header__group-link_logo" to="/">URAL RADIO ENGINEERING JOURNAL</Link>
            </div>
            <div className="header__nav-group">
              <Link className="header__group-link" to="/contacts">Контакты</Link>
              <Link className="header__group-link" to="/authors">Авторам</Link>
            </div>
            <div className='header__languages'>
              <img src={image} alt="" />
              <img src={image2} alt="" />
            </div>
          </nav>
        </div>
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