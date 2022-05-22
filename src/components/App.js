import React from "react";
import Navbar from "./Navbar";
import "../styles/App.css";
import Carousel from "./Carousel";
import QuestionCard from "./QuestionCard";
const emVsUrg = require("../img/emergenciaVsUrgencia.png");

const App = () => {
  const logo = require("../img/a-tiempo-logo.png");
  const emergenciasTelefono = require("../img/emergencias-telefono.png");
  return (
    <div className="App">
      <div className="logo">
        <img src={logo} height="150" alt="" />
      </div>
      <Navbar />
      <Carousel></Carousel>
      {/* <img src={emergenciasTelefono} height="100" alt="" /> */}
      <div className="CardsContainer">
        <QuestionCard img={emVsUrg} titulo="titulo 1" subtitulo="subtitulo" />
        <QuestionCard img={emVsUrg} titulo="titulo 1" subtitulo="subtitulo" />
        <QuestionCard img={emVsUrg} titulo="titulo 1" subtitulo="subtitulo" />
      </div>
    </div>
  );
};

export default App;
