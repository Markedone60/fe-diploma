import React from "react";
import '../OrderPage.css';

export default function ProgressBar() {
  return(
    <section className="progress">
      <ul className="progress-list">
        <li className="progress-item">
          <div className="progress-item-number">1</div>
          <div className="progress-item-text">Билеты</div>
        </li>
        <li className="progress-item">
          <div className="progress-item-number">2</div>
          <div className="progress-item-text">Пассажиры</div>
        </li>
        <li className="progress-item">
          <div className="progress-item-number">3</div>
          <div className="progress-item-text">Оплата</div>
        </li>
        <li className="progress-item">
          <div className="progress-item-number">4</div>
          <div className="progress-item-text">Проверка</div>
        </li>
      </ul>
    </section>   
  )
}