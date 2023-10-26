import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { nanoid } from "@reduxjs/toolkit";

import { stageChange } from "../../../../slices/stageSlice";
import { clearStatus, fetchOrder } from "../../../../slices/orderSlice";
import PriceFormatter from "../../../Elements/PriceFormatter";
import TrainElement from "../TrainSelection/TrainElement/TrainElement";
import "../OrderPage.css";

export default function Verification() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { train } = useSelector((state) => state.seats.train);
  const { passengers, passengersPrice } = useSelector(
    (state) => state.passengers
  )

  const { orderStatus } = useSelector((state) => state.order);

  useEffect(() => {
    dispatch(stageChange({ stage: 4 }));
    dispatch(clearStatus());
  }, [dispatch]);

  useEffect(() => {
    if (orderStatus === true) {
      navigate('/success/');
      document.documentElement.scrollTop = 0;
    }
  }, [orderStatus, navigate]);

  const handleClick = (event) => {
    event.preventDefault();
    dispatch(fetchOrder());
    if (orderStatus === true) {
      navigate('/success/');
      document.documentElement.scrollTop = 0;
    }
  };

  const handlePassengers = () => {
    navigate('/order/passengers/');
    document.documentElement.scrollTop = 0;
  };

  const handlePayment = () => {
    navigate('/order/payment/');
    document.documentElement.scrollTop = 0;
  };

  return (
    <section className="verification">

      <div className="verification-train">
        <div className="payment-head verification-head">
          <h3 className="payment-title">Поезд</h3>
        </div>
        <div className="verification-body-train">
          <TrainElement key={nanoid()} train={train} option="verification" />
        </div>
      </div>

      <div className="verification-passengers">
        <div className="payment-head verification-head">
          <h3 className="payment-title">Пассажиры</h3>
        </div>
        <div className="verification-passengers-body">
          <div className="body-left">
            {passengers.map((el) => (
              <div className="body-left-item" key={nanoid()}>
                <div className="body-left-image">
                  <img className="body-left-image-img" src={require('../../../../../src/images/verification/verification1.png')} alt="logo" />
                  <h2 className="body-left-image-name">
                    {el.type === 'adult' ? 'Взрослый' : 'Детский'}
                  </h2>
                </div>
                <div className="body-left-info">
                  <p className="body-left-info-data">
                    {el.surname.trim()} {el.name.trim()}{' '}
                    {el.lastname.trim()}
                  </p>
                  <p className="body-left-info-data">
                    Пол {el.sex === 'male' ? 'мужской' : 'женский'}
                  </p>
                  <p className="body-left-info-data">
                    Дата рождения {el.birth}
                  </p>
                  <p className="body-left-info-data">
                    {el.type === 'adult'
                      ? `Паспорт РФ  ${el.series} ${el.document}`
                      : `Свидетельство о рождении ${el.document}`}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="body-right">
            <div className="body-right-pricing">
              <h1 className="pricing-text">Всего</h1>
              <PriceFormatter
                title="verification_price-sum"
                value={
                  passengersPrice.departure.child +
                  passengersPrice.departure.adult +
                  passengersPrice.departure.services +
                  passengersPrice.arrival.child +
                  passengersPrice.arrival.adult +
                  passengersPrice.arrival.services
                }
              />
              <div className="pricing-sum">
                <img className="pricing-sum-img" src={require('../../../../../src/images/sidebar/sidebar-last-rub.png')} alt="logo" />
              </div>
            </div>
            <div className="body-right-button">
              <button 
                type="button"
                className="change-button"
                onClick={handlePassengers}
              >
                Изменить
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="verification-payment">
        <div className="verification-passengers">
          <div className="payment-head verification-head">
            <h3 className="payment-title">Способ оплаты</h3>
          </div>
          <div className="verification-passengers-body">
            <div className="body-left">
              <h1 className="body-left-text">Наличными</h1>
            </div>
            <div className="body-right">
              <div className="body-right-button">
                <button type="button" className="change-button" onClick={handlePayment}>Изменить</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="payment-nextpage">
        <button 
          type="button"
          className="payment-button"
          onClick={handleClick}
        >
          Подтвердить
        </button>
      </div>

    </section>
  )
}