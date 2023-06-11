import React from "react";
import HeaderFirstPage from "./HeaderFirstPage";
import About from "./About";
import HowItWorks from "./HowItWorks";
import Review from "./Review";
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