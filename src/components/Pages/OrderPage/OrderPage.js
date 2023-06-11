import React from "react";
import HeaderOrderPage from "./Header/HeaderOrderPage";
import Sidebar from "./Sidebar/Sidebar";
import Footer from "../../Elements/Footer";
import TrainSelection from "./TrainSelection";
import Seats from "./Seats/Seats";
import { Routes, Route } from 'react-router-dom';
import './OrderPage.css';

export default function OrderPage() {
  return (
    <div>
      <HeaderOrderPage />
      <div className="order-container">
        <Sidebar />
        <Routes>
          <Route path="/tickets/train" Component={TrainSelection} />
          <Route path="/tickets/seats" Component={Seats} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}