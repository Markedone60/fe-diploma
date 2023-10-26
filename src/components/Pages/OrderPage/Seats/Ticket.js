import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from 'prop-types';
import { nanoid } from "@reduxjs/toolkit";

import TrainElement from "../TrainSelection/TrainElement/TrainElement";
import Coach from "./Coach";
import { routeTo, routeBack, seat, plats, coupe, lux } from '../../../../images/svg'
import { coachClassChange, coachItemsClear, coachItemsSelect, coachItemsUnSelect } from "../../../../slices/seatsSlice";
import { passengersCountChange } from "../../../../slices/passengersSlice";

export default function Ticket({ type }) {
  const { train } = useSelector((state) => state.seats.train);
  const { coachList, coachClass, coachItems } = useSelector((state) => state.seats[type]);
  const { passengersCount } = useSelector((state) => state.passengers);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(coachItemsClear({ type }))
  }, [dispatch, type]);

  const available = {
    adult: 4 - passengersCount.adult - passengersCount.child,
    child:
      passengersCount.adult === 0 ? 3 : 4 - passengersCount.adult - passengersCount.child,
    baby: passengersCount.adult,
  }

  const classes = {
    fourth: {
      available: train[type].have_fourth_class === true,
      icon: seat,
      name: 'Сидячий',
    },
    third: {
      available: train[type].have_third_class === true,
      icon: plats,
      name: 'Плацкарт',
    },
    second: {
      available: train[type].have_second_class === true,
      icon: coupe,
      name: 'Купе',
    },
    first: {
      available: train[type].have_first_class === true,
      icon: lux,
      name: 'Люкс',
    },
  }

  const handleChange = (name, value) => {
    if (available[name] + passengersCount[name] < value)
      return;
    if (name === 'baby' && available[name] < value)
      return;
    dispatch(passengersCountChange({ type: name, count: Number(value) }));
  }

  const handleClick = (classType) => {
    dispatch(coachClassChange({ coachClass: classType, type }));
    dispatch(coachItemsClear({ type }));
  }

  const handleCoachClick = (id) => {
    if (coachItems.includes(id)) {
      dispatch(coachItemsUnSelect({ id, type }));
    } else {
      dispatch(coachItemsSelect({ id, type }));
    }
  }

  const handleBack = () => {
    dispatch(coachItemsClear({ type }));
    navigate(-1);
  }

  return (
    <section className="seat">
      <section className="seat-container">

        <div className={`seat-header-actions ${type === 'departure' ? '' : 'routeBack'}`}>
          {type === 'departure' ? routeTo : routeBack}
          <button
            type="button"
            className="back-button"
            onClick={handleBack}
          >
            Выбрать другой поезд
          </button>
        </div>

        <TrainElement key={nanoid()} train={train} type={type} option="ticket_header-train" />
      </section>

      <section className="seat-tickets">
        <h3 className="tickets-header">Количество билетов</h3>
        <div className="tickets-selection">
          <div className="selection adult">
            <select
              className="selection-form form-adult"
              name="adult"
              value={passengersCount.adult}
              onChange={(event) =>
                handleChange(event.target.name, event.target.value)
              }
            >
              {[0, 1, 2, 3, 4].map((el) => (
                <option
                  className="selection-form-item"
                  value={el}
                  key={`adult${el}`}
                >
                  Взрослых — {el}
                </option>
              ))}
            </select>
            {available.adult > 0 && (
              <p className="selection-text text-adult">
                Можно добавить еще {available.adult}{' '}
                {available.adult > 1 ? 'пассажиров' : 'пассажира'}
              </p>
            )}
          </div>

          <div className="selection child">
            <select
              className="selection-form form-child"
              name="child"
              value={passengersCount.child}
              onChange={(event) =>
                handleChange(event.target.name, event.target.value)
              }
            >
              {[0, 1, 2, 3].map((el) => (
                <option
                  className="selection-form-item"
                  value={el}
                  key={`child${el}`}
                >
                  Детских — {el}
                </option>
              ))}
            </select>
            {available.child > 0 && (
              <p className="selection-text text-child">
                Можно добавить еще {available.child}{' '}{available.child > 1 ? 'детей' : 'ребенка'} до 10 лет.Свое место в вагоне, как у взрослых, но дешевле в среднем на 50-65%
              </p>
            )}
          </div>

          <div className="selection child0">
            <select
              className="selection-form form-child0"
              name="baby"
              value={passengersCount.baby}
              onChange={(event) =>
                handleChange(event.target.name, event.target.value)
              }
            >
              {[0, 1, 2, 3, 4].map((el) => (
                <option
                  className="selection-form-item"
                  value={el}
                  key={`baby${el}`}
                >
                  Детских «без места» — {el}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      <section className="seat-vagon">
        <h3 className="tickets-header">Тип вагона</h3>
        <ul className="vagon-list">
          {Object.keys(classes).map((el) =>
            classes[el].available ? (
              <li className="vagon-list-item" key={el}>
                <button
                  type="button"
                  className={`list-item-button ${coachClass === el ? 'list-item-button--active' : ''
                    }`}
                  disabled={!classes[el].available}
                  onClick={() => handleClick(el)}
                >
                  {classes[el].icon}
                  <p className="list-item-text">{classes[el].name}</p>
                </button>
              </li>
            ) : ('')
          )}
        </ul>
      </section>

      {coachList.filter((el) => el.coach.class_type === coachClass).length > 0 &&
        (
          <div className="seat-numbers">
            <div className="numbers-header">
              <ul className="numbers-header-seats">
                Вагоны
                {coachList
                  .filter((el) => el.coach.class_type === coachClass)
                  .map((el) => (
                    <li
                      className={`numbers-header-seats-num ${coachItems.includes(el.coach._id)
                        ? 'numbers-header-seats-num--active'
                        : ''
                        }`}
                      key={el.coach._id}
                      onClick={() => handleCoachClick(el.coach._id)}
                    >
                      {el.coach._id.toString().slice(-2)}
                    </li>
                  ))
                }
              </ul>
              <p className="numbers-header-text">Нумерация вагонов начинается с головы поезда</p>
            </div>

            {coachList.filter((el) => el.coach.class_type === coachClass &&
              coachItems.includes(el.coach._id))
              .map((el) => (
                <Coach
                  key={el.coach._id}
                  coach={el.coach}
                  seatsList={el.seats}
                  typeTicket={type}
                />
              ))
            }
          </div>
        )
      }
    </section>
  )
}

Ticket.propTypes = {
  type: PropTypes.string.isRequired,
}

/*
<section className="seat">
        <div className="seat-container">
          <div className="back">
            <img className="back-img" src={require('../../../../images/seats/seats1.png')} alt="pic" />
            <button className="back-button">Выбрать другой поезд</button>
          </div>
          <div className="seat-info">
            <div className="info-from">
              <img className="from-icon" src={require('../../../../images/seats/seats2.png')} alt="pic" />
              <div className="form-name">
                <h3 className="form-name-header">Name</h3>
                <p className="form-name-direction">Direction from</p>
                <p className="form-name-direction">Direction to</p>
              </div>
            </div>

            <div className="info-route">
              <div className="route">
                <div className="route-from outbound">
                  <h3 className="route-from-time">7:00</h3>
                  <p className="route-from-direction">Москва</p>
                  <p className="route-from-direction">Вокзал</p>
                </div>
                <div className="route-arrow">
                  <img className="route-arrow-img" src={require('../../../../images/train-selector/train2.png')} alt="logo" />
                </div>
                <div className="route-from inbound">
                  <h3 className="route-from-time">7:00</h3>
                  <p className="route-from-direction">Москва</p>
                  <p className="route-from-direction">Вокзал</p>
                </div>
              </div>
            </div>

            <div className="info-time">
              <img className="time-clock" src={require('../../../../images/seats/seats4.png')} alt="pic" />
              <div className="time-duration">
                <p className="time-duration-text">N час</p>
                <p className="time-duration-text">N минут</p>
              </div>
            </div>
          </div>
        </div>

        <div className="seat-tickets">
          <h3 className="tickets-header">Количество билетов</h3>
          <div className="tickets-selection">
            <div className="selection adult">
              <select className="selection-form form-adult" />
              <p className="selection-text text-adult">Можно добавить еще 3 пассажиров</p>
            </div>
            <div className="selection child">
              <select className="selection-form form-child" />
              <p className="selection-text text-child">Можно добавить еще 3 детей до 10 лет.Свое место в вагоне, как у взрослых, но дешевле
                в среднем на 50-65%</p>
            </div>
            <div className="selection child0">
              <select className="selection-form form-child0" />
            </div>
          </div>
        </div>

        <div className="seat-vagon">
          <h3 className="tickets-header">Количество билетов</h3>
          <ul className="vagon-list">
            <li className="vagon-list-item">
              <button className="list-item-button">
                <img className="list-item-img" src={require('../../../../images/seats/seats5.png')} alt="pic" />
                <p className="list-item-text">Сидячий</p>
              </button>
            </li>
            <li className="vagon-list-item">
              <button className="list-item-button">
                <img className="list-item-img" src={require('../../../../images/seats/seats6.png')} alt="pic" />
                <p className="list-item-text">Плацкарт</p>
              </button>
            </li>
            <li className="vagon-list-item">
              <button className="list-item-button">
                <img className="list-item-img" src={require('../../../../images/seats/seats6.png')} alt="pic" />
                <p className="list-item-text">Купe</p>
              </button>
            </li>
          </ul>
        </div>
        <div className="seat-numbers">
          <div className="numbers-header">
            <div className="numbers-header-seats">
              <p className="numbers-header-seats-text">Вагоны</p>
              <p className="numbers-header-seats-num">N</p>
            </div>
            <p className="numbers-header-text">Нумерация вагонов начинается с головы поезда</p>
          </div>
        </div>
      </section>





      <section className="seat">
        <div className="seat-container">
          <div className="back back-opposite">
            <img className="back-img" src={require('../../../../images/seats/seats9.png')} alt="pic" />
            <button className="back-button">Выбрать другой поезд</button>
          </div>
          <div className="seat-info">
            <div className="info-from">
              <img className="from-icon" src={require('../../../../images/seats/seats2.png')} alt="pic" />
              <div className="form-name">
                <h3 className="form-name-header">Name</h3>
                <p className="form-name-direction">Direction from</p>
                <p className="form-name-direction">Direction to</p>
              </div>
            </div>

            <div className="info-route">
              <div className="route">
                <div className="route-from outbound">
                  <h3 className="route-from-time">7:00</h3>
                  <p className="route-from-direction">Москва</p>
                  <p className="route-from-direction">Вокзал</p>
                </div>
                <div className="route-arrow">
                  <img className="route-arrow-img" src={require('../../../../images/seats/seats10.png')} alt="logo" />
                </div>
                <div className="route-from inbound">
                  <h3 className="route-from-time">7:00</h3>
                  <p className="route-from-direction">Москва</p>
                  <p className="route-from-direction">Вокзал</p>
                </div>
              </div>
            </div>

            <div className="info-time">
              <img className="time-clock" src={require('../../../../images/seats/seats4.png')} alt="pic" />
              <div className="time-duration">
                <p className="time-duration-text">N час</p>
                <p className="time-duration-text">N минут</p>
              </div>
            </div>
          </div>
        </div>

        <div className="seat-tickets">
          <h3 className="tickets-header">Количество билетов</h3>
          <div className="tickets-selection">
            <div className="selection adult">
              <select className="selection-form form-adult" />
              <p className="selection-text text-adult">Можно добавить еще 3 пассажиров</p>
            </div>
            <div className="selection child">
              <select className="selection-form form-child" />
              <p className="selection-text text-child">Можно добавить еще 3 детей до 10 лет.Свое место в вагоне, как у взрослых, но дешевле
                в среднем на 50-65%</p>
            </div>
            <div className="selection child0">
              <select className="selection-form form-child0" />
            </div>
          </div>
        </div>

        <div className="seat-vagon">
          <h3 className="tickets-header">Количество билетов</h3>
          <ul className="vagon-list">
            <li className="vagon-list-item">
              <button className="list-item-button">
                <img className="list-item-img" src={require('../../../../images/seats/seats5.png')} alt="pic" />
                <p className="list-item-text">Сидячий</p>
              </button>
            </li>
            <li className="vagon-list-item">
              <button className="list-item-button">
                <img className="list-item-img" src={require('../../../../images/seats/seats6.png')} alt="pic" />
                <p className="list-item-text">Плацкарт</p>
              </button>
            </li>
            <li className="vagon-list-item">
              <button className="list-item-button">
                <img className="list-item-img" src={require('../../../../images/seats/seats6.png')} alt="pic" />
                <p className="list-item-text">Купe</p>
              </button>
            </li>
          </ul>
        </div>



        <div className="seat-numbers">
          <div className="numbers-header">
            <div className="numbers-header-seats">
              <p className="numbers-header-seats-text">Вагоны</p>
              <p className="numbers-header-seats-num">N</p>
            </div>
            <p className="numbers-header-text">Нумерация вагонов начинается с головы поезда</p>
          </div>
          <section className="class">
            <div className="class-header">
              <div className="class-header-vagon">
                <h1 className="vagon-number">N</h1>
                <p className="vagon-text">вагон</p>
              </div>
              <div className="class-header-seats">
                <h4 className="seats-available">Места
                  <span className="seats-available-text"> N</span>
                </h4>
                <p className="seats-places seats-upper">Верхние <span className="seats-places number">10</span></p>
                <p className="seats-places seats-lower">Нижние <span className="seats-places number">5</span></p>
                <p className="seats-places seats-side">Боковые <span className="seats-places number">2</span></p>
              </div>
              <div className="class-header-prices">
                <h4 className="seats-available">Стоимость</h4>
                <p className="seats-places seats-upper">
                  <span className="seats-places-sum">SUM</span>
                  <img className="seats-places-img" src={require('../../../../images/seats/seats11.png')} alt="pic" />
                </p>
                <p className="seats-places seats-upper">
                  <span className="seats-places-sum">SUM</span>
                  <img className="seats-places-img" src={require('../../../../images/seats/seats11.png')} alt="pic" />
                </p>
                <p className="seats-places seats-upper">
                  <span className="seats-places-sum">SUM</span>
                  <img className="seats-places-img" src={require('../../../../images/seats/seats11.png')} alt="pic" />
                </p>
              </div>
              <div className="class-header-options">
                <h4 className="seats-available">Обслуживание ФПК</h4>
                <div className="options-logos">
                  logo
                </div>
              </div>
            </div>
            <div className="class-body">
              <div className="class-body-prompt">0 человек выбирают места в этом поезде</div>
              <div className="class-body-scheme">
                Scheme
              </div>
            </div>
          </section>
        </div>
      </section>
*/