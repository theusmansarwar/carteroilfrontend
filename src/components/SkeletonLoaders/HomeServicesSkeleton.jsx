"use client";
import React from "react";
import "./HomeServicesSkeleton.css";

const HomeServicesSkeleton = () => {
  const skeletonArray = Array.from({ length: 6 });

  return (
    <div className="ps-skeleton products-services">
      <div className="bg-half"></div>
      <h2>
        Carter Oil <span>Products & Services</span>
      </h2>
      <p>
        Carteroil delivers trusted oilfield services built on decades of
        expertise...
      </p>

      <div className="products-container">
        {skeletonArray.map((_, idx) => (
          <div className="each-product" key={idx}>
            <div className="icon-container skeleton-box"></div>
            <div className="skeleton-text short"></div>
            <div className="skeleton-text long"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeServicesSkeleton;
