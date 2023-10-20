import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { filterChange } from "../../../../../slices/filterSlice";

export default function Option({name, src, alt}) {
  const dispatch = useDispatch();
  const {filter} = useSelector((state) => state);

  const handleChange = (event) => {
    const {target} = event;
    dispatch(filterChange({name: target.name, value: target.checked}));
  };
  
  return (
    <li className="options-item">
      <div className="options-item-container">
        <img className="options-item-image" src={src} alt="pic" />
      </div>
      <div className="options-item-text">{alt}</div>
      <div className="options-item-form">
        <input
          className="item-form-check"
          type="checkbox"
          name={name}
          id={name}
          checked={filter[name]}
          onChange={handleChange}
        />
        <label 
          className={`item-form-label ${filter[name] && 'is-on'}`}
          htmlFor={name}
        >
          <span className="item-form-label-switch"/>
        </label>
      </div>
    </li>
  )
}

Option.propTypes = {
  name: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};