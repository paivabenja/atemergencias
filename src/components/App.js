import React from "react";
import Navbar from "./Navbar";
import "../styles/App.css";
import Carousel from "./Carousel";

const App = () => {
  const logo = require("../img/a-tiempo-logo.png");
  return (
    <div className="App">
      <div className="logo">
        <img src={logo} height="150" />
      </div>
      <Navbar />
      <Carousel></Carousel>
    </div>
  );
};

export default App;
