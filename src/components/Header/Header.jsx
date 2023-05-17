import React, { useState } from "react";
import logo from '../../images/back_logo.png';
import call from '../../images/call-button.png';
import email from '../../images/email-button.png';
import nav from '../../images/hamb-menu-icon.png';
import Navigation from  '../Navigation/Navigation.jsx';
import './Header.css';
import { useResize } from '../../utils/useResize';

function Header() {

  const [isNavigationOpen, setIsNavigationOpen] = useState(false);
  const { isScreenLg } = useResize();

  function openNavigation() {
    return setIsNavigationOpen(true)
  }

  function closeNavigation() {
    setIsNavigationOpen(false);
  }

  return (
    <header className="header">
      <div className="header__content">
        <div className="header__logo-block">
          <h2 className="header__logo" alt="Логотип">Аваллон</h2>
          <img
            src={logo}
            alt="Логотип"
            className="header__logo-img"
          />
        </div>
        {isScreenLg ?
        (<div className="header__right-block">
          <a href="#promo" className="header__link">Почему мы?</a>
          <a href="#money" className="header__link">Наши товары</a>
          <a href="#delivery" className="header__link">Доставка</a>
          <a href="#contacts" className="header__link">Контакты</a>
          <div className='header__pic-block'>
            <img
              src={call}
              alt="Ссылка на телефон"
              className="header__link-img"
            />
            <img
              src={email}
              alt="Ссфлка на электронную почту"
              className="header__link-img"
            />
          </div>
        </div>) : 
          (<Navigation 
            onClose={closeNavigation} 
            isNavigationOpen={isNavigationOpen} 
            openNavigation={openNavigation} 
          />)}
      </div>
    </header>
    );
  }
  
  export default Header;
