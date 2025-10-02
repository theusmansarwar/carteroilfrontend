import React from "react";
import "./OurValues.css";
const OurValues = () => {
  return (
    <div className="our-values">
      <h2>
        OUR <span>VALUES</span>
      </h2>
      <p>From our origins in 1893 to today’s global presence, these images showcase the innovation, expertise, and partnerships that define Carter Oil.</p>
      <img className="values-img" src="/our-values.svg" alt="Our Values" />
    </div>
  );
};

export default OurValues;
