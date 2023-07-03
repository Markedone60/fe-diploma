import React from "react";
import '../SuccessPage.css';

export default function SuccessForm() {
  return (
    <div className="successform-wraper">
      <section className="successform">
        <article className="successform-header">
          <h2 className="successform-header-order">№123</h2>
          <div className="successform-header-sum">
            <h1 className="sum-text">сумма</h1>
            <div className="sum-numbers">
              <span className="sum-numbers-text">1000</span>
              <img className="sum-numbers-img" src={require('../../../../../src/images/sidebar/sidebar-last-rub.png')} alt="logo" />
            </div>
          </div>
        </article>

        <article className="successform-tips">
          <div className="tips-item">
            <img className="tips-item-image" src={require('../../../../images/success/success1.png')} alt="pic" />
            <h3 className="tips-item-text">билеты будут отправлены на ваш e-mail</h3>
          </div>
          <div className="tips-item">
            <img className="tips-item-image" src={require('../../../../images/success/success2.png')} alt="pic" />
            <h3 className="tips-item-text">распечатайте и сохраняйте билеты до даты поездки</h3>
          </div>
          <div className="tips-item">
            <img className="tips-item-image" src={require('../../../../images/success/success3.png')} alt="pic" />
            <h3 className="tips-item-text">предьявите распечатанные билеты при посадке</h3>
          </div>
        </article>

        <article className="successform-text">
          <h2 className="successform-text-name">Имя Отчество</h2>
          <p className="successform-text-text">
            Ваш заказ успешно оформлен. <br />
            В ближайшее время с вами свяжется наш оператор для подтверждения.
          </p>
          <p className="successform-text-text">
            Благодарим Вас за оказанное доверие и желаем приятного путешествия!
          </p>
        </article>

        <article className="successform-footer">
          <div className="successform-footer-left">
            <p className="successform-footer-left-text">Оценить сервис</p>
            <div className="successform-footer-left-icon">
              <img className="footer-left-icon" src={require('../../../../images/success/success4.png')} alt="pic" />
            </div>
          </div>
          <div className="successform-footer-right">
            <button className="change-button successform-button">Вернуться на главную</button>
          </div>
        </article>
      </section>
    </div>
  )
}