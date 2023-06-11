import React from "react";
import Logo from "../../Elements/Logo";
import Menu from "../../Elements/Menu";
import Search from "./Search";
import './FirstPage.css';

export default function HeaderFirstPage() {
  return (
    <section className="header">
      <Logo />
      <Menu />
      <div className="header-container">
        <div className="header-container-element">
          <h1 className="header-title title1">Вся жизнь -</h1>
          <h2 className="header-title">путешествие!</h2>
        </div>
        <Search />
      </div>
    </section>
  )
}