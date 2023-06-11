import React from "react";
import "./Sidebar.css"

export default function Time() {
  return (
    <div className="sidebar-time">
      <div className="sidebar-time-element element-to">
        <div className="time-header">
          <h3 className="time-header-title time-header-title-arrow arrow-to">Туда</h3>
          <button className="time-header-button time-header-button-inactive"></button>
        </div>
        <div className="time-form">
          <h4 className="time-form-header">Время отбытия</h4>
          <div className="time-form-slider">
            <input className="form-input"></input>
            <label className="form-label"></label>
          </div>
        </div>
        <div className="time-form">
          <h4 className="time-form-header time-form-header-right">Время убытия</h4>
          <div className="time-form-slider">
            <input className="form-input"></input>
            <label className="form-label"></label>
          </div>
        </div>
      </div>

      <div className="sidebar-time-element element-from">
        <div className="time-header">
          <h3 className="time-header-title time-header-title-arrow arrow-back">Обратно</h3>
          <button className="time-header-button"></button>
        </div>
        <div className="time-form">
          <h4 className="time-form-header">Время отбытия</h4>
          <div className="time-from-slider">
            <input className="form-input"></input>
            <label className="form-label"></label>
          </div>
        </div>
        <div className="time-form">
          <h4 className="time-form-header time-form-header-right">Время убытия</h4>
          <div className="time-from-slider">
            <input className="form-input"></input>
            <label className="form-label"></label>
          </div>
        </div>
      </div>
    </div>
  )
}