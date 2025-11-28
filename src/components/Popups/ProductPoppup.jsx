"use client";
import React from "react";
import "./ProductPoppup.css";
import Button from "../Buttons/Button";
import { useRouter } from "next/navigation";
import { IoCloseCircleSharp } from "react-icons/io5";
import { baseUrl } from "@/config/Config";
const ProductPoppup = ({ onClose, product }) => {
  const router = useRouter();

  const resolveImage = (path) =>
    path?.startsWith("/uploads") ? baseUrl + path : path;

  return (
    <div className="product-popup">
      <div className="popup-card">
        <IoCloseCircleSharp className="close-icon" onClick={onClose} />
        <div className="left">
          <h3>
            {product.title}
          </h3>
          <img src={resolveImage(product.image)} alt="" />
        </div>
        <div className="right">
          <h2>{product.title}</h2>
          <div
            className="popup-description"
            dangerouslySetInnerHTML={{ __html: product?.description || "" }}
          />
          <Button
            variant="filled"
            color="white"
            onClick={() => {
              router.push("/contact-us");
            }}
          >
            Order Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductPoppup;
