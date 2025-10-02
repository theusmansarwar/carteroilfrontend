"use client";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import "./Button.css";

export default function Button({ 
  variant = "filled", 
  color = "black", 
  children, 
  onClick 
}) {
  return (
    <button 
      className={`${variant}-btn ${color}-text`} 
      onClick={onClick}
    >
      {children}
      {variant === "filled" && <FaArrowRight />}
    </button>
  );
}
