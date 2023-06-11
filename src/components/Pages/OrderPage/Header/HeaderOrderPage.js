import React from "react";
import Logo from "../../../Elements/Logo";
import Menu from "../../../Elements/Menu";
import SearchOrder from "./SearchOrder";
import ProgressBar from "./ProgressBar";
import '../OrderPage.css';

export default function HeaderOrderPage() {
  return (
    <section className="header-order">
      <Logo/>
      <Menu/>
      <SearchOrder/>
      <ProgressBar/>
    </section>
  )
}