import React from "react";
import Logo from "../../Elements/Logo";
import Menu from "../../Elements/Menu";
import Footer from "../../Elements/Footer";
import SuccessForm from "./SuccessForm/SuccessForm";
import './SuccessPage.css';

export default function SuccessPage () {
  return (
    <section className="successpage">
      <div className="successpage-header">
        <Logo/>
        <Menu/>
        <h1 className="successpage-header-title">Благодарим Вас за заказ!</h1>
      </div>
      <SuccessForm />
      <Footer />
    </section>
  )
}