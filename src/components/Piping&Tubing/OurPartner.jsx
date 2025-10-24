import React from "react";
import "./OurPartner.css";

const OurPartner = ({ data }) => {
  return (
    <div className="our-partner">
      {data.map((partner, index) => (
        <div key={index}>
          <h2 className="title">
            <span>{partner.title}</span> {partner.subtitle}
          </h2>

          {partner.descriptions.map((text, i) => (
            <p key={i}>{text}</p>
          ))}

             {/* Only show image if available */}
          {partner.image && partner.image.trim() !== "" && (
            <img src={partner.image} alt={partner.subtitle} />
          )}
        </div>
      ))}
    </div>
  );
};

export default OurPartner;
