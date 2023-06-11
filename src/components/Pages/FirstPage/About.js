import React from "react";
import './FirstPage.css';

export default function About() {
  return (
    <section className="about" id="about">
      <h1 className="about-title">О нас</h1>
      <div className="about-text-container">
        <p>
          Мы рады видеть вас! Мы работаем для Вас с 2003 года. 14 лет мы наблюдаем, как с каждым днем
          все больше людей заказывают жд билеты через интернет.
        </p>
        <p>
          Сегодня можно заказать железнодорожные билеты онлайн всего в 2 клика, но стоит ли это делать?
          Мы расскажем о преимуществах заказа через интернет.
        </p>
        <p className="about-text-passage">
          Покупать жд билеты дешево можно за 90 суток до отправления поезда.
          Благодаря динамическому ценообразованию цена на билеты в это время самая низкая.
        </p>
      </div>
    </section >
  )
}