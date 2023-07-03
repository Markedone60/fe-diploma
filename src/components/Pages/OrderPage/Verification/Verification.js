import React from "react";
import TrainElement from "../TrainSelection/TrainElement";

export default function Verification() {
  return (
    <section className="verification">

      <div className="verification-train">
        <div className="payment-head verification-head">
          <h3 className="payment-title">Поезд</h3>
        </div>
        <div className="verification-body-train">
          <TrainElement />
        </div>
      </div>

      <div className="verification-passengers">
        <div className="payment-head verification-head">
          <h3 className="payment-title">Пассажиры</h3>
        </div>
        <div className="verification-passengers-body">
          <div className="body-left">
            <div className="body-left-item">
              <div className="body-left-image">
                <img className="body-left-image-img" src={require('../../../../../src/images/verification/verification1.png')} alt="logo"/>
                <h2 className="body-left-image-name">Взрослый</h2>
              </div>
              <div className="body-left-info">
                <p className="body-left-info-data">ФИО</p>
                <p className="body-left-info-data">Пол</p>
                <p className="body-left-info-data">Дата рождения</p>
                <p className="body-left-info-data">Документ</p>
              </div>
            </div>
            <div className="body-left-item">
              <div className="body-left-image">
                <img className="body-left-image-img" src={require('../../../../../src/images/verification/verification1.png')} alt="logo"/>
                <h2 className="body-left-image-name">Взрослый</h2>
              </div>
              <div className="body-left-info">
                <p className="body-left-info-data">ФИО</p>
                <p className="body-left-info-data">Пол</p>
                <p className="body-left-info-data">Дата рождения</p>
                <p className="body-left-info-data">Документ</p>
              </div>
            </div>
          </div>
          <div className="body-right">
            <div className="body-right-pricing">
              <h1 className="pricing-text">Всего</h1>
              <div className="pricing-sum">
                <span className="pricing-sum-text">1000</span>
                <img className="pricing-sum-img" src={require('../../../../../src/images/sidebar/sidebar-last-rub.png')} alt="logo"/>
              </div>
            </div>
            <div className="body-right-button">
              <button className="change-button">Изменить</button>
            </div>
          </div>
        </div>
      </div>

      <div className="verification-payment">
        <div className="verification-passengers">
          <div className="payment-head verification-head">
            <h3 className="payment-title">Способ оплаты</h3>
          </div>
          <div className="verification-passengers-body">
            <div className="body-left">
              <h1 className="body-left-text">Наличными</h1>
            </div>
            <div className="body-right">
              <div className="body-right-button">
                <button className="change-button">Изменить</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="payment-nextpage">
        <button className="payment-button">Подтвердить</button>
      </div>

    </section>
  )
}