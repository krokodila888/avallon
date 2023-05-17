import './Navigation.css';

function Navigation(props) {

  const {openNavigation, onClose, isNavigationOpen} = props;

  return (
    <>
      <button 
        aria-label="Закрыть" 
        className={
          `navigation__menu-icon ${isNavigationOpen ? 'navigation__menu-icon_opened' : ''}`} 
        onClick={isNavigationOpen ? onClose : openNavigation} type="button"></button>
      <div 
        className={`navigation__content ${isNavigationOpen ? 'navigation__content_opened' : ''}`}>
        <div className="navigation__block">
          <a href="#promo" className="navigation__link" onClick={onClose}>
            Почему мы?
          </a>
          <a href="#money" className="navigation__link" onClick={onClose}>
            Наши товары
          </a>
          <a href="#delivery" className="navigation__link" onClick={onClose}>
            Доставка
          </a>
          <a href="#contacts" className="navigation__link" onClick={onClose}>
            Контакты
          </a>
          <p className="navigation__text">
            5062192@bk.ru
          </p>
          <p className="navigation__text1">
            +7 (495) 506-21-92
          </p>
          <div className="navigation__icon"/>
        </div>
      </div>
    </>
  );
}

export default Navigation;