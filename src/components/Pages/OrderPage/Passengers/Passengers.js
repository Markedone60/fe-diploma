import React from "react";
import PassengerForm from "./PassengerForm";
import "./Passengers.css";

export default function Passengers () {
  return (
    <section className="passengers">
      <PassengerForm/>
      <div className="passengers-new">
        <h3 className="passengers-new-title head-title">Добавить нового пассажира</h3>
        <button className="passengers-new-button">
          <img className="passengers-new-button-img" src={require('../../../../../src/images/passenger/pass5.png')} alt="pic" />
        </button>
      </div>
      <div className="passengers-nextpage">
        <button className="nextpage-button">Далее</button>
      </div>
    </section>
  )
}