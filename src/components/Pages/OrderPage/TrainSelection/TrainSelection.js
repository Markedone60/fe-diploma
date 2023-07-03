import React from "react";
import '../OrderPage.css';
import TrainElement from "./TrainElement";

export default function TrainSelection() {
  return (
    <section className="train">
      <div className="train-header">
        <div className="train-header-found">
          найдено:
        </div>
        <form className="train-header-sort">
          <div className="train-header-sort-header">сортировать по:</div>
          <select className="train-header-sort-select">
            <option className="train-header-sort-select-item" value="time">времени</option>
            <option className="train-header-sort-select-item" value="price">стоимости</option>
            <option className="train-header-sort-select-item" value="duration">длительности</option>
          </select>
        </form>
        <div className="train-header-list">
          <div className="train-header-list-filter">показывать по:</div>
          <ul className="train-header-list-options">
            <li className="train-header-list-options-item">5</li>
            <li className="train-header-list-options-item">10</li>
            <li className="train-header-list-options-item">20</li>
          </ul>
        </div>
      </div>
      <TrainElement/>
    </section>
  )
}