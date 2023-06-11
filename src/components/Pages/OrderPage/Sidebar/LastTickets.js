import React from "react";
import "./Sidebar.css"

export default function LastTickets() {
  return (
    <section className="last">
      <h2 className="last-header">Последние билеты</h2>
      <div className="last-items">
        <div className="last-item">
          <div className="last-item-header">
            <div className="last-item-location">
              <div className="item-location">City</div>
              <span className="item-sublocation">Place</span>
            </div>
            <div className="last-item-location">
              <div className="item-location">City</div>
              <span className="item-sublocation">Place</span>
            </div>
          </div>
          <div className="last-item-body">
            <div className="last-item-options">
              <img className="last-item-options-img" src={require('../../../../images/sidebar/sidebar-options3.png')} alt="pic"/>
            </div>
            <div className="last-item-price">
              <div className="last-item-price-container">
                <div className="last-item-price-start">от</div>
                <div className="last-item-price-sum">867</div>
                <img className="last-item-price-img" src={require('../../../../images/sidebar/sidebar-last-rub.png')} alt="pic"/>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}