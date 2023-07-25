import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";

import './Inputs.css';
import { searchChange } from "../../../../../slices/searchSlice";

export default function Direction({ place, direction }) {

  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState('');
  const { routeFrom, routeIn } = useSelector((state) => state.search);

  const route = direction === 'routeFrom' ? routeFrom.city : routeIn.city;
  const [cities, setCities] = useState([route]);

  useEffect(() => {
    setValue(route);
    fetch(
      `${process.env.REACT_APP_URL}routes/cities?name=${route}`
    )
      .then((response) => response.json())
      .then((data) => setCities(data));
  }, [route])

  const dispatch = useDispatch();

  const onChangeDispatch = (id, city) => {
    setValue(city);
    dispatch(
      searchChange({
        name: direction,
        value: {
          id,
          city,
        },
      })
    );
  };

  const onFieldChange = (e) => {
    const { target } = e;
    setValue(target.value);
    const cityObj =
      cities &&
      cities.find((city) => city.name === target.value.toLowerCase());
    const id = cityObj ? cityObj._id : '';
    onChangeDispatch(id, target.value);
  };

  return (
    <div className="direction-input">
      <input
        id="cities"
        className="search-input direction-from"
        type="text"
        placeholder={place || ''}
        onClick={() => setVisible(true)}
        onChange={onFieldChange}
        name={direction}
        value={value}
      />
      {visible && (
        <div className="direction-list">
          {
            cities.map((city) => (
              <p
                className="direction-item"
                key={city._id}
                onClick={() =>
                  onChangeDispatch(city._id, city.name)
                }
              >
                {city.name}
              </p>
            ))
          }
        </div>
      )}
    </div>
  );
}

Direction.propTypes = {
  place: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
}