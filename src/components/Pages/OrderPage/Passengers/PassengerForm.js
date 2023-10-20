import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import "./Passengers.css";
import { addPassengersData } from "../../../../slices/passengersSlice";
import DocumentValidator from "./DocumentValidator";

export default function PassengerForm({ number, type }) {
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);

  const { passengers } = useSelector((state) => state.passengers);
  const passenger = passengers.find((e) => e.number === number);

  const [documentType, setDocumentType] = useState(
    type === 'adult' || (passenger && passenger.series)
      ? 'passport'
      : 'certificate'
  )

  const [form, setForm] = useState({
    number,
    type,
    surname: passenger ? passenger.surname : '',
    name: passenger ? passenger.name : '',
    lastname: passenger ? passenger.lastname : '',
    sex: passenger ? passenger.sex : '',
    birth: passenger ? passenger.birth : '',
    series: passenger ? passenger.series : '',
    document: passenger ? passenger.document : '',
  })

  const [message, setMessage] = useState('');

  const handleShow = () => {
    setActive((prev) => !prev)
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadio = (event) => {
    setForm((prev) => ({ ...prev, sex: event.target.dataset.id }))
  }

  const manageMessages = (text) => {
    setMessage(text);
    setTimeout(() => setMessage(''), 10 * 1000);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (!(form.surname.trim() && form.name.trim() && form.lastname.trim())) {
      manageMessages('Необходимо ввести фамилию, имя и отчество пассажира');
      return;
    }
    if (!form.sex) {
      manageMessages('Выберите пол пассажира');
      return;
    }
    if (!form.birth) {
      manageMessages('Укажите дату рождения в формате дд-мм-гг');
      return;
    }
    if (
      documentType === 'certificates' &&
      !DocumentValidator(documentType, form.document)
    ) {
      manageMessages('Номер свидетельства о рожденни указан некорректно Пример: VII-СИ-123456');
      return;
    }
    if (
      documentType === 'passport' &&
      (!(form.series && DocumentValidator('series', form.series)) ||
        !DocumentValidator(documentType, form.document))
    ) {
      manageMessages('Номер или серия паспорта введены некорректно');
      return;
    }
    setMessage('');
    dispatch(addPassengersData({ number, data: form }));
  }

  return (
    <section className="passenger">
      <div className={`passenger-header ${active ? 'active-form' : ''}`}>
        <h4 className="passenger-header-title" >
          <span
            className={`passenger-header-toggle ${active ? 'hide' : 'show'}`}
            onClick={handleShow}
          />
          Пассажир {number}
        </h4>
        <button type="button" className="passenger-header-delete" />
      </div>

      <div className={`passengerForm-form ${active ? 'passengerForm--active' : 'hidden'
        }`}
      >
        <form className="passengerForm-section">
          <select
            className="passengerForm-field passengerForm-list"
            defaultValue={type}
            disabled
          >
            <option className="passengerForm-option" value="adult">Взрослый</option>
            <option className="passengerForm-option" value="child">Детский</option>
          </select>
          <div className="passengerForm-controls">
            <label
              className="passengerForm-label passenger-titles"
              htmlFor={`surname${number}`}
            >
              Фамилия
              <input
                className="passengerForm-field passengerForm-field--name"
                id={`surname${number}`}
                type="text"
                name="surname"
                value={form.surname}
                onChange={handleChange}
              />
            </label>
            <label
              className="passengerForm-label passenger-titles"
              htmlFor={`name${number}`}
            >
              Имя
              <input
                className="passengerForm-field passengerForm-field--name"
                id={`name${number}`}
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
              />
            </label>
            <label
              className="passengerForm-label passenger-titles"
              htmlFor={`lastname${number}`}
            >
              Отчество
              <input
                className="passengerForm-field passengerForm-field--name"
                id={`lastname${number}`}
                type="text"
                name="lastname"
                value={form.lastname}
                onChange={handleChange}
              />
            </label>
          </div>
        </form>

        <div className="passengerForm-controls passengerForm-section">
          <div className="passengerForm-radio">
            <p className="passengerForm-label passenger-titles">Пол</p>
            <div className="passengerForm-radio-controls">
              <input
                className="passengerForm-radio-field"
                id={`male${number}`}
                data-id="male"
                name={`sex${number}`}
                type="radio"
                checked={form.sex === 'male'}
                onChange={handleRadio}
              />
              <label
                className="passengerForm-radio-label male"
                htmlFor={`male${number}`}
              >
                М
              </label>
              <input
                className="passengerForm-radio-field"
                id={`female${number}`}
                data-id="female"
                name={`sex${number}`}
                type="radio"
                checked={form.sex === 'female'}
                onChange={handleRadio}
              />
              <label
                className="passengerForm-radio-label female"
                htmlFor={`female${number}`}
              >
                Ж
              </label>
            </div>
          </div>

          <label
            className="passengerForm-label passenger-titles"
            htmlFor={`birth${number}`}
          >
            Дата рождения
            <input
              className="passengerForm-field input-birth"
              id={`birth${number}`}
              type="text"
              placeholder="ДД/ММ/ГГ"
              name="birth"
              value={form.birth}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="passengerForm-controls passengerForm-section checkbox-control">
          <input className="passengerForm-checkbox" type="checkbox" />
          <p className="passengerForm-checkbox-label">ограниченная подвижность</p>
        </div>

        <div className="passengerForm-section">
          <div className="passengerForm-document">
            <label className="passengerForm-label passenger-titles">
              Тип документа
              <select
                className={`passengerForm-field passengerForm-list passengerForm-list--${documentType}`}
                value={documentType}
                onChange={(event) =>
                  setDocumentType(event.target.value)
                }
              >
                <option className="passengerForm-option" value="passport">Паспорт РФ</option>
                {type !== 'adult' ? (
                  <option
                    className="passengerForm-option"
                    value="certificate"
                  >
                    Свидетельство о рождении
                  </option>
                ) : (
                  ''
                )}
              </select>
            </label>

            {documentType === 'passport' && (
              <label
                className="passengerForm-label passenger-titles"
                htmlFor={`series${number}`}
              >
                Серия
                <input
                  className="passengerForm-field passengerForm-field--document"
                  id={`series${number}`}
                  type="text"
                  placeholder="_ _ _ _"
                  name="series"
                  maxLength="4"
                  value={form.series}
                  onChange={handleChange}
                />
              </label>
            )}

            <label
              className="passengerForm-label passenger-titles"
              htmlFor={`document${number}`}
            >
              Номер
              <input
                className="passengerForm-field passengerForm-field--document"
                id={`document${number}`}
                type="text"
                placeholder={
                  documentType === 'passport'
                    ? '_ _ _ _ _ _'
                    : '12 символов'
                }
                maxLength={
                  documentType === 'passport'
                    ? "6"
                    : "12"
                }
                name="document"
                value={form.document}
                onChange={handleChange}
              />
            </label>
          </div>
        </div>
      </div>

      <div
        className={`passengerForm-footer passengerForm-section ${passenger ? 'done' : ''
          } ${message ? 'warning' : ''}`}
      >
        {passenger && (
          <div className="passengerForm-message">
            <span className="message-done-img" />
            <span className="message-done">Готово</span>
          </div>
        )}
        {message ? (
          <div className="passengerForm-message">
            <span className="message-warning-img" />
            <span className="message-warning">{message}</span>
          </div>
        ) : (
          <button
            type="button"
            className="button passengerForm-button"
            onClick={onSubmit}
          >
            Следующий пассажир
          </button>
        )}
      </div>
    </section>
  )
}

PassengerForm.propTypes = {
  type: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
};



/*
return (
  <section className="passenger">
    <div className={`passenger_header ${active ? 'active-form' : ''}`}>
      <h4 className="head-title" >
        <span
          className={`passenger_toggle ${active ? 'hide' : 'show'}`}
          onClick={handleShow}
        />
        <button className="head-toggle">
          <img className="head-toggle-img" src={require('../../../../../src/images/passenger/pass1.png')} alt="pic" />
        </button>
        Пассажир {number}
      </h4>
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
*/