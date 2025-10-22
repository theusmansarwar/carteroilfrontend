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
    imageSrc: "/18-wheeler-guide.webp",
  },
  {
    id: "2",
    title: "Agriculture Equipment Lubrication Guide",
    imageSrc: "/agri-equipment-guide.webp",
  },
  {
    id: "3",
    title: "Buses Lubrication Guide",
    imageSrc: "/buses-guide.webp",
  },
  {
    id: "4",
    title: "Construction Equipment Lubrication Guide",
    imageSrc: "/const-equipment-guide.webp",
  },
  {
    id: "5",
    title: "H-Duty Tow Trucks Lubrication Guide",
    imageSrc: "/h-duty-guide.webp",
  },
  {
    id: "6",
    title: "Light Duty Diesel Trucks Lubrication Guide",
    imageSrc: "/l-duty-guide.webp",
  },
  {
    id: "7",
    title: "Passenger Cars Lubrication Guide",
    imageSrc: "/cars-guide.webp",
  },
  {
    id: "8",
    title: "School Buses Lubrication Guide",
    imageSrc: "/school-buses-guide.webp",
  },
  {
    id: "9",
    title: "Waste Truck Lubrication Guide",
    imageSrc: "/waste-truck-guide.webp",
  },
  {
    id: "10",
    title: "Wheel Loaders Lubrication Guide",
    imageSrc: "/wheel-loader-guide.webp",
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
