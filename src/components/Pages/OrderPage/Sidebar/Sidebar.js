import React from "react";
import Dates from "./Dates";
import Options from "./Options";
import './Sidebar.css';
import Prices from "./Prices";
import Time from "./Time";
import LastTickets from "./LastTickets";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <section className="sidebar-options-container">
        <Dates />
        <Options />
        <Prices />
        <Time />
      </section>
      <section className="sidebar-last-container">
        <LastTickets />
      </section>
    </aside>
  )
}