// import React from 'react';
import { Link, Outlet } from 'react-router-dom';
// import Aboutpage from '../pages/Aboutpage';
import image from "../assets/image 4.svg"
import image2 from "../assets/image 3.svg"

const Layout = () => {
  return (
    <>
      <header className='header'>
        <div className="container">
          <nav className='header__nav'>
            <div className="header__nav-group">
              <Link className="header__group-link" to="/blog">Каталог</Link>
              <Link className="header__group-link" to="/about">Редакция</Link>
              <Link className="header__group-link" to="/">Главная</Link>
            </div>
            <div className="header__nav-group">
              <Link className="header__group-link header__group-link_logo" to="/">URAL RADIO ENGINEERING JOURNAL</Link>
            </div>
            <div className="header__nav-group">
              <Link className="header__group-link" to="/about">Контакты</Link>
              <Link className="header__group-link" to="/about">Авторам</Link>
            </div>
            <div className='header__languages'>
              <img src={image} alt="" />
              <img src={image2} alt="" />
            </div>
          </nav>
        </div>
      </header>

      <Outlet/>

      <footer className='footer'>
        
      </footer>
    </>
  );
};

export default Layout;