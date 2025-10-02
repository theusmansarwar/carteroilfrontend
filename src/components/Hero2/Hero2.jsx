import React from "react";
import "./Hero2.css";

const Hero2 = ({ data }) => {
  const { title, description, backgroundImage } = data;

  return (
    <div
      className="hero2"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="overlay">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Hero2;
