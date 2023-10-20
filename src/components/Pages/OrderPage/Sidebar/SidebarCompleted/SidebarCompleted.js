import React from "react";
import "./SidebarCompleted.css";

export default function SidebarCompleted() {

  return (
    <section className="completed">
      <h3 className="completed-title">Детали поездки</h3>
      <section className="completed-to">

        <div className="to-header">
          <div className="header-left">
            <img className="header-left-img" src={require('../../../../../images/seats/seats1.png')} alt="pic" />
            <h3 className="header-left-title">Туда</h3>
            <p className="header-left-date">date</p>
          </div>
          <button className="header-button">-</button>
        </div>

        <div className="to-train">
          <div className="to-train-container">
            <p className="to-train-left-text">№ поезда</p>
            <p className="to-train-left-text">Название</p>
          </div>
          <div className="to-train-container">
            <h4 className="to-train-right-header">116C</h4>
            <p className="to-train-right-text">Поезд</p>
          </div>
        </div>

        <div className="to-duration">
          <p className="to-duration-text">9:00</p>
        </div>

        <div className="to-timing">
          <div className="to-timing-upper">
            <div className="upper-left">
              <h4 className="upper-header to-train-right-header">00:10</h4>
              <p className="upper-text">date</p>
            </div>
            <div className="upper-middle">
              <img className="upper-middle-img" src={require('../../../../../images/seats/seats3.png')} alt="pic" />
            </div>
            <div className="upper-right">
              <h4 className="upper-header to-train-right-header">00:10</h4>
              <p className="upper-text">date</p>
            </div>
          </div>
          <div className="to-timing-lower">
            <div className="lower-left">
              <h4 className="upper-text to-train-right-header">Место</h4>
              <p className="upper-text lower-text">Вокзал</p>
            </div>
            <div className="upper-right">
              <h4 className="upper-text to-train-right-header">Место</h4>
              <p className="upper-text upper-text">Вокзал</p>
            </div>
          </div>
        </div>
      </section>

      <section className="completed-to">
        <div className="to-header">
          <div className="header-left">
            <img className="header-left-img" src={require('../../../../../images/seats/seats9.png')} alt="pic" />
            <h3 className="header-left-title">Туда</h3>
            <p className="header-left-date">date</p>
          </div>
          <button className="header-button">-</button>
        </div>

        <div className="to-train">
          <div className="to-train-left">
            <p className="to-train-left-text">№ поезда</p>
            <p className="to-train-left-text">Название</p>
          </div>
          <div className="to-train-right">
            <h4 className="to-train-right-header">116C</h4>
            <p className="to-train-right-text">Поезд</p>
          </div>
        </div>

        <div className="to-duration">
          <p className="to-duration-text">9:00</p>
        </div>

        <div className="to-timing">
          <div className="to-timing-upper">
            <div className="upper-left">
              <h4 className="upper-header to-train-right-header">00:10</h4>
              <p className="upper-text">date</p>
            </div>
            <div className="upper-middle">
              <img className="upper-middle-img" src={require('../../../../../images/seats/seats10.png')} alt="pic" />
            </div>
            <div className="upper-right">
              <h4 className="upper-header to-train-right-header">00:10</h4>
              <p className="upper-text">date</p>
            </div>
          </div>
          <div className="to-timing-lower">
            <div className="lower-left">
              <h4 className="upper-text to-train-right-header">Место</h4>
              <p className="upper-text lower-text">Вокзал</p>
            </div>
            <div className="upper-right">
              <h4 className="upper-text to-train-right-header">Место</h4>
              <p className="upper-text upper-text">Вокзал</p>
            </div>
          </div>
        </div>
      </section>

      <section className="completed-passengers">
        <div className="to-header">
          <div className="header-left">
            <img className="header-left-img" src={require('../../../../../images/seats/seats12.png')} alt="pic" />
            <h3 className="header-left-title">Пассажиры</h3>
          </div>
          <button className="header-button">-</button>
        </div>
        <div className="to-train">
          <div className="to-train-left">
            <p className="to-train-left-text">Взрослых</p>
            <p className="to-train-left-text">Детей</p>
          </div>
          <div className="to-train-right">
            <div className="to-train-right-header">
              <span className="to-train-right-header">SUM</span>
              <img className="seats-places-img" src={require('../../../../../images/seats/seats11.png')} alt="pic" />
            </div>
            <div className="to-train-right-header">
              <span className="to-train-right-header">SUM</span>
              <img className="seats-places-img" src={require('../../../../../images/seats/seats11.png')} alt="pic" />
            </div>
          </div>
        </div>
      </section>

      <section className="completed-price">
        <h2 className="price-left">Итого</h2>
        <div className="price-right">
          <h1 className="price-right-title">7000</h1>
          <img className="price-right-img" src={require('../../../../../images/seats/seats13.png')} alt="pic" />
        </div>
      </section>
    </section>
  )

}