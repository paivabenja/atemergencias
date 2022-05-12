import React from "react";
const slide1 = require("../img/slide-1.jpg");
const slide2 = require("../img/slide-2.jpg");
const slide3 = require("../img/slide-3.jpg");

export default function Carousel() {
  return (
    <div className="Carousel-container">
      <div className="Carousel">
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src={slide1} alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={slide2} alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={slide3} alt="Third slide" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
