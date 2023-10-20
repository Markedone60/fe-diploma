import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import moment from "moment/moment";
import PriceFormatter from "../../../Elements/PriceFormatter";
import TimeFormatter from "../../../Elements/TimeFormatter";
import {trainAdd} from "../../../../slices/seatsSlice";
import '../OrderPage.css';

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
    <div className="train-container">
      <div className={`train-container-card ${option || ''}`}>
        <div className="train-container-card-logo">
          <img className="train-container-card-logo-img" src={require('../../../../images/train-selector/train1.png')} alt="logo" />
          <div className="train-container-card-logo-body">
            <h3 className="train-container-card-logo-body-header">{departure.train.name}</h3>
            {train.default && (
              <p className="train-container-card-logo-body-direction">
                {train.default}
              </p>
            )}
            <p className="train-container-card-logo-body-direction">
              {departure.from.city.name}
            </p>
            <p className="train-container-card-logo-body-direction">
              {departure.to.city.name}
            </p>
          </div>
        </div>

        <div className="train-container-card-body">
          {departure && type !== 'arrival' && (
            <div className="train-container-card-body-section">
              <div className="train-container-card-body-direction outbound">
                <h3 className="train-container-card-body-direction-time">
                  {moment
                    .unix(departure.from.datetime)
                    .utc()
                    .format('HH:mm')}
                </h3>
                <p className="train-container-card-body-direction-place">
                  {departure.from.city.name}
                </p>
                <p className="train-container-card-body-direction-place">
                  {departure.from.railway_station_name} вокзал
                </p>
              </div>
              <div className="train-container-card-body-between">
                <div className="train-container-card-body-between-time">
                  {option !== 'ticket_header-train' && (
                    <p className="route_duration-time train_route-duration-time">
                      {moment
                        .unix(departure.duration)
                        .utc()
                        .format('HH:mm')}
                    </p>
                  )}
                </div>
                <img className="train-container-card-body-between-img" src={require('../../../../images/train-selector/train2.png')} alt="logo" />
              </div>

              <div className="train-container-card-body-direction inbound">
                <h3 className="train-container-card-body-direction-time">
                  {moment
                    .unix(departure.to.datetime)
                    .utc()
                    .format('HH:mm')}
                </h3>
                <p className="train-container-card-body-direction-place">
                  {departure.to.city.name}
                </p>
                <p className="train-container-card-body-direction-place">
                  {departure.to.railway_station_name} вокзал
                </p>
              </div>
            </div>
          )}

          {arrival && type !== 'departure' && (
            <div className="train-container-card-body-section">
              <div className="train-container-card-body-direction outbound">
                <h3 className="train-container-card-body-direction-time">
                  {moment.unix(arrival.to.datetime).utc().format('HH:mm')}
                </h3>
                <p className="train-container-card-body-direction-place">
                  {arrival.to.city.name}
                </p>
                <p className="train-container-card-body-direction-place">
                  {arrival.to.railway_station_name} вокзал
                </p>
              </div>
              <div className="train-container-card-body-between">
                <div className="train-container-card-body-between-time">
                  {option !== 'ticket_header-train' && (
                    <p className="route_duration-time train_route-duration-time">
                      {moment.unix(arrival.duration).utc().format('HH:mm')}
                    </p>
                  )}
                </div>
                <img className="train-container-card-body-between-img" src={require('../../../../images/train-selector/train3.png')} alt="logo" />
              </div>
              <div className="train-container-card-body-direction inbound">
                <h3 className="train-container-card-body-direction-time">
                  {moment
                    .unix(arrival.from.datetime)
                    .utc()
                    .format('HH:mm')}
                </h3>
                <p className="train-container-card-body-direction-place">
                  {arrival.from.city.name}
                </p>
                <p className="train-container-card-body-direction-place">
                  {arrival.from.railway_station_name} вокзал
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="train-container-card-places">
          {option !== 'ticket_header-train' && (
            <>
              <ul className="train-container-card-places-list">
                {departure.available_seats_info.fourth && (
                  <li className="train-container-card-places-list-item">
                    <p className="train-container-card-places-list-item-type">Сидячий</p>
                    <p className="train-container-card-places-list-item-quantity">
                      {departure.available_seats_info.fourth}
                    </p>
                    <div className="train-container-card-places-list-item-price">
                      <span className="train-container-card-places-list-item-price-span1">от</span>
                      <PriceFormatter
                        title="train-container-card-places-list-item-price-span2"
                        value={departure.price_info.fourth.top_price}
                      />{' '}
                      <img className="train-container-card-places-list-item-price-img" src={require('../../../../images/train-selector/train4.png')} alt="logo" />
                    </div>
                  </li>
                )}

                {departure.available_seats_info.third && (
                  <li className="train-container-card-places-list-item">
                    <p className="train-container-card-places-list-item-type">Плацкарт</p>
                    <p className="train-container-card-places-list-item-quantity">
                      {departure.available_seats_info.third}
                    </p>
                    <div className="train-container-card-places-list-item-price">
                      <span className="train-container-card-places-list-item-price-span1">от</span>
                      <PriceFormatter
                        title="train-container-card-places-list-item-price-span2"
                        value={departure.price_info.third.side_price}
                      />
                      <img className="train-container-card-places-list-item-price-img" src={require('../../../../images/train-selector/train4.png')} alt="logo" />
                    </div>
                  </li>
                )}

                {departure.available_seats_info.second && (
                  <li className="train-container-card-places-list-item">
                    <p className="train-container-card-places-list-item-type">Купе</p>
                    <p className="train-container-card-places-list-item-quantity">
                      {departure.available_seats_info.second}
                    </p>
                    <div className="train-container-card-places-list-item-price">
                      <span className="train-container-card-places-list-item-price-span1">от</span>
                      <PriceFormatter
                        title="train-container-card-places-list-item-price-span2"
                        value={departure.price_info.second.bottom_price}
                      />
                      <img className="train-container-card-places-list-item-price-img" src={require('../../../../images/train-selector/train4.png')} alt="logo" />
                    </div>
                  </li>
                )}

                {departure.available_seats_info.first && (
                  <li className="train-container-card-places-list-item">
                    <p className="train-container-card-places-list-item-type">Люкс</p>
                    <p className="train-container-card-places-list-item-quantity">
                      {departure.available_seats_info.first}
                    </p>
                    <div className="train-container-card-places-list-item-price">
                      <span className="train-container-card-places-list-item-price-span1">от</span>
                      <PriceFormatter
                        title="train-container-card-places-list-item-price-span2"
                        value={departure.price_info.first.top_price}
                      />
                      <img className="train-container-card-places-list-item-price-img" src={require('../../../../images/train-selector/train4.png')} alt="logo" />
                    </div>
                  </li>
                )}
              </ul>

              <div className="train-container-card-places-options">

                {departure.have_wifi &&
                  <img className='train_options-icon' src={require('../../../../images/train-selector/train3.png')} />}
                {departure.is_express &&
                  <img className='train_options-icon' src={require('../../../../images/train-selector/train3.png')} />}
                {<img className='train_options-icon' src={require('../../../../images/train-selector/train3.png')} />}

              </div>

              <button
                type="button"
                className={`button ${option === 'verification'
                  ? 'verification_button'
                  : 'train_seats-button'
                  }`}
                onClick={handleClick}
              >
                {option === 'verification' ? 'Изменить' : 'Выбрать места'}
              </button>
            </>
          )}

          {option === 'ticket_header-train' && (
            <div className="train_time">
              <img className="train_icon-clock" src={require('../../../../images/train-selector/train3.png')} alt="clock" />
              <TimeFormatter
                hours={moment.unix(departure.duration).utc().format('H')}
                minutes={moment.unix(departure.duration).utc().format('m')}
              />
            </div>
          )}
          
        </div>
      </div>
    </div>
  )
}