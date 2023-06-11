import React from "react";
import { HashLink } from "react-router-hash-link";

export default function Menu() {
  return (
    <nav>
      <ul className="menu">
        <li className="menu-item">
          <HashLink className="menu-item-text" to="/#about">О нас</HashLink>
        </li>
        <li className="menu-item">
          <HashLink className="menu-item-text" to="/#howitworks">Как это работает</HashLink>
        </li>
        <li className="menu-item">
          <HashLink className="menu-item-text" to="/#reviews">Отзывы</HashLink>
        </li>
        <li className="menu-item">
          <HashLink className="menu-item-text" to="/#contacts">Контакты</HashLink>
        </li>
      </ul>
    </nav>
  )
}