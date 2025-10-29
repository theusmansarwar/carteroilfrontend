import React from "react";
import "./Benefits.css";
import { baseUrl } from "@/config/Config";
const Benefits = ({ data }) => {
  return (
    <div className="benefits">
      <div className="left">
        <img className="img1" src={baseUrl + data.image1} alt="Benefits" />
        <img className="img2" src={baseUrl + data.image2} alt="Benefits" />
      </div>
      <div className="right">
        <h2>
          Features / <span>Benefits</span>
        </h2>
        <div className="dangerously-set-data" dangerouslySetInnerHTML={{ __html: data.description || "" }} />
        <ul>
          {data.items.map((item, index) => (
            <li key={index}>
              <strong>{item.title}:</strong> <span className="dangerously-set-data" dangerouslySetInnerHTML={{ __html: item.description || "" }} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Benefits;
