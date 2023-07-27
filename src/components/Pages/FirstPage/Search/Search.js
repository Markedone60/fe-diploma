import React from "react";
import '../../../Inputs/Inputs.css'
import { useNavigate } from 'react-router';
import { useDispatch } from "react-redux";
import DirectionInputs from "../../../Inputs/DirectionInputs"
import DateInputs from "../../../Inputs/DateInputs"
import { fetchRoutes } from "../../../../slices/routeSlice";

export default function Search() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(fetchRoutes());
    navigate('/order/tickets/train');
    document.documentElement.scrollTop = 0;
  }

  return (
    <div className="search">
      <div className="search-text">Направление</div>

      <DirectionInputs />

      <div className="search-text">Дата</div>

      <DateInputs />

      <button
        className="search-button"
        type="button"
        onClick={onSubmit}
      >
        <div className="search-button-text">найти билеты</div>
      </button>
    </div>

  )
}


/*
<div>
  <div className="search-text">Дата</div>
  <input className="search-input time time-from" placeholder="ДД/ММ/ГГГГ" />
  <input className="search-input time time-to" placeholder="ДД/ММ/ГГГГ" />
</div>

*/