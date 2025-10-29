import React from "react";
import "./Hero2.css";

const Hero2 = ({ data }) => {
  const { title, description, backgroundImage } = data;

  return (
    <div
      className="second-hero"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="overlay">
        <h1>{title}</h1>
         <p className="dangerously-set-data" dangerouslySetInnerHTML={{ __html: description || "" }} />
      </div>
    </div>
  );
};

export default Hero2;
