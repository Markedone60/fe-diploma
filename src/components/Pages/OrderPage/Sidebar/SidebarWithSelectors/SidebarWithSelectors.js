import React from "react";
import Dates from "./Dates";
import Options from "./Options";
import '../Sidebar.css';
import Prices from "./Prices";
import Time from "./Time";


export default function SidebarWithSelectors() {
  return (
    <section className="sidebar-options-container">
      <Dates />
      <Options />
      <Prices />
      <Time />
    </section>
  )
}