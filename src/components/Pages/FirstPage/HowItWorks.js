import React from "react";
import './FirstPage.css';

export default function HowItWorks() {
  return (
    <section className="how" id="howitworks">
      <header className="how-header">
        <h2 className="how-header-text">Как это работает</h2>
        <button className="how-button" type="button">Узнать больше</button>
      </header>
      <article className="how-container">
        <div className="how-item">
          <img className="how-item-image" src={require('../../../images/how-icon1.png')} alt="pic"/>
          <h3 className="how-item-text">Удобный заказ на сайте</h3>         
        </div>II
        <div className="how-item">
          <img className="how-item-image" src={require('../../../images/how-icon2.png')} alt="pic"/>
          <h3 className="how-item-text">Нет необходимости ехать в офис</h3>         
        </div>
        <div className="how-item">
          <img className="how-item-image" src={require('../../../images/how-icon3.png')} alt="pic"/>
          <h3 className="how-item-text">Огромный выбор направлений</h3>         
        </div>
      </article>
    </section>
  )
}