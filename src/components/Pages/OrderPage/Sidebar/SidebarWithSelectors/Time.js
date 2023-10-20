import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import InputRange from "react-input-range";
import { filterChange } from "../../../../../slices/filterSlice";
import 'react-input-range/lib/css/index.css';

export default function Time() {
  const {
    start_departure_hour_from,
    start_departure_hour_to,
    start_arrival_hour_from,
    start_arrival_hour_to,
    end_departure_hour_from,
    end_departure_hour_to,
    end_arrival_hour_from,
    end_arrival_hour_to,
  } = useSelector((state) => state.filter);
  const { date_end } = useSelector((state) => state.search);
  const dispatch = useDispatch();

  const [isHidden, setHidden] = useState({
    departure: true,
    arrival: true,
  });

  const onHidden = (name) => {
    setHidden((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const handleChange = (name, value) => {
    dispatch(filterChange({ name: `${name}_hour_from`, value: value.min }));
    dispatch(filterChange({ name: `${name}_hour_to`, value: value.max }));
  };

  return (
    <div className="time-options">

      <div className="time-element">
        <div className="time-header">
          <h3 className="time-header-title time-header-title-arrow arrow-to">Туда</h3>
          <button
            type="button"
            className={`time-header-button ${isHidden.departure ? 'active-button' : 'inactive-button'}`}
            onClick={() => onHidden('departure')}
          />
        </div>

        <div className={`time-form ${isHidden.departure ? 'hidden' : ''}`}>
          <h4 className="time-form-header">Время отбытия</h4>
          <div className="time-form-slider">
            <InputRange
              formatLabel={(value) => `${value}:00`}
              minValue={0}
              maxValue={24}
              value={{
                min: start_departure_hour_from,
                max: start_departure_hour_to,
              }}
              onChange={(value) =>
                handleChange('start_departure', value)
              }
            />
          </div>
        
        
          <h4 className="time-form-header time-form-header-right">Время прибытия</h4>
          <div className="time-form-slider">
            <InputRange
              formatLabel={(value) => `${value}:00`}
              minValue={0}
              maxValue={24}
              value={{
                min: start_arrival_hour_from,
                max: start_arrival_hour_to,
              }}
              onChange={(value) => handleChange('start_arrival', value)}
            />
          </div>
        </div>
      </div>

      <div className="time-element element-from">
        <div className="time-header">
          <h3 className="time-header-title time-header-title-arrow arrow-back">Обратно</h3>
          <button
            type="button"
            className={`time-header-button ${isHidden.arrival ? 'active-button' : 'inactive-button'}`}
            onClick={() => onHidden('arrival')}
          />
        </div>
        <div className={`time-form ${isHidden.arrival ? 'hidden' : ''}`}>
          <h4 className="time-form-header">Время отбытия</h4>
          <div className="time-from-slider">
            <InputRange
              formatLabel={(value) => `${value}:00`}
              minValue={0}
              maxValue={24}
              value={{
                min: end_departure_hour_from,
                max: end_departure_hour_to,
              }}
              onChange={(value) =>
                handleChange('end_departure', value)
              }
            />
          </div>
       
          <h4 className="time-form-header time-form-header-right">Время прибытия</h4>
          <div className="time-from-slider">
            <InputRange
              formatLabel={(value) => `${value}:00`}
              minValue={0}
              maxValue={24}
              value={{
                min: end_arrival_hour_from,
                max: end_arrival_hour_to,
              }}
              onChange={(value) => handleChange('end_arrival', value)}
            />
          </div>
        </div>
      </div>

    </div>
  )
}