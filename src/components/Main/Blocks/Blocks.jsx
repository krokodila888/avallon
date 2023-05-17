import React from 'react';
import men from '../../../images/men.png';
import shield from '../../../images/shield.png';
import plane from '../../../images/plane.png';
import './Blocks.css';

function Blocks() {

  return (
    <section className="blocks__content" id="blocks">
      <div className="blocks__text-block">
        <div className="blocks__column">
          <p className="blocks__title">
            10+
          </p>
          <p className="blocks__text">
            лет опыта на рынке поставок: работаем с 2013
          </p>
        </div>
        <div className="blocks__column">
          <p className="blocks__title">
            24 часа
          </p>
          <p className="blocks__text">
            быстро реагируем на потребности клиентов
          </p>
        </div>
        <div className="blocks__column">
          <p className="blocks__title">
            100+
          </p>
          <p className="blocks__text">
            организаций, оценивших наши услуги
          </p>
        </div>
        <div className="blocks__column">
          <p className="blocks__title">
            1000+
          </p>
          <p className="blocks__text">
            наименований товара в наличии
          </p>
        </div>
      </div>
      <div className="blocks__text-block">
        <div className="blocks__column-light">
          <img
            src={shield}
            alt="Иконка"
            className='blocks__icon'
          />
          <p className="blocks__title1">
            Высокое качество
          </p>
          <p className="blocks__text1">
            Наша продукция соответствует высоким стандартам качества и сертифицирована
          </p>
        </div>
        <div className="blocks__column-light">
          <img
            src={men}
            alt="Иконка"
            className='blocks__icon1'
          />
          <p className="blocks__title1">
            Подход к клиентам
          </p>
          <p className="blocks__text1">
            Наши клиенты всегда для нас на первом месте, и мы стремимся удовлетворить все их запросы
          </p>
        </div>
        <div className="blocks__column-light">
          <img
            src={plane}
            alt="Иконка"
            className="blocks__icon"
          />
          <p className="blocks__title1">
            Быстрая доставка
          </p>
          <p className="blocks__text1">
            При желании ваш заказ может быть включен в маршрут доставки даже утром
          </p>
        </div>
      </div>
    </section>
  );
}  

export default Blocks; 