import React from "react";
import '../FirstPage.css';
import { useNavigate } from 'react-router';

export default function Search() {
  const navigate = useNavigate();

 const onSubmit = (event) => {
  event.preventDefault();
    navigate('/order/tickets/train');
    document.documentElement.scrollTop = 0;
  }

  return (
    <form className="search">
      <div className="search-text">Направление</div>
      <input className="search-input direction-from" placeholder="Откуда" />
      <span>
        <img className="search-input-arrow" src={require('../../../../images/search-arrow.png')} alt="pic" />
      </span>
      <input className="search-input direction-to" placeholder="Куда" />
      <div className="search-text">Дата</div>
      <input className="search-input time time-from" placeholder="ДД/ММ/ГГГГ" />
      <input className="search-input time time-to" placeholder="ДД/ММ/ГГГГ" />

      <button
        className="search-button"
        type="button"
        onClick={onSubmit}
      >
        <div className="search-button-text">найти билеты</div>
      </button>
    </form>

  )
}