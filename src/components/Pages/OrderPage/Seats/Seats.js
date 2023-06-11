import React from "react";
import './Seats.css';

export default function Seats() {

  return (
    <section className="seats">
      <h3 className="seats-header">Выбор мест</h3>

      <section className="seat">

        <div className="seat-container">
          <div className="back">
            <img className="back-img" src={require('../../../../images/seats/seats1.png')} alt="pic" />
            <button className="back-button">Выбрать другой поезд</button>
          </div>
          <div className="seat-info">
            <div className="info-from">
              <img className="from-icon" src={require('../../../../images/seats/seats2.png')} alt="pic" />
              <div className="form-name">
                <h3 className="form-name-header">Name</h3>
                <p className="form-name-direction">Direction from</p>
                <p className="form-name-direction">Direction to</p>
              </div>
            </div>

            <div className="info-route">
              <div className="route">
                <div className="route-from outbound">
                  <h3 className="route-from-time">7:00</h3>
                  <p className="route-from-direction">Москва</p>
                  <p className="route-from-direction">Вокзал</p>
                </div>
                <div className="route-arrow">
                  <img className="route-arrow-img" src={require('../../../../images/train-selector/train2.png')} alt="logo" />
                </div>
                <div className="route-from inbound">
                  <h3 className="route-from-time">7:00</h3>
                  <p className="route-from-direction">Москва</p>
                  <p className="route-from-direction">Вокзал</p>
                </div>
              </div>
            </div>

            <div className="info-time">
              <img className="time-clock" src={require('../../../../images/seats/seats4.png')} alt="pic" />
              <div className="time-duration">
                <p className="time-duration-text">N час</p>
                <p className="time-duration-text">N минут</p>
              </div>
            </div>
          </div>
        </div>

        <div className="seat-tickets">
          <h3 className="tickets-header">Количество билетов</h3>
          <div className="tickets-selection">
            <div className="selection adult">
              <select className="selection-form form-adult" />
              <p className="selection-text text-adult">Можно добавить еще 3 пассажиров</p>
            </div>
            <div className="selection child">
              <select className="selection-form form-child" />
              <p className="selection-text text-child">Можно добавить еще 3 детей до 10 лет.Свое место в вагоне, как у взрослых, но дешевле
                в среднем на 50-65%</p>
            </div>
            <div className="selection child0">
              <select className="selection-form form-child0" />
            </div>
          </div>
        </div>

        <div className="seat-vagon">
          <h3 className="tickets-header">Количество билетов</h3>
          <ul className="vagon-list">
            <li className="vagon-list-item">
              <button className="list-item-button">
                <img className="list-item-img" src={require('../../../../images/seats/seats5.png')} alt="pic" />
                <p className="list-item-text">Сидячий</p>
              </button>
            </li>
            <li className="vagon-list-item">
              <button className="list-item-button">
                <img className="list-item-img" src={require('../../../../images/seats/seats6.png')} alt="pic" />
                <p className="list-item-text">Плацкарт</p>
              </button>
            </li>
            <li className="vagon-list-item">
              <button className="list-item-button">
                <img className="list-item-img" src={require('../../../../images/seats/seats6.png')} alt="pic" />
                <p className="list-item-text">Купe</p>
              </button>
            </li>
          </ul>
        </div>
        <div className="seat-numbers">
          <div className="numbers-seats">
            <p className="numbers-seats-text">Вагоны</p>
            <p className="numbers-seats-num">N</p>
          </div>
          <p className="numbers-text">Нумерация вагонов начинается с головы поезда</p>
        </div>
      </section>

      <section className="seat">

        <div className="seat-container">
          <div className="back back-opposite">
            <img className="back-img" src={require('../../../../images/seats/seats9.png')} alt="pic" />
            <button className="back-button">Выбрать другой поезд</button>
          </div>
          <div className="seat-info">
            <div className="info-from">
              <img className="from-icon" src={require('../../../../images/seats/seats2.png')} alt="pic" />
              <div className="form-name">
                <h3 className="form-name-header">Name</h3>
                <p className="form-name-direction">Direction from</p>
                <p className="form-name-direction">Direction to</p>
              </div>
            </div>

            <div className="info-route">
              <div className="route">
                <div className="route-from outbound">
                  <h3 className="route-from-time">7:00</h3>
                  <p className="route-from-direction">Москва</p>
                  <p className="route-from-direction">Вокзал</p>
                </div>
                <div className="route-arrow">
                  <img className="route-arrow-img" src={require('../../../../images/seats/seats10.png')} alt="logo" />
                </div>
                <div className="route-from inbound">
                  <h3 className="route-from-time">7:00</h3>
                  <p className="route-from-direction">Москва</p>
                  <p className="route-from-direction">Вокзал</p>
                </div>
              </div>
            </div>

            <div className="info-time">
              <img className="time-clock" src={require('../../../../images/seats/seats4.png')} alt="pic" />
              <div className="time-duration">
                <p className="time-duration-text">N час</p>
                <p className="time-duration-text">N минут</p>
              </div>
            </div>
          </div>
        </div>

        <div className="seat-tickets">
          <h3 className="tickets-header">Количество билетов</h3>
          <div className="tickets-selection">
            <div className="selection adult">
              <select className="selection-form form-adult" />
              <p className="selection-text text-adult">Можно добавить еще 3 пассажиров</p>
            </div>
            <div className="selection child">
              <select className="selection-form form-child" />
              <p className="selection-text text-child">Можно добавить еще 3 детей до 10 лет.Свое место в вагоне, как у взрослых, но дешевле
                в среднем на 50-65%</p>
            </div>
            <div className="selection child0">
              <select className="selection-form form-child0" />
            </div>
          </div>
        </div>

        <div className="seat-vagon">
          <h3 className="tickets-header">Количество билетов</h3>
          <ul className="vagon-list">
            <li className="vagon-list-item">
              <button className="list-item-button">
                <img className="list-item-img" src={require('../../../../images/seats/seats5.png')} alt="pic" />
                <p className="list-item-text">Сидячий</p>
              </button>
            </li>
            <li className="vagon-list-item">
              <button className="list-item-button">
                <img className="list-item-img" src={require('../../../../images/seats/seats6.png')} alt="pic" />
                <p className="list-item-text">Плацкарт</p>
              </button>
            </li>
            <li className="vagon-list-item">
              <button className="list-item-button">
                <img className="list-item-img" src={require('../../../../images/seats/seats6.png')} alt="pic" />
                <p className="list-item-text">Купe</p>
              </button>
            </li>
          </ul>
        </div>
        <div className="seat-numbers">
          <div className="numbers-seats">
            <p className="numbers-seats-text">Вагоны</p>
            <p className="numbers-seats-num">N</p>
          </div>
          <p className="numbers-text">Нумерация вагонов начинается с головы поезда</p>
        </div>
      </section>
      <div className="seat-buttons">
        <button className="seat-button">Далее</button>
      </div>
    </section>
  )
}



/*
<div className="route">
  <div className="route-from outbound">
    <h3 className="route-from-time">7:00</h3>
    <p className="route-from-direction">Москва</p>
    <p className="route-from-direction">Вокзал</p>
  </div>
  <div className="route-arrow">
    <img className="route-arrow-img" src={require('../../../images/train-selector/train3.png')} alt="logo" />
  </div>
  <div className="route-from inbound">
    <h3 className="route-from-time">7:00</h3>
    <p className="route-from-direction">Москва</p>
    <p className="route-from-direction">Вокзал</p>
  </div>
</div>
*/
