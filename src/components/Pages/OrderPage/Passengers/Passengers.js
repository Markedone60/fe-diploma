import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { nanoid } from "@reduxjs/toolkit";
import PassengerForm from "./PassengerForm";
import "./Passengers.css";
import { stageChange } from "../../../../slices/stageSlice";
import { clearPassengersData } from "../../../../slices/passengersSlice";

export default function Passengers() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { passengersCount } = useSelector((state) => state.passengers);
  const passengersCountTotal =
    passengersCount.adult + passengersCount.child + passengersCount.baby;
  const { passengers } = useSelector((state) => state.passengers);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    dispatch(stageChange({ stage: 2 }));
    if (passengersCountTotal < passengers.length) {
      dispatch(clearPassengersData());
    }
  }, [dispatch, passengers.length, passengersCountTotal]);

  useEffect(() => {
    setDisabled(true);
    if (passengers.length !== passengersCountTotal) return;
    setDisabled(false);
  }, [passengersCount, passengers, passengersCountTotal]);

  const handleClick = () => {
    navigate('/order/payment/');
    document.documentElement.scrollTop = 0;
  };

  return (
    <section className="passengers">
      {[...Array(passengersCount.adult)].map((e, i) => (
        <PassengerForm
          type="adult"
          number={i + 1}
          key={nanoid()}
        />
      ))}
      {[...Array(passengersCount.child + passengersCount.baby)].map(
        (e, i) => (
          <PassengerForm
            type="child"
            number={i + 1 + passengersCount.adult}
            key={nanoid()}
          />
        )
      )}
      <div className="passengers-nextpage">
        <button
          type="button"
          className="button passengers-button"
          onClick={handleClick}
          disabled={disabled}
        >
          Далее
        </button>
      </div>
    </section>
  )
}