import React from "react";
import "./Sidebar.css"

export default function Prices() {
  return (
    <div className="sidebar-prices">
      <h3 className="sidebar-dates-text">Стоимость</h3>
      <div className="sidebar-prices-container">
        <div className="sidebar-prices-range from">от</div>
        <div className="sidebar-prices-range to">до</div>
      </div>
      <div className="sidebar-prices-slider">
        <input className="slider-input"></input>
        <label className="slider-label"></label>
      </div>
    </div>
  )
}