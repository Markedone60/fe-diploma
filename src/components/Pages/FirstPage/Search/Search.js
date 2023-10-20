import React from "react";
import '../../../SearchInputs/Inputs.css'
 import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import DirectionInputs from "../../../SearchInputs/DirectionInputs"
import DateInputs from "../../../SearchInputs/DateInputs"
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