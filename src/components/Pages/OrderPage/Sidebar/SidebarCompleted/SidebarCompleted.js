import React, { useState } from "react";
import moment from "moment";
import { useSelector } from "react-redux";
import PriceFormatter from "../../../../Elements/PriceFormatter";
import "./SidebarCompleted.css";

export default function SidebarCompleted() {
  const { train } = useSelector((state) => state.seats.train);
  const { departure, arrival } = train;

  const { passengersCount, passengersPrice } = useSelector(
    (state) => state.passengers
  );

  const [isHidden, setHidden] = useState({
    departure: true,
    arrival: true,
    passengers: true,
  });

  const onHidden = (name) => {
    setHidden((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const formatSeconds = (value) => {
    const hour = parseInt(value / 3600);
    const min = parseInt((value % 3600) / 60);
    return `${hour} : ${min}`;
  };

  return (
    <section className="completed">
      <h3 className="completed-title">Детали поездки</h3>
      <section className="completed-to">

        <div className="to-header">
          <div className="header-left">
            <img className="header-left-img" src={require('../../../../../images/seats/seats1.png')} alt="pic" />
            <h3 className="header-left-title">Туда</h3>
            <p className="header-left-date">{moment.unix(departure.from.datetime).format('DD.MM.YYYY')}</p>
          </div>
          <button
            type="button"
            className={`header-button ${!isHidden.departure ? 'active-button' : 'inactive-button'
              }`}
            onClick={() => onHidden('departure')}
          />
        </div>

        <div
          className={`to-train ${isHidden.departure ? '' : 'hidden'
            } `}
        >
          <div className="to-train-container">
            <p className="to-train-left-text">№ поезда</p>
            <p className="to-train-left-text">Название</p>
          </div>
          <div className="to-train-container">
            <h4 className="to-train-right-header">{departure.train.name}</h4>
            <p className="to-train-right-text">
              {departure.from.city.name}
              <br />
              {departure.to.city.name}
            </p>
          </div>
        </div>

        <div className="to-duration">
          <p className="to-duration-text">
            {formatSeconds(departure.duration)}
          </p>
        </div>

        <div className="to-timing">
          <div className="to-timing-upper">
            <div className="upper-left">
              <h4 className="upper-header to-train-right-header">
                {moment
                  .unix(departure.from.datetime)
                  .format('HH:mm')}</h4>
              <p className="upper-text">
                {moment
                  .unix(departure.from.datetime)
                  .format('DD.MM.YYYY')}</p>
            </div>
            <div className="upper-middle">
              <img className="upper-middle-img" src={require('../../../../../images/seats/seats3.png')} alt="pic" />
            </div>
            <div className="upper-right">
              <h4 className="upper-header to-train-right-header">
                {moment.unix(departure.to.datetime).format('hh:mm')}
              </h4>
              <p className="upper-text">
                {moment
                  .unix(departure.to.datetime)
                  .format('DD.MM.YYYY')}
              </p>
            </div>
          </div>
          <div className="to-timing-lower">
            <div className="lower-left">
              <h4 className="upper-text to-train-right-header">{departure.from.city.name}</h4>
              <p className="upper-text lower-text">
                {departure.from.railway_station_name}
                <br />
                вокзал
              </p>
            </div>
            <div className="upper-right">
              <h4 className="upper-text to-train-right-header">{departure.to.city.name}</h4>
              <p className="upper-text upper-text">
                {departure.to.railway_station_name}
                <br />
                вокзал
              </p>
            </div>
          </div>
        </div>
      </section>

      {arrival && (
        <section className={`completed-to ${arrival ? '' : 'hidden'}`}>
          <div className="to-header">
            <div className="header-left">
              <img className="header-left-img" src={require('../../../../../images/seats/seats9.png')} alt="pic" />
              <h3 className="header-left-title">Обратно{' '}</h3>
              <p className="header-left-date">
                {moment
                  .unix(arrival.from.datetime)
                  .format('DD.MM.YYYY')}
              </p>
            </div>
            <button
              type="button"
              className={`header-button ${!isHidden.arrival ? 'active-button' : 'inactive-button'
                }`}
              onClick={() => onHidden('arrival')}
            />
          </div>

          <div className={`to-train ${isHidden.arrival ? '' : 'hidden'
            } `}>
            <div className="to-train-left">
              <p className="to-train-left-text">№ поезда</p>
              <p className="to-train-left-text">Название</p>
            </div>
            <div className="to-train-right">
              <h4 className="to-train-right-header">{arrival.train.name}</h4>
              <p className="to-train-right-text">
                {arrival.from.city.name}
                <br />
                {arrival.to.city.name}
              </p>
            </div>
          </div>

          <div className="to-duration">
            <p className="to-duration-text">{formatSeconds(arrival.duration)}</p>
          </div>

          <div className="to-timing">
            <div className="to-timing-upper">
              <div className="upper-left">
                <h4 className="upper-header to-train-right-header">
                  {moment
                    .unix(arrival.from.datetime)
                    .format('HH:mm')}
                </h4>
                <p className="upper-text">
                  {moment
                    .unix(arrival.from.datetime)
                    .format('DD.MM.YYYY')}
                </p>
              </div>
              <div className="upper-middle">
                <img className="upper-middle-img" src={require('../../../../../images/seats/seats10.png')} alt="pic" />
              </div>
              <div className="upper-right">
                <h4 className="upper-header to-train-right-header">
                  {moment.unix(arrival.to.datetime).format('hh:mm')}
                </h4>
                <p className="upper-text">
                  {moment
                    .unix(arrival.to.datetime)
                    .format('DD.MM.YYYY')}
                </p>
              </div>
            </div>
            <div className="to-timing-lower">
              <div className="lower-left">
                <h4 className="upper-text to-train-right-header">{arrival.from.city.name}</h4>
                <p className="upper-text lower-text">
                  {arrival.from.railway_station_name}
                  <br />
                  вокзал
                </p>
              </div>
              <div className="upper-right">
                <h4 className="upper-text to-train-right-header">
                  {arrival.to.city.name}
                </h4>
                <p className="upper-text upper-text">
                  {arrival.to.railway_station_name}
                  <br />
                  вокзал
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="completed-passengers">
        <div className="to-header">
          <div className="header-left">
            <img className="header-left-img" src={require('../../../../../images/seats/seats12.png')} alt="pic" />
            <h3 className="header-left-title">Пассажиры</h3>
          </div>
          <button
            type="button"
            className={`header-button ${!isHidden.passengers ? 'active-button' : 'inactive-button'
              }`}
            onClick={() => onHidden('passengers')}
          />
        </div>

        <div className={`${isHidden.passengers ? 'to-train-price' : 'hidden'} `}>
          <div className="to-train-left">
            <p className="to-train-left-text">
              {passengersCount.adult} Взрослы
              {Number(passengersCount.adult) === 1 ? 'й' : 'х'}
            </p>
            {Number(passengersCount.child) +
              Number(passengersCount.baby) >
              0 && (
                <p className="to-train-left-text">
                  {Number(passengersCount.child) +
                    Number(passengersCount.baby)}{' '}
                  Ребен
                  {Number(passengersCount.child) +
                    Number(passengersCount.baby) ===
                    1
                    ? 'ок'
                    : 'ка'}
                </p>
              )}
          </div>
          <div className="to-train-right">
            <div className="to-train-right-header">
              <PriceFormatter
                title="price-passenger"
                value={
                  arrival
                    ? passengersPrice.departure.adult +
                    passengersPrice.arrival.adult +
                    passengersPrice.departure.services +
                    passengersPrice.arrival.services
                    : passengersPrice.departure.adult +
                    passengersPrice.departure.services
                }
              />
              <img className="seats-places-img" src={require('../../../../../images/seats/seats11.png')} alt="pic" />
            </div>

            {Number(passengersCount.child) +
              Number(passengersCount.baby) >
              0 && (
                <div className="to-train-right-header">
                  <PriceFormatter
                    title="price-passenger"
                    value={
                      passengersPrice.departure.child +
                      passengersPrice.arrival.child
                    }
                  />
                  <img className="seats-places-img" src={require('../../../../../images/seats/seats11.png')} alt="pic" />
                </div>
              )}
          </div>
        </div>
      </section>

      <section className="completed-price">
        <h2 className="price-left">Итого</h2>
        <div className="price-right">
          <PriceFormatter
            title="price-total"
            value={
              passengersPrice.departure.adult +
              passengersPrice.arrival.adult +
              passengersPrice.departure.child +
              passengersPrice.arrival.child +
              passengersPrice.departure.services +
              passengersPrice.arrival.services
            }
          />
          <img className="price-right-img" src={require('../../../../../images/seats/seats13.png')} alt="pic" />
        </div>
      </section>
    </section>
  )

}