"use client";
import React from "react";
import "./ReliableSolutions.css";
import Button from "../Buttons/Button";
import { useRouter } from "next/navigation";
import Button2 from "../Buttons/Button2";
const ReliableSolutions = () => {
  const router = useRouter();
  return (
    <div className="reliable-solutions">
      <div className="sol-bg"></div>
      <div className="content-container">
        <h2>
          Reliable <span>Solutions</span>, Ready for You
        </h2>
        <p>
          Looking for reliable <a href="https://carteroilusa.com/products">lubrication solutions</a> backed by more than a century of expertise? Carter Oil’s specialists are ready to provide tailored recommendations to keep your <a href="https://carteroilusa.com/products/equipment">equipment</a> running at peak performance. Contact our experts today to discover the right products and services for your industry.
        </p>
        <div className="buttons-container">
          <Button
            variant="filled"
            color="white"
            onClick={() => {
              router.push("/products");
            }}
          >
            Explore Lubricants
          </Button>
          <Button
            variant="outline"
            color="black"
            onClick={() => {
              router.push("/contact-us");
            }}
          >
            Request a Quote
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ReliableSolutions;
