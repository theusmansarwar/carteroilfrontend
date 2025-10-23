import React from "react";
import "./CertifiedProducts.css";
const CertifiedProducts = () => {
  return (
    <div className="certfied-products">
      <div className="api-bg-img"></div>
      <h2>
        CERTIFIED <span>PRODUCTS</span>
      </h2>
      <p className="description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
        voluptates possimus, nesciunt sequi corrupti necessitatibus recusandae
        in officia et doloremque.
      </p>
      <img
        className="api-img"
        src="/api-logo.png"
        alt="American Petroleum Institute"
      />
    </div>
  );
};

export default CertifiedProducts;
