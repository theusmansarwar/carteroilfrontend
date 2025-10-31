"use client";
import React, { useState } from "react";
import "./ProductsSection.css";
import ProductPoppup from "../Popups/ProductPoppup";
import { baseUrl } from "@/config/Config";

const ProductsSection = ({ title, data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const handleOpen = (project) => {
    setSelectedProduct(project);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setSelectedProduct(null);
  };

   const resolveImage = (path) =>
      path?.startsWith("/uploads") ? baseUrl + path : path;

  return (
    <div className="products-section">
      <div className="inside">
         <p className="dangerously-set-data" dangerouslySetInnerHTML={{ __html: data.description || "" }} />
        <h2>{title}</h2>
        <div className="products-container">
          {data.items.map((item) => (
            <div
              key={item._id}
              className="product"
              onClick={() => handleOpen(item)}
            >
              <h3>
              {item.title}
              </h3>
              <img src={resolveImage(item.image)} alt={item.name} />
            </div>
          ))}
        </div>
      </div>
      {isOpen && (
        <ProductPoppup product={selectedProduct} onClose={handleClose} />
      )}
    </div>
  );
};

export default ProductsSection;
