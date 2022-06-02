import React from "react";
const slide1 = require("../img/slide-1.jpg");
const slide2 = require("../img/slide-2.jpg");
const slide3 = require("../img/slide-3.jpg");

export default function Carousel() {
  return (
    <div className="Carousel">
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active brg-50">
            <img
              src={slide1}
              className="d-block w-100 carouselImg"
              alt="slide1"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>1First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className="carousel-item brg-50">
            <img
              src={slide2}
              className="d-block w-100 carouselImg"
              alt="slide2"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>2First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className="carousel-item brg-50">
            <img
              src={slide3}
              className="d-block w-100 carouselImg"
              alt="slide3"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>3First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
