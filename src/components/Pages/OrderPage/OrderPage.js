import React from "react";
import HeaderOrderPage from "./Header/HeaderOrderPage";
import Sidebar from "./Sidebar/Sidebar";
import Footer from "../../Elements/Footer";
import TrainSelection from "./TrainSelection/TrainSelection";
import Seats from "./Seats/Seats";
import Passengers from "./Passengers/Passengers";
import Payment from "./Payment/Payment";
import Verification from "./Verification/Verification";
import { Routes, Route } from 'react-router-dom';
import './OrderPage.css';

export default function OrderPage() {
  return (
    <div>
      <HeaderOrderPage />
      <div className="order-container">

        <Sidebar/>

        <Routes>
          <Route path="/tickets/train" Component={TrainSelection} />
          <Route path="/tickets/seats" Component={Seats} />
          <Route path="/passenger/" Component={Passengers} />
          <Route path="/payment/" Component={Payment} />
          <Route path="/verification/" Component={Verification} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}