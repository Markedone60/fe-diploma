import React from "react";
import './Inputs/Inputs.css';
//import { useNavigate } from 'react-router';
import DirectionInputs from "./Inputs/DirectionInputs";

export default function Search() {
  //const navigate = useNavigate();

  /*const onSubmit = (event) => {
   event.preventDefault();
     navigate('/order/tickets/train');
     document.documentElement.scrollTop = 0;
   }
   */

  return (
    <form className="search">
      <div className="search-text">Направление</div>

      <DirectionInputs />

      <div className="search-text">Дата</div>
      <input className="search-input time time-from" placeholder="ДД/ММ/ГГГГ" />
      <input className="search-input time time-to" placeholder="ДД/ММ/ГГГГ" />
      <button
        className="search-button"
        type="button"
      //    onClick={onSubmit}
      >
        <div className="search-button-text">найти билеты</div>
      </button>
    </form>

  )
}