import { NavLink, Outlet } from 'react-router-dom';
import image from "../assets/image 4.svg"
import image2 from "../assets/image 3.svg"
import Page from './Page';
import { LOCALES } from '../i18n/locales'
import { FormattedMessage } from 'react-intl'

import { useLanguageContext } from '../i18n/languageContext';


const Layout = () => {
  const {localeChange} = useLanguageContext();
  const setActiveLink = ({isActive}: {isActive: boolean}) => isActive ? 'header__group-link header__group-link-active' : 'header__group-link';

  return (
    <div className="wrapper">
      <header className='header'>
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
            <img src={image} alt="" onClick={() => localeChange(LOCALES.ENGLISH)}/>
          </div>
          <div className="header__language-img">
            <img src={image2} alt="" onClick={() => localeChange(LOCALES.RUSSIAN)}/>
          </div>
        </div>
      </header>

      <Page>
        <Outlet/>
      </Page>

      <footer className='footer'>
        <div className="footer__text">2024 г. Издательство Уральского университета Россия, 620083, Екатеринбург, ул. Тургенева, 4</div>
      </footer>
    </div>
  );
};

export default Layout;