import React from "react";
import "./Sidebar.css"

export default function Dates() {
  return (
    <div className="sidebar-dates">
      <div className="sidebar-dates-container">
        <div className="sidebar-dates-text">Дата поездки</div>
        <div className="sidebar-dates-input">
          <input className="sidebar-input" placeholder="" />
        </div>
      </div>
      <div className="sidebar-dates-container">
        <div className="sidebar-dates-text">Дата возвращения</div>
        <div className="sidebar-dates-input">
          <input className="sidebar-input" placeholder="" />
        </div>
      </div>
    </div>
  )
}