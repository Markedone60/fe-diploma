import React from "react";
import ReactDatePicker from "react-datepicker";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchChange } from "../../../../../slices/searchSlice";
import './Inputs.css';
import 'react-datepicker/dist/react-datepicker.css';

export default function DateInputs() {
  const dispatch = useDispatch();
  const dateStart = useSelector((state) => state.search.date_start);
  const dateEnd = useSelector((state) => state.search.date_end);

  const [start, setStart] = useState();
  const [end, setEnd] = useState();

  useEffect(() => {
    if (dateStart) {
      setStart(new Date(dateStart));
    }
  }, [dateStart]);

  useEffect(() => {
    if (dateEnd) {
      setEnd(new Date(dateEnd));
    }
  }, [dateEnd]);

  const handleChange = (name, date) => {
    const str = date.toLocaleDateString();
    const format = `${str.slice(-4)}-${str.slice(3, 5)}-${str.slice(0, 2)}`;
    dispatch(
      searchChange({
        name,
        value: format,
      })
    );
  };

  return (
    <div className='direction-form'>
      <ReactDatePicker
        placeholderText='ДД/ММ/ГГ'
        dateFormat="dd/MM/yy"
        selected={start}
        minDate={new Date()}
        selectsStart
        onChange={(date) => handleChange('date_start', date)}
        customInput={
          <input
            className='search-input time time-from'
            placeholder='ДД/ММ/ГГ'
            type="text"
          />
        }
      />
      <span className='search-form-input' />
      <ReactDatePicker
        placeholderText='ДД/ММ/ГГ'
        dateFormat="dd/mm/yy"
        selected={end}
        minDate={start}
        selectsEnd
        onChange={(date) => handleChange('date_end', date)}
        customInput={
          <input
            className='search-input time time-to'
            placeholder='ДД/ММ/ГГ'
            type="text"
          />
        }
      />
    </div>
  );
}