import React from 'react';
import price from '../../../images/price.png';
import './Delivery.css';

function Delivery() {

  return (
    <section className="delivery__content" id="delivery">
      <h2 className='delivery__title'>
        ДОСТАВКА
      </h2>
      <p className='delivery__text'>
        Гарантированная доставка вовремя
      </p>
      <div className='delivery__gradient'>
        <h3 className='delivery__text1'>
          Мы предлагаем <span className="delivery__span">бесплатную доставку </span>нашим транспортом по Москве при сумме заказа свыше 30 000 рублей. Если вы находитесь в районе, примыкающем к нашему складу (станция метро Шоссе Энтузиастов), мы постараемся доставить ваш заказ в течение короткого времени. При заказе на сумму до 30 000 рублей мы также можем организовать доставку в течение нескольких дней при наличии попутной доставки.
        </h3>
      </div>
      <div className='delivery__gradient1'>
        <h3 className='delivery__text1'>
        Обычная <span className="delivery__span">стоимость доставки </span>нашим транспортом по Москве при заказе до 30000 рублей составляет <span className="delivery__span">500 рублей</span>. Доставка в Московской области оговаривается индивидуально в зависимости от расстояния и заказа.
        </h3>
      </div>
    </section>
  );
}  

export default Delivery; 