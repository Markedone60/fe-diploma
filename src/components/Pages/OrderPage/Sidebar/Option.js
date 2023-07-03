import React from "react";
import PropTypes from "prop-types";

export default function Option({name, src, alt}) {
  return (
    <li className="options-item">
      <img className="options-item-image" src={src} alt="pic" />
      <div className="options-item-text">{alt}</div>
      <div className="options-item-form">
        <input
          className="item-form-check"
          type="checkbox"
          name={name}
          id={name}
        />
        <label 
          className='item-form-label'
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