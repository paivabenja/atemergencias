import React from "react";
import Navbar from "./Navbar";
import "../styles/App.css";
import Carousel from "./Carousel";

export default () => {
  return (
    <div className="App">
      <Navbar />
      <Carousel></Carousel>
    </div>
  );
};
