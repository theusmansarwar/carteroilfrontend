import React from "react";
import "./Catalogues.css";
import { FiDownload } from "react-icons/fi";

const Catalogues = () => {
  const cataloguesData = [
    {
      id: 1,
      title: "Automotive Lubrication Catalogue",
      image: "/automotive-pdf.webp",
      file: "/Automotive-lubrication-Catalogue.pdf",
    },
    {
      id: 2,
      title: "Industrial Lubrication Catalogue",
      image: "/industrial-pdf.webp",
      file: "/Industrial-lubrication-Catalogue.pdf",
    },
    {
      id: 3,
      title: "Marine Lubrication Catalogue",
      image: "/marine-pdf.webp",
      file: "/Marine-lubrication-Catalogue.pdf",
    },

    {
      id: 4,
      title: "Oilfield Lubrication Catalogue",
      image: "/oilfield-pdf.webp",
      file: "/Oilfield-lubrication-Catalogue.pdf",
    },
    {
      id: 5,
      title: "Speciality Lubrication Catalogue",
      image: "/specialty-pdf.webp",
      file: "/Specialty-lubrication-Catalogue.pdf",
    },
    {
      id: 6,
      title: "Equipments Catalogue",
      image: "/equipments-pdf.webp",
      file: "/Equipments-Catalogue.pdf",
    },
    {
      id: 7,
      title: "Pipes & Tubing Catalogue",
      image: "/tubing-pdf.webp",
      file: "/Tubing-Piping-Fabrication-Catalogue.pdf",
    },
    {
      id: 8,
      title: "Oilfield & Gas Services Catalogue",
      image: "/oil-gas-pdf.webp",
      file: "/Oil-Gas-Services-Catalogue.pdf",
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
