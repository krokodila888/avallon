import React from "react";
import Promo from './Promo/Promo.jsx';
import Blocks from './Blocks/Blocks.jsx';
import Goods from './Goods/Goods.jsx';
import Prices from './Prices/Prices.jsx';
import Header from '../Header/Header.jsx';
import Delivery from './Delivery/Delivery.jsx';
import Contacts from './Contacts/Contacts.jsx';
import Joke from './Joke/Joke.jsx';
import './Main.css';

function Main() {

  return (
    <main className="main__content">
      <section className="main__content">
        <Header/>
        <Promo/>
        <Blocks/>
        <Goods/>
        <Prices/>
        <Delivery/>
        <Joke/>
        <Contacts/>
      </section>
    </main>
  );
}  

export default Main;
