import React from "react";
import PropTypes from "prop-types";
import "./LastTickets.css";
import PriceFormatter from "../../../../Elements/PriceFormatter";

export default function LastTicketItem(props) {
  const { ticket } = props;

  return (
    <div className="last-item">

      <div className="last-item-header">
        <div className="last-item-location">
          <div className="item-location">{ticket.departure.from.city.name}</div>
          <span className="item-sublocation">{ticket.departure.from.railway_station_name} <br /> вокзал </span>
        </div>
        <div className="last-item-location">
          <div className="item-location">{ticket.departure.to.city.name}</div>
          <span className="item-sublocation">{ticket.departure.to.railway_station_name} <br /> вокзал </span>
        </div>
      </div>

      <div className="last-item-body">
        <div className="last-item-options">
          {ticket.departure.have_wifi && (
            <img className="last-item-options-img" src={require('../../../../../images/sidebar/sidebar-options5-wifi.png')} alt="pic" />
          )}
          {ticket.departure.is_express && (
            <img className="last-item-options-img" src={require('../../../../../images/sidebar/sidebar-options6-express.png')} alt="pic" />
          )}
            <img className="last-item-options-img" src={require('../../../../../images/sidebar/sidebar-options7-food.png')} alt="pic" />
        </div>

        <div className="last-item-price">
          <div className="last-item-price-container">
            <div className="last-item-price-start">от</div>
            <div className="last-item-price-sum">
              <PriceFormatter
                title="last-item-price-sum"
                value={ticket.departure.min_price}
              />
            </div>
            <img className="last-item-price-img" src={require('../../../../../images/sidebar/sidebar-last-rub.png')} alt="pic" />
          </div>
        </div>

      </div>
    </div>
  );
}

LastTicketItem.propTypes = {
  ticket: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool, PropTypes.object])
  ).isRequired,
};