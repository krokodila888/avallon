import React from 'react';
import price from '../../../images/price.png';
import './Prices.css';

function Prices() {

  return (
    <section className="prices__content" id="prices">
      <img
        src={price}
        alt="Фоновое изображение"
        className="prices__icon"
      />
      <h2 className='prices__title'>
        ПРАЙС-ЛИСТЫ
      </h2>
      <div className='prices__text-block'>
        <div className='prices__gradient'>
          <h3 className='prices__link'>
            ОСНОВНЫЕ ТОВАРЫ ДЛЯ СКЛАДА
          </h3>
        </div>
        <div className='prices__gradient'>
          <h3 className='prices__link'>
            ПРАЙС-ЛИСТ НА БАНКОВСКУЮ РЕЗИНКУ
          </h3>
        </div>
        <div className='prices__gradient'>
          <h3 className='prices__link'>
            ПРАЙС-ЛИСТ НА ПРОТИВОПОЖАРНОЕ ОБОРУДОВАНИЕ
          </h3>
        </div>
      </div>
    </section>
  );
}  

export default Prices; 