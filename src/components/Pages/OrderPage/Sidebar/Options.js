import React from "react";
import "./Sidebar.css"

export default function Options() {
  return (
    <div className="sidebar-options">
      <ul className="options-list">
        <li className="options-item">
          <img className="options-item-image" src={require('../../../../images/sidebar/sidebar-options1.png')} alt="pic"/>
          <div className="options-item-text">Купе</div>
          <div className="options-item-form">
            <input className="form-input"></input>
            <label className="form-label"></label>
          </div>
        </li>
        <li className="options-item">
          <img className="options-item-image" src={require('../../../../images/sidebar/sidebar-options2.png')} alt="pic"/>
          <div className="options-item-text">Плацкарт</div>
          <div className="options-item-form">
            <input className="form-input"></input>
            <label className="form-label"></label>
          </div>
        </li>
        <li className="options-item">
          <img className="options-item-image" src={require('../../../../images/sidebar/sidebar-options3.png')} alt="pic"/>
          <div className="options-item-text">Сидячий</div>
          <div className="options-item-form">
            <input className="form-input"></input>
            <label className="form-label"></label>
          </div>
        </li>
        <li className="options-item">
          <img className="options-item-image" src={require('../../../../images/sidebar/sidebar-options4.png')} alt="pic"/>
          <div className="options-item-text">Люкс</div>
          <div className="options-item-form">
            <input className="form-input"></input>
            <label className="form-label"></label>
          </div>
        </li>
        <li className="options-item">
          <img className="options-item-image" src={require('../../../../images/sidebar/sidebar-options5.png')} alt="pic"/>
          <div className="options-item-text">Wi-Fi</div>
          <div className="options-item-form">
            <input className="form-input"></input>
            <label className="form-label"></label>
          </div>
        </li>
        <li className="options-item">
          <img className="options-item-image" src={require('../../../../images/sidebar/sidebar-options6.png')} alt="pic"/>
          <div className="options-item-text">Экспресс</div>
          <div className="options-item-form">
            <input className="form-input"></input>
            <label className="form-label"></label>
          </div>
        </li>
      </ul>
    </div>
  )
}