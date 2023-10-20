import React from "react";
import { useDispatch } from "react-redux";
import { cityRotate } from "../../slices/searchSlice";
import "./Inputs.css";

import Direction from "./Direction";

export default function DirectionInputs() {
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(cityRotate());
  }

  return (
    <div className="direction-form">
      <Direction place="Откуда" direction="routeFrom" />
      <span>
        <img 
          className="search-input-arrow" 
          src={require('../../images/search-arrow.png')} 
          alt="pic"
          onClick={handleChange} 
        />
      </span>
      <Direction place="Куда" direction="routeIn" />
    </div >
  )
}