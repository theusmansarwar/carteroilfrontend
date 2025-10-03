"use client";
import React from "react";
import "./BuildingQuality.css";
import {
  TiStarFullOutline,
  TiStarHalfOutline,
  TiStarOutline,
} from "react-icons/ti";
import { FaArrowRight } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { baseUrl } from "@/config/Config";

const BuildingQuality = ({ data }) => {
  const router = useRouter();
  return (
    <div className="building-quality">
      <div className="buildings-bg"></div>
      <div className="left">
        <div className="top">
          <div className="first">
            <img src={baseUrl + data.image1} alt="Image" />
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
          <img src={baseUrl + data.image2} alt="Image" />
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
          <div className="right">
            <strong>{data.rating}</strong>
            <div className="stars">
              {Array.from({ length: 5 }, (_, i) => {
                const rating = data.rating;
                if (rating >= i + 1) {
                  // full star
                  return <TiStarFullOutline key={i} />;
                } else if (rating >= i + 0.5) {
                  // half star
                  return <TiStarHalfOutline key={i} />;
                } else {
                  // empty star
                  return <TiStarOutline key={i} />;
                }
              })}
            </div>
            <p>{data.noOfRatings}K Genuine Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildingQuality;
