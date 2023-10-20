/* eslint-disable react/prop-types, react/no-unstable-nested-components */
import React, { forwardRef, useEffect, useState } from "react";
import { useSelector, useDispatch} from "react-redux";
import ReactDatePicker from "react-datepicker";
import "../Sidebar.css";
import 'react-datepicker/dist/react-datepicker.css';
import { searchChange } from "../../../../../slices/searchSlice";


export default function Dates() {
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
    const string = date.toLocaleDateString();
    const format = `${string.slice(-4)}-${string.slice(3,5)}-${string.slice(0,2)}`;
    dispatch (
      searchChange({
        name,
        value: format,
      })
    )
  }

  const Input = forwardRef(({value, onClick}, ref) => (
    <input 
      className="sidebar-input"
      type="text"
      placeholder="ДД/ММ/ГГ"
      value={value}
      onClick={onClick}
      onChange={onClick}
      ref={ref}
    />
  ));

  Input.displayName = "Input";

  return (
    <div className="dates">
      <div className="dates-container">
        <div className="dates-text">
          <label className="dates-input">
            Дата поездки
            <ReactDatePicker
              dateFormat="dd/MM/yy"
              selected={start}
              selectsStart
              startDate={start}
              endDate={end}
              customInput={<Input/>}
              onChange={(date) => handleChange('date_start', date)}
            />
          </label>
        </div>
        <div className="dates-text">
          <label className="dates-input">
            Дата возвращения
            <ReactDatePicker
              dateFormat="dd/MM/yy"
              selected={end}
              selectsEnd
              startDate={start}
              endDate={end}
              minDate={start}
              customInput={<Input/>}
              onChange={(date) => handleChange('date_end', date)}
            />
          </label>
        </div>
      </div>
    </div>
  )
}