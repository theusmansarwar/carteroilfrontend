"use client";
import React, { useState } from "react";
import "./Faqs.css";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { baseUrl } from "@/config/Config";

const Faqs = ({ data }) => {
  const [openIndex, setOpenIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Normalize API data (support "items" or "questions")
  const questions = data?.questions || data?.items || [];

  // Only show 6 unless "Read More" clicked
  const visibleQuestions = showAll ? questions : questions.slice(0, 5);

  if (!data) return null;

  return (
    <div className="faq-section">
      <h2 className="faq-heading">
        {data?.title?.split(" ").slice(0, -1).join(" ")}{" "}
        <span className="highlight-last">
          {data?.title?.split(" ").slice(-1)}
        </span>
      </h2>

      <p className="faq-description">{data?.description}</p>
      <div className="faq-container">
        <div className="faq-left">
          <img
            src={data?.image ? baseUrl + data.image : "/faqs.webp"}
            alt="FAQs"
          />
        </div>
        <div className="faq-right">
          {visibleQuestions.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? "active" : ""}`}
            >
              <div className="faq-question" onClick={() => toggle(index)}>
                <span>{item.question}</span>
                <span>
                  {openIndex === index ? <FaAngleUp /> : <FaAngleDown />}
                </span>
              </div>
              {openIndex === index && (
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}

          {/* Read More button */}
          {questions.length > 5 && (
            <div className="read-more-container">
              <button
                className="read-more-btn"
                onClick={() => setShowAll(!showAll)}
              >
                {showAll ? "Show Less" : "Read More"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
