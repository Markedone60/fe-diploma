import React from "react";
import HeaderFirstPage from "./Header/HeaderFirstPage";
import About from "./About/About";
import HowItWorks from "./HowItWorks/HowItWorks";
import Review from "./Review/Review";
import Footer from "../../Elements/Footer";
import './FirstPage.css';

export default function FirstPage() {
  return (
    <div>
      <HeaderFirstPage/>
      <About/>
      <HowItWorks/>
      <Review/>
      <Footer/>
    </div>
  )
}