import React from "react";
import './OrderPage.css';

export default function TrainSelection() {
  return (
    <section className="train">
      <div className="train-header">
        <div className="train-header-found">
          найдено:
        </div>
        <div className="train-header-sort">
          <div className="train-header-sort-header">сортировать по:</div>
          <select className="train-header-sort-select">
            <options className="train-header-sort-select-item" value="time">времени</options>
            <options className="train-header-sort-select-item" value="price">стоимости</options>
            <options className="train-header-sort-select-item" value="duration">длительности</options>
          </select>
        </div>
        <div className="train-header-list">
          <div className="train-header-list-filter">показывать по:</div>
          <ul className="train-header-list-options">
            <li className="train-header-list-options-item">5</li>
            <li className="train-header-list-options-item">10</li>
            <li className="train-header-list-options-item">20</li>
          </ul>
        </div>
      </div>
      <div className="train-container">
        <div className="train-container-card">
          <div className="train-container-card-logo">
            <img className="train-container-card-logo-img" src={require('../../../images/train-selector/train1.png')} alt="logo" />
            <div className="train-container-card-logo-body">
              <h3 className="train-container-card-logo-body-header">Name</h3>
              <p className="train-container-card-logo-body-direction">Direction from</p>
              <p className="train-container-card-logo-body-direction">Direction to</p>
            </div>
          </div>
          <div className="train-container-card-body">
            <div className="train-container-card-body-section">
              <div className="train-container-card-body-direction outbound">
                <h3 className="train-container-card-body-direction-time">7:00</h3>
                <p className="train-container-card-body-direction-place">Москва</p>
                <p className="train-container-card-body-direction-place">Вокзал</p>
              </div>
              <div className="train-container-card-body-between">
                <div className="train-container-card-body-between-time">time</div>
                <img className="train-container-card-body-between-img" src={require('../../../images/train-selector/train2.png')} alt="logo" />
              </div>
              <div className="train-container-card-body-direction inbound">
                <h3 className="train-container-card-body-direction-time">7:00</h3>
                <p className="train-container-card-body-direction-place">Москва</p>
                <p className="train-container-card-body-direction-place">Вокзал</p>
              </div>
            </div>

            <div className="train-container-card-body-section">
              <div className="train-container-card-body-direction outbound">
                <h3 className="train-container-card-body-direction-time">7:00</h3>
                <p className="train-container-card-body-direction-place">Москва</p>
                <p className="train-container-card-body-direction-place">Вокзал</p>
              </div>
              <div className="train-container-card-body-between">
                <div className="train-container-card-body-between-time">time</div>
                <img className="train-container-card-body-between-img" src={require('../../../images/train-selector/train3.png')} alt="logo" />
              </div>
              <div className="train-container-card-body-direction inbound">
                <h3 className="train-container-card-body-direction-time">7:00</h3>
                <p className="train-container-card-body-direction-place">Москва</p>
                <p className="train-container-card-body-direction-place">Вокзал</p>
              </div>
            </div>
          </div>
          <div className="train-container-card-places">
            <ul className="train-container-card-places-list">
              <li className="train-container-card-places-list-item">
                <p className="train-container-card-places-list-item-type">Плацкарт</p>
                <p className="train-container-card-places-list-item-quantity">144</p>
                <div className="train-container-card-places-list-item-price">
                  <span className="train-container-card-places-list-item-price-span1">от</span>
                  <span className="train-container-card-places-list-item-price-span2">3000</span>
                  <img className="train-container-card-places-list-item-price-img" src={require('../../../images/train-selector/train4.png')} alt="logo"/>
                </div>
              </li>
            </ul>
            <ul className="train-container-card-places-list">
              <li className="train-container-card-places-list-item">
                <p className="train-container-card-places-list-item-type">Плацкарт</p>
                <p className="train-container-card-places-list-item-quantity">144</p>
                <div className="train-container-card-places-list-item-price">
                  <span className="train-container-card-places-list-item-price-span1">от</span>
                  <span className="train-container-card-places-list-item-price-span2">3000</span>
                  <img className="train-container-card-places-list-item-price-span1" src={require('../../../images/train-selector/train4.png')} alt="logo"/>
                </div>
              </li>
            </ul>
            <div className="train-container-card-places-options">
              logo
            </div>
            <button className="train-container-card-places-button">Выбрать места</button>
          </div>
        </div>
      </div>
    </section>
  )
}