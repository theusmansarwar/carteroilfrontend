"use client";
import React from "react";
import "./CoreValues.css";
import { useRouter } from "next/navigation";
import CountUp from "../CountUp/CountUp";
const CoreValues = ({ data }) => {
  const router = useRouter();
  return (
    <div className="core-values">
      <h2>Our Core Values</h2>

      <p className="description">
        Carteroil has a legacy that began in 1893. From the start, the goal was
        clear. It is to deliver products that perform and services that support
        long-term success. The company focuses on quality because reliable
        solutions keep your business moving. Over the years, strong values
        shaped every decision. Carteroil grew from making premium lubricants to
        offering trusted <a href="https://carteroilusa.com/oil-and-gas-services">oilfield services</a>. You can depend on the company to
        join tradition and modern expertise in a way that protects equipment,
        reduces downtime, and builds lasting partnerships across the world.
      </p>
      <p className="description">
        Carteroil stands firm on principles that guide daily work. Quality sets
        the standard for every lubricant and service. Innovation drives the use
        of new technology that improves efficiency and safety. Integrity creates
        trust and makes every partnership honest and clear. Safety protects
        people, machines, and the environment in all operations. Global reach
        helps the company support many industries across continents with the
        same care and dedication. These values form the base that makes
        Carteroil a trusted name in energy and lubrication solutions.
      </p>

      <button
        className="core-values-btn"
        onClick={() => {
          router.push("/about-us");
        }}
      >
        Learn More
      </button>

      <div className="stats-footer">
        <div className="each-stat">
          <strong>
            <CountUp end={125} />+
          </strong>
          <p>
           Carteroil has served industries since 1893 with proven solutions and unmatched experience.
          </p>
        </div>
        <div className="each-stat">
          <strong>
            <CountUp end={10} />+
          </strong>
          <p>
            From automotive to marine, oilfield to industrial, our products power diverse sectors worldwide.
          </p>
        </div>
        <div className="each-stat">
          <strong>
            <CountUp end={100} />%
          </strong>
          <p>
          Every lubricant meets strict API standards to ensure quality, performance, and safety.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
