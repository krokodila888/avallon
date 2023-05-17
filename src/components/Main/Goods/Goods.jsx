import React from 'react';
import money from '../../../images/money.png';
import tape from '../../../images/tape.png';
import dia from '../../../images/dia.png';
import box from '../../../images/box.png';
import './Goods.css';

function Goods() {

  return (
    <>
      <section className="goods__content" id="money">
        <img
          src={money}
          alt="Фоновое изображение"
          className="goods__main-pic"
        />
        <div>
          <h1 className="goods__title">
            Эластичность, надежность, экономия:<br/> 
            <img
              src={dia}
              alt="Эмоджи"
              className="goods__emoji"
            />
            &nbsp;банковская резинка
          </h1>
          <p className="goods__text">
            Банковская резинка - идеальное решение для оптовой и розничной торговли. Сделанная из высококачественного материала, она обеспечивает надежную фиксацию и эластичность в использовании.
          </p>
          <div className="goods__last-text-block">
            <p className="goods__text-price">
              Смотреть прайс-лист
            </p>
          </div>
        </div>
      </section>
      <section className="goods__content1" id="tape">
        <div>
          <h1 className="goods__title">
            Герметичная защита вашего груза: скотч и стрейч-пленка &nbsp;
            <img
              src={box}
              alt="Эмоджи"
              className="goods__emoji"
            />
          </h1>
          <p className="goods__text">
            Мы предлагаем широкий выбор качественных упаковочных материалов. Скотч обеспечивает надежную фиксацию упаковки, а стрейч-пленка позволяет создать герметичный слой, защищающий от пыли, влаги и повреждений
          </p>
          <div className="goods__last-text-block1">
            <p className="goods__text-price">
              Смотреть прайс-лист
            </p>
          </div>
        </div>
        <img
          src={tape}
          alt="Фоновое изображение"
          className="goods__main-pic1"
        />
      </section>
    </>
  );
}  

export default Goods;
