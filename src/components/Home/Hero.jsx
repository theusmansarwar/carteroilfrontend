"use client";
import React, { useState, useEffect } from "react";
import "./Hero.css";
import Button from "../Buttons/Button";
import { useRouter } from "next/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

// Hero Data
const heroData = [
  {
    id: 1,
    image: "/service-hero.jpg",
    title1: "Industry-Wide",
    title2: "Lubrication Solutions",
    desc: "Premium lubricants and oilfield services trusted worldwide since 1893.",
    btn1: { text: "Explore Lubricants", link: "/contact-us" },
    btn2: { text: "Request a Quote", link: "/contact-us" },
  },
  {
    id: 2,
    image: "/service-hero.jpg",
    title1: "Reliable",
    title2: "Oilfield Services",
    desc: "Delivering excellence and reliability across global industries.",
    btn1: { text: "Our Services", link: "/services" },
    btn2: { text: "Contact Sales", link: "/contact-us" },
  },
  {
    id: 3,
    image: "/service-hero.jpg",
    title1: "Sustainable",
    title2: "Energy Solutions",
    desc: "Driving innovation in energy with eco-friendly lubricants.",
    btn1: { text: "Learn More", link: "/about" },
    btn2: { text: "Get a Quote", link: "/contact-us" },
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? heroData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % heroData.length);
  };

  return (
    <div className="hero">
      {/* Slides wrapper */}
      <div
        className="hero-slides"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {heroData.map((slide) => (
          <div
            key={slide.id}
            className="hero-slide"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="hero-content">
              <h1>
                <span>{slide.title1}</span>
                <span>{slide.title2}</span>
              </h1>
              <p>{slide.desc}</p>
              <div className="buttons-container">
                <Button
                  variant="filled"
                  color="white"
                  onClick={() => router.push(slide.btn1.link)}
                >
                  {slide.btn1.text}
                </Button>
                <Button
                  variant="outline"
                  color="black"
                  onClick={() => router.push(slide.btn2.link)}
                >
                  {slide.btn2.text}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <div className="hero-arrow left" onClick={prevSlide}>
        <FaChevronLeft />
      </div>
      <div className="hero-arrow right" onClick={nextSlide}>
        <FaChevronRight />
      </div>

      {/* Dots */}
      <div className="hero-dots">
        {heroData.map((_, index) => (
          <span
            key={index}
            className={`dot ${current === index ? "active" : ""}`}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Hero;
