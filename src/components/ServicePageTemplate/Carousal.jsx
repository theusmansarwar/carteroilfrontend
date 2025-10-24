"use client";
import React, { useState } from "react";
import "./Carousal.css";
import {
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa6";

const sliderData = [
  {
    id: 1,
    image:"/about-us.webp"
  },
  {
    id: 2,
    image:"/about-us.webp"
  },
  {
    id: 3,
   image:"/about-us.webp"
  },
];

const Carousal = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? sliderData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === sliderData.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="carousal">
      <h2>Lorem ipsum dolor sit amet</h2>
      <div className="slider-container">
        {/* Left Sidebar (desktop only) */}
        <div className="sidebar desktop-only">
          <button className="arrow" onClick={prevSlide}>
            <FaChevronLeft />
          </button>
        </div>

        {/* Slides */}
        <div className="slider-center">
          <div
            className="slider-wrapper"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {sliderData.map((item) => (
              <div key={item.id} className="slide">
                <div className="slide-content">
                  <img src={item.image} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Sidebar (desktop only) */}
        <div className="sidebar desktop-only">
          <button className="arrow" onClick={nextSlide}>
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* Bottom arrows (mobile only) */}
      <div className="mobile-arrows">
        <button className="arrow" onClick={prevSlide}>
          <FaChevronLeft />
        </button>
        <button className="arrow" onClick={nextSlide}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Carousal;
