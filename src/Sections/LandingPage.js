import React from "react";
import Home from "../Components/Home";
import Offers from "../Components/Offers";
import Categories from "../Components/Categories";
import Features from "../Components/Features";
import Newsletter from "../Components/Newsletter";
import Footer from "../Components/Footer";

export default function LandingPage() {
  return (
    <div>
      <Home />
      <Offers />
      <Categories />
      <Features />
      <Newsletter />
      <Footer />
    </div>
  );
}
