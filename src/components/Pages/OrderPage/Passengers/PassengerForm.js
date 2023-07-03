import React from "react";
import "./Passengers.css";

export default function PassengerForm() {
  return (
    <section className="passenger">
      <div className="passenger-head">
        <div className="head-left" >
          <button className="head-toggle">
            <img className="head-toggle-img" src={require('../../../../../src/images/passenger/pass1.png')} alt="pic"/>
          </button>
          <h3 className="head-title">Пассажир №</h3>
        </div>
        <button className="head-delete">
          <img className="delete-img" src={require('../../../../../src/images/passenger/pass2.png')} alt="pic" />
        </button>
      </div>

      <div className="passenger-body">
        <form className="body-form">
          <select className="body-form-select">
            <option className="form-select-option" value="adult">Взрослый</option>
            <option className="form-select-option" value="child">Детский</option>
          </select>
          <div className="body-names">
            <label className="names-label passenger-titles">
              Фамилия
              <input
                className="names-label-input"
                type="text"
                name="surname"
              />
            </label>
            <label className="names-label passenger-titles">
              Имя
              <input
                className="names-label-input"
                type="text"
                name="name"
              />
            </label>
            <label className="names-label passenger-titles">
              Отчество
              <input
                className="names-label-input"
                type="text"
                name="lastname"
              />
            </label>
          </div>
        </form>

        <div className="body-inputs">
          <div className="inputs-sex">
            <p className="inputs-sex-title passenger-titles">Пол</p>
            <div className="inputs-sex-controls">
              <input
                className="controls-radio"
                type="radio"
              />
              <label className="controls-lable male">М</label>
              <input
                className="controls-radio"
                type="radio"
              />
              <label className="controls-lable female">Ж</label>
            </div>
          </div>

          <label className="names-label passenger-titles">
            <p className="inputs-sex-title passenger-titles">Дата рождения</p>
            <input
              className="names-label-input input-birth"
              type="text"
              name="birth"
            />
          </label>
        </div>

        <div className="body-check">
          <input className="body-check-input" type="checkbox" />
          <p className="body-check-text">ограниченная подвижность</p>
        </div>

        <div className="body-documents">
          <div className="document">
            <label className="document-label passenger-titles">
              Тип документа
              <select className="document-type-select">
                <option className="document-type-select-item" value="passport">Паспорт РФ</option>
              </select>
            </label>
            <label className="document-label passenger-titles">
              Серия
              <input
                className="document-input"
                type="text"
                placeholder="_ _ _ _"
                name="serie"
                maxLength="4"
              />
            </label>

            <label className="document-label passenger-titles">
              Номер
              <input
                className="document-input"
                type="text"
                name="document"
              />
            </label>
          </div>
        </div>
      </div>

      <div className="passenger-foot">
        <button className="foot-button">Следующий пассажир</button>
      </div>

    </section>
  )
}