import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import moment from "moment/moment";
import PriceFormatter from "../../../../Elements/PriceFormatter";
import TimeFormatter from "../../../../Elements/TimeFormatter";
import { trainAdd } from "../../../../../slices/seatsSlice";
import './TrainElement.css';

export default function TrainElement(route, type) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { train, option } = route;
  const { departure, arrival } = train;

  const handleClick = () => {
    if (option === 'verification') {
      navigate('/order/tickets/train');
      return;
    }

    dispatch(trainAdd(route));
    navigate('/order/tickets/seats');
  }

  return (
    <div className={`train-container-card ${option || ''}`}>
      <div className="card-logo">
        <img
          className="card-logo-img"
          src={option === 'ticket_header-train' ? require('../../../../../images/seats/seats2.png') : require('../../../../../images/train-selector/train1.png')}
          alt="logo"
        />
        <div className="card-logo-body">
          <h3 className="card-logo-body-header">{departure.train.name}</h3>
          {train.default && (
            <p className="card-direction">
              {train.default}
            </p>
          )}
          <p className="card-direction">
            {departure.from.city.name}
          </p>
          <p className="card-direction">
            {departure.to.city.name}
          </p>
        </div>
      </div>

      <div className="train_routes">
        {departure && type !== 'arrival' && (
          <div className="card-body-section">
            <div className="card-body-direction outbound">
              <h3 className="card-direction-time">
                {moment
                  .unix(departure.from.datetime)
                  .utc()
                  .format('HH:mm')}
              </h3>
              <p className="card-direction-city">
                {departure.from.city.name}
              </p>
              <p className="card-direction-station">
                {departure.from.railway_station_name} вокзал
              </p>
            </div>
            <div className="card-body-between">
              <div className="card-body-between-time">
                {option !== 'ticket_header-train' && (
                  <p className="route-duration-time">
                    {moment
                      .unix(departure.duration)
                      .utc()
                      .format('HH:mm')}
                  </p>
                )}
              </div>
              <img className="card-body-between-img" src={require('../../../../../images/train-selector/train2.png')} alt="logo" />
            </div>

            <div className="card-body-direction inbound">
              <h3 className="card-direction-time">
                {moment
                  .unix(departure.to.datetime)
                  .utc()
                  .format('HH:mm')}
              </h3>
              <p className="card-direction-city">
                {departure.to.city.name}
              </p>
              <p className="card-direction-station">
                {departure.to.railway_station_name} вокзал
              </p>
            </div>
          </div>
        )}

        {arrival && type !== 'departure' && (
          <div className="card-body-section">
            <div className="card-body-direction outbound">
              <h3 className="card-direction-time">
                {moment.unix(arrival.to.datetime).utc().format('HH:mm')}
              </h3>
              <p className="card-direction-city">
                {arrival.to.city.name}
              </p>
              <p className="card-direction-station">
                {arrival.to.railway_station_name} вокзал
              </p>
            </div>
            <div className="card-body-between">
              <div className="card-body-between-time">
                {option !== 'ticket_header-train' && (
                  <p className="route-duration-time">
                    {moment.unix(arrival.duration).utc().format('HH:mm')}
                  </p>
                )}
              </div>
              <img className="card-body-between-img" src={require('../../../../../images/train-selector/train3.png')} alt="logo" />
            </div>
            <div className="card-body-direction inbound">
              <h3 className="card-direction-time">
                {moment
                  .unix(arrival.from.datetime)
                  .utc()
                  .format('HH:mm')}
              </h3>
              <p className="card-direction-city">
                {arrival.from.city.name}
              </p>
              <p className="card-direction-station">
                {arrival.from.railway_station_name} вокзал
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="train_info">
        {option !== 'ticket_header-train' && (
          <>
            <ul className="card-places-list">
              {departure.available_seats_info.fourth && (
                <li className="card-places-list-item">
                  <p className="card-places-list-item-type">Сидячий</p>
                  <p className="card-places-list-item-quantity">
                    {departure.available_seats_info.fourth}
                  </p>
                  <div className="card-places-list-item-price">
                    <span className="list-item-price-span1">от</span>
                    <PriceFormatter
                      title="list-item-price-span2"
                      value={departure.price_info.fourth.top_price}
                    />{' '}
                    <img className="list-item-price-img" src={require('../../../../../images/train-selector/train4.png')} alt="logo" />
                  </div>
                </li>
              )}

              {departure.available_seats_info.third && (
                <li className="card-places-list-item">
                  <p className="card-places-list-item-type">Плацкарт</p>
                  <p className="card-places-list-item-quantity">
                    {departure.available_seats_info.third}
                  </p>
                  <div className="card-places-list-item-price">
                    <span className="list-item-price-span1">от</span>
                    <PriceFormatter
                      title="list-item-price-span2"
                      value={departure.price_info.third.side_price}
                    />
                    <img className="list-item-price-img" src={require('../../../../../images/train-selector/train4.png')} alt="logo" />
                  </div>
                </li>
              )}

              {departure.available_seats_info.second && (
                <li className="card-places-list-item">
                  <p className="card-places-list-item-type">Купе</p>
                  <p className="card-places-list-item-quantity">
                    {departure.available_seats_info.second}
                  </p>
                  <div className="card-places-list-item-price">
                    <span className="list-item-price-span1">от</span>
                    <PriceFormatter
                      title="list-item-price-span2"
                      value={departure.price_info.second.bottom_price}
                    />
                    <img className="list-item-price-img" src={require('../../../../../images/train-selector/train4.png')} alt="logo" />
                  </div>
                </li>
              )}

              {departure.available_seats_info.first && (
                <li className="card-places-list-item">
                  <p className="card-places-list-item-type">Люкс</p>
                  <p className="card-places-list-item-quantity">
                    {departure.available_seats_info.first}
                  </p>
                  <div className="card-places-list-item-price">
                    <span className="list-item-price-span1">от</span>
                    <PriceFormatter
                      title="list-item-price-span2"
                      value={departure.price_info.first.top_price}
                    />
                    <img className="list-item-price-img" src={require('../../../../../images/train-selector/train4.png')} alt="logo" />
                  </div>
                </li>
              )}
            </ul>

            <div className="card-places-options">
              {departure.have_wifi &&
                <img className='train_options-icon' src={require('../../../../../images/sidebar/sidebar-options5-wifi.png')} />}
              {departure.is_express &&
                <img className='train_options-icon' src={require('../../../../../images/sidebar/sidebar-options6-express.png')} />}
            </div>

            <button
              type="button"
              className={`button ${option === 'verification'
                ? 'change-button'
                : 'card-places-button'
                }`}
              onClick={handleClick}
            >
              {option === 'verification' ? 'Изменить' : 'Выбрать места'}
            </button>
          </>
        )}

        {option === 'ticket_header-train' && (
          <div className="train_time">
            <img className="train_icon-clock" src={require('../../../../../images/seats/seats4.png')} alt="clock" />
            <TimeFormatter
              hours={moment.unix(departure.duration).utc().format('H')}
              minutes={moment.unix(departure.duration).utc().format('m')}
            />
          </div>
        )}

      </div>
    </div>

  )
}