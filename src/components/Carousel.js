import React from "react";
const slide1 = require("../img/slide-1.jpg");
const slide2 = require("../img/slide-2.jpg");
const slide3 = require("../img/slide-3.jpg");

export default function Carousel() {
  return (
    <div className="Carousel">
      <div
        id="carouselExampleSlidesOnly"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={slide1} class="d-block w-100" alt="slide1" />
          </div>
          <div class="carousel-item">
            <img src={slide2} class="d-block w-100" alt="slide2" />
          </div>
          <div class="carousel-item">
            <img src={slide3} class="d-block w-100" alt="slide3" />
          </div>
        </div>
      </div>
    </div>
  );
}
