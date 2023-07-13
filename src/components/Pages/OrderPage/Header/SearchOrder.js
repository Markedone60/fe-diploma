import React from "react";
import '../OrderPage.css';

export default function SearchOrder() {
  return (
    <form className="search-order">
      <div className="search-form-order">
        <div className="search-form-order-container">
          <div className="search-form-order-text">Направление</div>
          <div className="search-form-order-input">
            <input className="search-input-order direction-from-order" placeholder="Откуда" />
            <span>
              <img className="search-input-order-arrow" src={require('../../../../images/search-arrow.png')} alt="pic" />
            </span>
            <input className="search-input-order direction-to-order" placeholder="Куда" />
          </div>
        </div>
        <div className="search-form-order-container">
          <div className="search-form-order-text">Дата</div>
          <div className="search-form-order-input">
            <input className="search-input-order time time-from" placeholder="ДД/ММ/ГГГГ" />
            <input className="search-input-order time time-to" placeholder="ДД/ММ/ГГГГ" />
          </div>
        </div>
      </div>
      <button className="search-button-order" type="button">найти билеты</button>
    </form>
  )
}