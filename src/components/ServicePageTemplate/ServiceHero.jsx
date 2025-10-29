import React from "react";
import "./ServiceHero.css";
import { baseUrl } from "@/config/Config";

const ServiceHero = ({ data }) => {
  const { title, description, bgImage } = data;
  const words = title.split(" ");

  return (
    <div
      className="service-hero"
      style={{
        backgroundImage: `url(${baseUrl + bgImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="overlay">
        <h1>
          <span>{words[0]}</span> {words.slice(1).join(" ")}
        </h1>
        <div className="dangerously-set-data" dangerouslySetInnerHTML={{ __html: description || "" }} />
      </div>
    </div>
  );
};

export default ServiceHero;
