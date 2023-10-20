import React from "react";
import { useSelector, useDispatch } from "react-redux";
import InputRange from "react-input-range";
import { filterChange } from "../../../../../slices/filterSlice";
import 'react-input-range/lib/css/index.css';

export default function Prices() {
  const dispatch = useDispatch();
  const { price_from, price_to } = useSelector((state) => state.filter);

  const onChange = (value) => {
    dispatch(filterChange({ name: 'price_from', value: value.min }));
    dispatch(filterChange({ name: 'price_to', value: value.max }));
  };

  return (
    <div className="prices">
      <h3 className="prices-text">Стоимость</h3>
      <div className="prices-container">
        <div className="prices-range">от</div>
        <div className="prices-range">до</div>
      </div>
      <InputRange
        id="slider"
        minValue={10}
        maxValue={9000}
        step={10}
        onChange={onChange}
        value={{
          min: price_from,
          max: price_to,
        }}
      />
    </div>
  )
}