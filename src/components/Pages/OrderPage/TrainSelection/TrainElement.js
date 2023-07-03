import React from "react";
import '../OrderPage.css';

export default function TrainElement() {
  return (
    <div className="train-container">
      <div className="train-container-card">
        <div className="train-container-card-logo">
          <img className="train-container-card-logo-img" src={require('../../../../images/train-selector/train1.png')} alt="logo" />
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
              <img className="train-container-card-body-between-img" src={require('../../../../images/train-selector/train2.png')} alt="logo" />
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
              <img className="train-container-card-body-between-img" src={require('../../../../images/train-selector/train3.png')} alt="logo" />
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
                <img className="train-container-card-places-list-item-price-img" src={require('../../../../images/train-selector/train4.png')} alt="logo" />
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
                <img className="train-container-card-places-list-item-price-span1" src={require('../../../../images/train-selector/train4.png')} alt="logo" />
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
  )
}