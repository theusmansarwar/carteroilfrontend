import React from "react";
import "./Catalogues.css";
import { FiDownload } from "react-icons/fi";

const Catalogues = () => {
  const cataloguesData = [
    {
      id: 1,
      title: "Automotive Lubricants Catalogue",
      image: "/carter-oil-logo.svg",
      file: "/Automotive lubrication Catalogue.pdf",
    },
    {
      id: 2,
      title: "Industrial Lubricants Catalogue",
      image: "/carter-oil-logo.svg",
      file: "/Industrial lubrication Catalogue.pdf",
    },
    {
      id: 3,
      title: "Marine Lubricants Catalogue",
      image: "/carter-oil-logo.svg",
      file: "/",
    },
    {
      id: 4,
      title: "Oilfield Lubricants Catalogue",
      image: "/carter-oil-logo.svg",
      file: "/",
    },
    {
      id: 5,
      title: "Speciality Lubricants Catalogue",
      image: "/carter-oil-logo.svg",
      file: "/",
    },
    {
      id: 6,
      title: "Equipments Catalogue",
      image: "/carter-oil-logo.svg",
      file: "/",
    },
    {
      id: 7,
      title: "Pipes & Tubing Catalogue",
      image: "/carter-oil-logo.svg",
      file: "/",
    },
    {
      id: 8,
      title: "Oilfield & Gas Services Catalogue",
      image: "/carter-oil-logo.svg",
      file: "/",
    },
  ];

  return (
    <div className="catalogues">
      {cataloguesData.map((item) => (
        <div key={item.id} className="catalogue-card">
          <div className="img-cont">
            <img src={item.image} alt={item.title} />
          </div>
          <div className="download-container">
            <div className="title-cont">
              <h2>{item.title}</h2>
            </div>
            <div className="icon">
              <a href={item.file} download>
                <FiDownload />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Catalogues;
