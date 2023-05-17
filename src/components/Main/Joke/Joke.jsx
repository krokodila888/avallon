import React from 'react';
import star from '../../../images/star.png';
import './Joke.css';

function Joke() {

  return (
    <section className="joke__content" id="joke">
      <marquee scrollamount="20" className='joke__title'>шутка месяца от директора ☆ В такое тяжёлое для страны время бросать пить просто подло.</marquee>

    </section>
  );
}  

export default Joke; 