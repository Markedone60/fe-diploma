import React from "react";
import '../OrderPage.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import DirectionInputs from "../../../SearchInputs/DirectionInputs";
import DateInputs from "../../../SearchInputs/DateInputs";
import { fetchRoutes } from "../../../../slices/routeSlice";

export default function SearchOrder() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(fetchRoutes());
    navigate('/order/tickets/train');
    document.documentElement.scrollTop = 0;
  }

  return (
    <form className="search-order">
      <div className="search-form-order">
        <div className="search-form-order-container">
          <div className="search-form-order-text">Направление</div>
          <DirectionInputs />
        </div>
        <div className="search-form-order-container">
          <div className="search-form-order-text">Дата</div>
          <DateInputs />
        </div>
      </div>
      <button className="search-button-order" type="button" onClick={onSubmit}>
        <div className="search-button-text">найти билеты</div>
      </button>
    </form>
  )
}

/*
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

*/