import React from "react";
import { nanoid } from "@reduxjs/toolkit";
import Option from "./Option";

export default function Options() {
  return (
    <div className="options">
      <ul className="options-list">
        <Option
          key={nanoid()}
          name="have_second_class"
          alt="Купе"
          src={require('../../../../../images/sidebar/sidebar-options1.png')}
        />
        <Option
          key={nanoid()}
          name="have_third_class"
          alt="Плацкарт"
          src={require('../../../../../images/sidebar/sidebar-options2.png')}
        />
        <Option
          key={nanoid()}
          name="have_fourth_class"
          alt="Сидячий"
          src={require('../../../../../images/sidebar/sidebar-options3-special.png')}
        />
        <Option
          key={nanoid()}
          name="have_first_class"
          alt="Люкс"
          src={require('../../../../../images/sidebar/sidebar-options4-lux.png')}
        />
        <Option
          key={nanoid()}
          name="have_wifi"
          alt="Wi-Fi"
          src={require('../../../../../images/sidebar/sidebar-options5-wifi.png')}
        />
        <Option
          key={nanoid()}
          name="have_express"
          alt="Экспресс"
          src={require('../../../../../images/sidebar/sidebar-options6-express.png')}
        />
      </ul>
    </div>
  )
}