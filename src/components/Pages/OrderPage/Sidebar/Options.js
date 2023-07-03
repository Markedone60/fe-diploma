import React from "react";
import Option from "./Option";
import "./Sidebar.css"

export default function Options() {
  return (
    <div className="sidebar-options">
      <ul className="options-list">
        <Option
          name="Купе"
          alt="Купе"
          src={require('../../../../images/sidebar/sidebar-options1.png')}
        />
        <Option
          name="Плацкарт"
          alt="Плацкарт"
          src={require('../../../../images/sidebar/sidebar-options2.png')}
        />
        <Option
          name="Сидячий"
          alt="Сидячий"
          src={require('../../../../images/sidebar/sidebar-options3.png')}
        />
        <Option
          name="Люкс"
          alt="Люкс"
          src={require('../../../../images/sidebar/sidebar-options4.png')}
        />
        <Option
          name="Wifi"
          alt="Wi-Fi"
          src={require('../../../../images/sidebar/sidebar-options5.png')}
        />
        <Option
          name="Экспресс"
          alt="Экспресс"
          src={require('../../../../images/sidebar/sidebar-options6.png')}
        />
      </ul>
    </div>
  )
}