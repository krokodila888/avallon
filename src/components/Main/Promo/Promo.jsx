import React from 'react';
import main from '../../../images/main-pic.png';
import arrow from '../../../images/arrow.png';
import emoji from '../../../images/emoji.png';
import round from '../../../images/stroke.png';
import './Promo.css';

function Promo() {

  return (
    <section className="promo__content" id='promo'>
      <div className='promo__left-block'>
        <h1 className="promo__title">
          Полный спектр услуг для вашего <span className="promo__span">бизнеса</span>.
          <img
            src={emoji}
            alt="Эмоджи"
            className='promo__emoji'
          />
        </h1>
        <p className="promo__text">
          От канцелярских товаров и мебели до спецодежды и упаковочных материалов.
        </p>
        <div className="promo__last-text-block">
          <p className="promo__text-start">
            Начать сотрудничество
          </p>
          <img
            src={arrow}
            alt="Стрелка"
            className="promo__arrow-pic"
          />
        </div>
      </div>
      <div>
        <img
          src={main}
          alt="Фоновое изображение"
          className="promo__main-pic"
        />
      </div>
    </section>
  );
}  

export default Promo; 
