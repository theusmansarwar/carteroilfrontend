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
        CarterOil delivers products that meet the trusted standards of the
        American Petroleum Institute (API). Each formula is tested for strength,
        safety, and long-lasting performance. Businesses across the Americas and
        beyond rely on our certified lubricants and <a href="https://carteroilusa.com/products/oilfield-lubricants">oilfield solutions</a>. The API
        approval reflects our promise of quality, innovation, and strong
        partnerships built to last.
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
