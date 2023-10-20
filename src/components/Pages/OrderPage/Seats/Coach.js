import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from 'prop-types';
import LuxuryClass from "./Classes/LuxuryClass";
import CoupeClass from './Classes/CoupeClass';
import PlatsClass from './Classes/PlatsClass';
import SittingClass from './Classes/SittingClass';

import PriceFormatter from "../../../Elements/PriceFormatter";
import Service from "./Service";

import { passengersPriceChange } from "../../../../slices/passengersSlice";

export default function Coach({ coach, seatsList, typeTicket }) {
  const { seats, services } = useSelector((state) => state.seats[typeTicket]);
  const { passengersCount } = useSelector((state) => state.passengers);
  const passengersPrice = useSelector((state) => state.passengers.passengersPrice[typeTicket]);
  const dispatch = useDispatch();

  const type = {
    lux: coach.class_type === 'first',
    coupe: coach.class_type === 'second',
    plats: coach.class_type === 'third',
    seat: coach.class_type === 'fourth',
  }

  const [adult, setAdult] = useState(0);
  const [child, setChild] = useState(0);
  const [service, setService] = useState(0);

  useEffect(() => {
    const calculatePrice = (el) => {
      if (type.coupe || type.plats) {
        if (el > 32) {
          return coach.side_price;
        }
        if (el % 2 === 0) {
          return coach.top_price;
        }
        return coach.bottom_price;
      }
      if (type.seat) {
        if (el > 32) {
          return coach.bottom_price;
        }
        return coach.top_price;
      }
      return coach.bottom_price;
    }

    if (seats[coach._id]) {
      const childPrice = seats[coach._id]
        .slice(0, passengersCount.child)
        .map((el) => calculatePrice(el) * 0.5)
        .reduce((acc, el) => acc + el, 0)
      const adultPrice = seats[coach._id]
        .slice()
        .map((el) => calculatePrice(el))
        .reduce((acc, el) => acc + el, 0)
      if (childPrice !== passengersPrice.child) {
        const previous = passengersPrice.child - child;
        setChild(Math.floor(childPrice));
        dispatch(
          passengersPriceChange({
            type: 'child',
            price: previous + Math.floor(childPrice),
            typeTicket,
          })
        )
      }
      if (adultPrice !== passengersPrice.adult) {
        const previous = passengersPrice.adult - adult;
        setAdult(Math.floor(adultPrice));
        dispatch(
          passengersPriceChange({
            type: 'adult',
            price: previous + Math.floor(adultPrice),
            typeTicket,
          })
        )
      }
    }
  }, [
    seats, adult, child, coach._id, dispatch, passengersCount.child, passengersPrice.adult, passengersPrice.child,
    typeTicket, coach.bottom_price, coach.side_price, coach.top_price, type.coupe, type.plats, type.seat
  ]);

  useEffect(() => {
    if (services[coach._id]) {
      const servicesPrice = services[coach._id]
        .map((el) => {
          if (coach[`${el}_price`]) {
            return coach[`${el}_price`]
          }
          return 0;
        })
        .reduce((acc, el) => acc + el, 0);
      if (servicesPrice !== passengersPrice.services) {
        const previous = passengersPrice.services - service;
        setService(Math.floor(servicesPrice));
        dispatch(
          passengersPriceChange({
            id: coach._id,
            type: 'services',
            price: previous + Math.floor(servicesPrice),
            typeTicket,
          })
        )
      }
    }
  }, [services, coach, dispatch, passengersPrice.services, service, typeTicket]);

  return (
    <section className="class">
      <div className="class-header">
        <div className="class-header-vagon">
          <h1 className="vagon-number">{coach._id.toString().slice(-2)}</h1>
          <p className="vagon-text">вагон</p>
        </div>
        <div className="class-header-seats">
          <h4 className="seats-available">Места{' '}
            <span className="seats-available-text">{coach.available_seats}</span>
          </h4>
          {type.lux && (
            <>
              <p className="seats-places seats-upper">
                Верхние{' '}
                <span className="seats-places number">
                  {type.coupe &&
                    seatsList.filter((el) => el.index % 2 === 0).length}
                  {type.plats &&
                    seatsList.filter((el) => el.index % 2 === 0 && el.index < 33).length}
                  {type.seat && (seatsList.length < 32 ? seatsList.length : 32)}
                </span>
              </p>
              <p className="seats-places seats-lower">
                Нижние{' '}
                <span className="seats-places number">
                  {type.coupe &&
                    seatsList.filter((el) => el.index % 2 !== 0).length}
                  {type.plats &&
                    seatsList.filter((el) => el.index % 2 !== 0 && el.index < 33).length}
                  {type.seat && seatsList.length - 32}
                </span>
              </p>
            </>
          )}
          {type.plats && (
            <p className="seats-places seats-lower">
              Боковые{' '}
              <span className="seats-places number">
                {seatsList.filter((el) => el.index > 32).length}
              </span>
            </p>
          )}
        </div>

        <div className="class-header-prices">
          <h4 className="seats-available">Стоимость</h4>
          {!type.lux && (
            <p className="seats-places seats-upper">
              <PriceFormatter title="coach-info" value={coach.top_price} />
              <img className="seats-places-img" src={require('../../../../images/seats/seats11.png')} alt="pic" />
            </p>
          )}
          <p className="seats-places seats-bottom">
            <PriceFormatter title="coach-info" value={coach.bottom_price} />
            <img className="seats-places-img" src={require('../../../../images/seats/seats11.png')} alt="pic" />
          </p>
          {type.plats && (
            <p className="seats-places seats-side">
              <PriceFormatter title="coach-info" value={coach.side_price} />
              <img className="seats-places-img" src={require('../../../../images/seats/seats11.png')} alt="pic" />
            </p>
          )}
        </div>

        <div className="class-header-options">
          <h4 className="seats-available">Обслуживание ФПК</h4>
          <div className="options-logos">
            {coach.have_air_conditioning && (
              <Service service="air" id={coach._id} type={typeTicket} />
            )}
            {coach.have_wifi && (
              <Service service="wifi" id={coach._id} type={typeTicket} />
            )}
            {coach.linens_price !== 0 && (
              <Service
                service="linens"
                id={coach._id}
                disabled={coach.is_linens_included}
                type={typeTicket}
              />
            )}
            <Service service="food" id={coach._id} type={typeTicket} />
          </div>
        </div>
      </div>
      <div className="class-body">
        <div className="class-body-prompt">
          {seatsList.filter((el) => el.available === false).length} человек выбирают места в этом поезде
        </div>
        {type.lux && (
          <LuxuryClass
            id={coach._id}
            seatsList={seatsList}
            typeTicket={typeTicket}
          />
        )}
        {type.coupe && (
          <CoupeClass
            id={coach._id}
            seatsList={seatsList}
            typeTicket={typeTicket}
          />
        )}
        {type.plats && (
          <PlatsClass
            id={coach._id}
            seatsList={seatsList}
            typeTicket={typeTicket}
          />
        )}
        {type.seat && (
          <SittingClass
            id={coach._id}
            seatsList={seatsList}
            typeTicket={typeTicket}
          />
        )}
      </div>
      <div className="class-total">
        {child + adult + service > 0 && (
          <p className="class-total-text">
            <PriceFormatter
              title="class-total"
              value={child + adult + service}
            />
            <img className="class-total-сurrency" src={require('../../../../images/seats/seats11.png')} alt="pic" />
          </p>
        )}
      </div>

    </section>
  )
}

Coach.propTypes = {
  coach: PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
  ).isRequired,
  seatsList: PropTypes.string.isRequired,
  typeTicket: PropTypes.string.isRequired,
};