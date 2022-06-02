import React from "react";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import QuestionCard from "./QuestionCard";
const emVsUrg = require("../img/emergenciaVsUrgencia.png");
const logo = require("../img/a-tiempo-logo.png");
const emergenciasTelefono = require("../img/emergencias-telefono.png");
import "../styles/Home.css";

export default function Home() {
  return (
    <div>
      <div className="logo">
        <img src={logo} height="150" alt="" />
        <a href="tel:0810-222-2817">
          <img src={emergenciasTelefono} height="100" alt="" />
        </a>
      </div>
      <Navbar />
      <Carousel></Carousel>

      <div className="CardsContainer">
        <QuestionCard img={emVsUrg} titulo="titulo 1" subtitulo="subtitulo" />
        <QuestionCard img={emVsUrg} titulo="titulo 1" subtitulo="subtitulo" />
        <QuestionCard img={emVsUrg} titulo="titulo 1" subtitulo="subtitulo" />
      </div>
    </div>
  );
}
