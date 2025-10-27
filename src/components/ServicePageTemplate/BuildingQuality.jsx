"use client";
import React from "react";
import "./BuildingQuality.css";
import { FaArrowRight } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { baseUrl } from "@/config/Config";

const BuildingQuality = ({ data }) => {
  const router = useRouter();
  const resolveImage = (path) =>
    path?.startsWith("/uploads") ? baseUrl + path : path;
  return (
    <div className="building-quality">
      <div className="buildings-bg"></div>
      <div className="left">
        <div className="top">
          <div className="first">
             <img src={resolveImage(data.image1)} alt="Image" />
          </div>
          <div className="second">
            {" "}
            <strong>{data.yearsOfExperience}+</strong>
            <p>
              <span>Years </span>
              <span>Of Experience</span>
            </p>
          </div>
        </div>
        <div className="bottom">
          <img src={resolveImage(data.image2)} alt="Image" />
        </div>
      </div>
      <div className="right">
        <h2>{data.title}</h2>
        <p>{data.description}</p>
        <div className="bottom">
          <div className="left">
            <ul>
              {data.items.map((item, index) => (
                <li key={index}>
                  <img src="/check-icon.svg" alt="Check Icon" /> {item}
                </li>
              ))}
            </ul>

            <button
              onClick={() => {
                router.push("/contact-us");
              }}
            >
              <span className="btn-text">Contact Us</span>
              <span className="btn-icon">
                <FaArrowRight />
              </span>
            </button>
          </div>
          <div className="bottom-right">
            <img src="/api-logo.png" alt="American Petroleum Institute" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildingQuality;
