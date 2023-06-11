import React from "react";  
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="footer" id="contacts">
      <div className="footer-container">

        <section className="contacts">
          <h3 className="contacts-header footer-header">Свяжитесь с нами</h3>
          <ul className="contacts-list">
            <li className="contacts-item">
              <img className="contacts-image" src={require('../../images/footer1.png')} alt="pic"/>
              <p className="contacts-text">8 (800) 000 00 00</p>
            </li>
            <li className="contacts-item">
              <img className="contacts-image" src={require('../../images/footer2.png')} alt="pic"/>
              <p className="contacts-text">inbox@mail.ru</p>
            </li>
            <li className="contacts-item">
              <img className="contacts-image" src={require('../../images/footer3.png')} alt="pic"/>
              <p className="contacts-text">tu.train.tickets</p>
            </li>
            <li className="contacts-item">
              <img className="contacts-image" src={require('../../images/footer4.png')} alt="pic"/>
              <p className="contacts-text">
                г. Москва 
                <br/>
                ул.Московская
                <br/>
                27-35 555 555
              </p>
            </li>
          </ul>
        </section>

        <section className="signup">
          <h3 className="footer-header">Подписка</h3>
          <span className="signup-hint">Будь в курсе событий</span>
          <form className="signup-form">
            <input className="signup-form-input" type="email" placeholder="e-mail"/>
            <button className="signup-form-button" type="submit">Отправить</button>
          </form>
          <h3 className="footer-header">Подписывайся на нас</h3>
          <div className="signup-links">
            <a className="signup-link" href="#/">
              <img src={require('../../images/footer11.png')} alt="pic"/>
            </a>
            <a className="signup-link" href="#/">
              <img src={require('../../images/footer22.png')} alt="pic"/>
            </a>
            <a className="signup-link" href="#/">
              <img src={require('../../images/footer33.png')} alt="pic"/>
            </a>
            <a className="signup-link" href="#/">
              <img src={require('../../images/footer44.png')} alt="pic"/>
            </a>
            <a className="signup-link" href="#/">
              <img src={require('../../images/footer55.png')} alt="pic"/>
            </a>
          </div>
        </section>

      </div>

      <div className="footer-line"/>
      <div className="footer-container-lowpart">
        <Logo/>
        <img className="footer-arrow" src={require('../../images/footer-arrow.png')} alt="pic"
        onClick={() => {
            document.documentElement.scrollTop = 0;
        }}
        />
        <div className="footer-text">2018 WEB</div>
      </div>
    </footer>
  )
}