"use client";
import React, { useState } from "react";
import "./Carousal.css";
import {
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa6";


const Carousal = ({ data }) => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="carousal">
      <h2>Gallery</h2>
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
            {data.map((item) => (
              <div
                key={item.id}
                className="slide"
                style={{
                  backgroundImage: `url(${item.image})`,
                }}
              >
                <div className="slide-overlay" />
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
