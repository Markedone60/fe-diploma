import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { stageChange } from "../../../../slices/stageSlice";
import { addPayerData } from "../../../../slices/paySlice";
import "../OrderPage.css";


export default function Payment() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    surname: '',
    name: '',
    lastname: '',
    phone: '',
    email: '',
    pay: '',
  })

  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    dispatch(stageChange({ stage: 3 }));
  }, [dispatch])

  useEffect(() => {
    setDisabled(true);
    if (
      !(
        form.surname &&
        form.name &&
        form.lastname &&
        form.phone &&
        form.email &&
        form.pay
      )
    )
      return;
    setDisabled(false);
  }, [form]);

  const handleChange = (event) => {
    const {name, value} = event.target;
    setForm((prev) => ({...prev, pay: event.target.id}));
  }

  const handleClick = (event) => {
    event.preventDefault();
    dispatch(addPayerData({data: form}));
    navigate('/order/verification/');
    document.documentElement.scrollTop = 0;
  }

  return (
    <div className="payment-section">
      <section className="payment">
        <div className="payment-head">
          <h3 className="payment-title">Персональные данные</h3>
        </div>

        <div className="payment-body">
          <form className="payment-form">

            <div className="payment-names">
              <label className="payment-label">
                Фамилия
                <input
                  className="payment-label-input"
                  type="text"
                  name="surname"
                />
              </label>
              <label className="payment-label">
                Имя
                <input
                  className="payment-label-input"
                  type="text"
                  name="name"
                />
              </label>
              <label className="payment-label">
                Отчество
                <input
                  className="payment-label-input"
                  type="text"
                  name="lastname"
                />
              </label>
            </div>
          </form>

          <div className="payment-inputs">
            <label className="payment-label">
              <p className="payment-label-titles">Номер телефона</p>
              <input
                className="payment-label-input input-data"
                type="text"
                name="telephone"
              />
            </label>
          </div>

          <div className="payment-inputs">
            <label className="payment-label">
              <p className="payment-label-titles">E-mail</p>
              <input
                className="payment-label-input input-data"
                type="text"
                name="mail"
              />
            </label>
          </div>
        </div>


        <div className="payment-head" >
          <h3 className="payment-title">Способы оплаты</h3>
        </div>


        <div className="payment-options">
          <div className="payment-check">
            <input className="payment-check-input" type="checkbox" />
            <p className="payment-check-text">Онлайн</p>
          </div>

          <div className="payment-online-options">
            <h3 className="payment-online-option">Банковской <br /> картой</h3>
            <h3 className="payment-online-option">PayPal</h3>
            <h3 className="payment-online-option">Visa QIWI Wallet</h3>
          </div>

          <div className="payment-check">
            <input className="payment-check-input" type="checkbox" />
            <p className="payment-check-text">Наличными</p>
          </div>
        </div>
      </section>

      <div className="payment-nextpage">
        <button className="payment-button">Далее</button>
      </div>

    </div>
  )
}