"use client";
import React, { useState } from "react";
import "./Carousal.css";
import {
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
  FaCircleArrowRight,
} from "react-icons/fa6";

const sliderData = [
  {
    id: 1,
    subtitle: "Lorem Ipsum",
    title: "Lorem Ipsum Has been",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown make a type specimen book.",
    button: "Lorem Ipsum",
  },
  {
    id: 2,
    subtitle: "Dolor Sit",
    title: "Dolor Sit Amet",
    description:
      "This is another slide description with different text to show the sliding effect.",
    button: "Learn More",
  },
  {
    id: 3,
    subtitle: "Carter Oil",
    title: "Choose Carter Oil",
    description:
      "Why Choose Carter Oil Automotive Lubricants? Because quality matters for your car.",
    button: "Explore",
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
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore fugiat
        quisquam nulla cum quas dolor vel architecto molestias ipsum eius.
      </p>
      <h2>Why Choose Carter Oil Automotive Lubricants?</h2>
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
                  <h4>{item.subtitle}</h4>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <button>
                    {item.button}{" "}
                    <span>
                      <FaArrowRight />
                    </span>
                  </button>
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
