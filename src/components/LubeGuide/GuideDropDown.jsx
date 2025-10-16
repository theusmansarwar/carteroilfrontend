"use client";

import React, { useState, useId } from "react";
import { FaChevronDown } from "react-icons/fa";
import "./GuideDropDown.css";
import { FaArrowRight } from "react-icons/fa6";
import { useRouter } from "next/navigation";

const GuideItems = [
  {
    id: "1",
    title: "18 Wheeler Trucks Lubrication Guide",
    imageSrc: "/lube-guide2.png",
  },
  {
    id: "2",
    title: "Agriculture Equipment Lubrication Guide",
    imageSrc: "/lube-guide2.png",
  },
  {
    id: "3",
    title: "Buses Lubrication Guide",
    imageSrc: "/lube-guide2.png",
  },
  {
    id: "4",
    title: "Construction Equipment Lubrication Guide",
    imageSrc: "/lube-guide2.png",
  },
  {
    id: "5",
    title: "H-Duty Tow Trucks Lubrication Guide",
    imageSrc: "/lube-guide2.png",
  },
  {
    id: "6",
    title: "Light Duty Diesel Trucks Lubrication Guide",
    imageSrc: "/lube-guide2.png",
  },
  {
    id: "7",
    title: "Passenger Cars Lubrication Guide",
    imageSrc: "/lube-guide2.png",
  },
  {
    id: "8",
    title: "School Buses Lubrication Guide",
    imageSrc: "/lube-guide2.png",
  },
  {
    id: "9",
    title: "Waste Truck Lubrication Guide",
    imageSrc: "/lube-guide2.png",
  },
  {
    id: "10",
    title: "Wheel Loaders Lubrication Guide",
    imageSrc: "/lube-guide2.png",
  },
];

export default function GuideDropDown() {
  const router = useRouter();
  const [openIndex, setOpenIndex] = useState(0);
  const groupId = useId();

  const onToggle = (index) => {
    setOpenIndex((curr) => (curr === index ? -1 : index));
  };

  return (
    <section className="dropdown-wrapper">
      {GuideItems.map((item, index) => {
        const open = index === openIndex;
        const panelId = `${groupId}-panel-${index}`;
        const buttonId = `${groupId}-button-${index}`;

        return (
          <article key={item.id} className="dropdown-card">
            <header className="dropdown-header" onClick={() => onToggle(index)}>
              <h2 className="dropdown-title">{item.title}</h2>
              <FaChevronDown
                className={`dropdown-chevron ${open ? "open" : ""}`}
              />
            </header>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`dropdown-panel ${open ? "open" : ""}`}
            >
              <div className="dropdown-content">
                {/* <h3 className="dropdown-subtitle">{item.subtitle}</h3>
                <p className="dropdown-detail">{item.detail}</p> */}

                <div className="dropdown-media">
                  <img
                    className="dropdown-image"
                    src={item.imageSrc || "/placeholder.svg"}
                    alt="Product illustration"
                    loading="lazy"
                  />
                </div>
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
            </div>
          </article>
        );
      })}
    </section>
  );
}
