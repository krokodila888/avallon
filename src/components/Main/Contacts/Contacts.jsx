import React from 'react';
import map from '../../../images/map.png';
import logo from '../../../images/back_logo.png';
import './Contacts.css';

function Contacts() {

  function onClick1() {
    window.open("https://yandex.ru/maps/-/CCUoYRwM3B")
  }

  return (
    <section className="contacts__content" id="contacts">
      <h2 className='contacts__title'>
        СВЯЖИТЕСЬ С НАМИ
      </h2>
      <div className='contacts__gradient'>
        <div className='contacts__text-block'>
          <div className='contacts__column'>
            <h3 className='contacts__title1'>
              Позвоните нам
            </h3>
            <p className='contacts__text'>
              +7 (495) 506-21-92
            </p>
            <p className='contacts__text'>
              +7 (495) 304-05-69
            </p>
          </div>
          <div className='contacts__column'>
            <h3 className='contacts__title1'>
              Напишите нам
            </h3>
            <p className='contacts__text'>
              5062192@bk.ru
            </p>
          </div>
          <div className='contacts__column'>
            <h3 className='contacts__title1'>
              Наш адрес
            </h3>
            <p className='contacts__text'>
            г. Москва, ш. Энтузиастов, Московский Прожекторный завод (ЗАО «МПЗ»), строение 2 (склад 92).
            </p>
          </div>
        </div>
        <img
          src={map}
          alt="Адрес на карте"
          className="contacts__map"
          onClick={onClick1}
        />
      </div>
      <div className='contacts__gradient1'>
        <div className='contacts__background'>
        <div className='contacts__text-block1'>
          <div className="contacts__logo-block">
            <h2 className="contacts__logo" alt="Логотип">Аваллон</h2>
            <img
              src={logo}
              alt="Логотип"
              className="contacts__logo-img"
            />
          </div>
          <p className='contacts__text1'>
            Аваллон — ведущий поставщик необходимых товаров для бизнеса, обслуживающий более 100 организаций на протяжении 12 лет.
          </p>
          <p className='contacts__text2'>
            +7 (495) 506-21-92
          </p>
          <p className='contacts__text2'>
            +7 (495) 304-05-69
          </p>
          <p className='contacts__text3'>
            5062192@bk.ru
          </p>
        </div>
        <div className='contacts__right-block'>
          <div className='contacts__row'>
            <div className='contacts__column'>
              <h3 className='contacts__title2'>
                Продукция
              </h3>
              <a href="#money" className="contacts__text4">
                Банковская резинка
              </a>
              <a href="#tape" className="contacts__text4">
                Упаковочные материалы
              </a>
              <a href="#prices" className="contacts__text4">
                Прайс-листы на товары
              </a>
            </div>
            <div className='contacts__column'>
              <h3 className='contacts__title2'>
                О компании
              </h3>
              <a href="#blocks" className="contacts__text4">
                Почему мы?
              </a>
              <a href="#delivery" className="contacts__text4">
                Доставка
              </a>
              <a href="#contacts" className="contacts__text4">Контакты</a>
            </div>
          </div>
          <p className='contacts__copyright'>© Фирма "АВАЛЛОН", 2011 — 2023</p>
        </div>
        </div>
      </div>

    </section>
  );
}  

export default Contacts; 