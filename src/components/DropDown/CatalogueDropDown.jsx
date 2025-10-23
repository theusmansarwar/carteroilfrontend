import React from "react";
import "./CatalogueDropDown.css";
import { FiDownload } from "react-icons/fi";

const CatalogueDropDown = ({ data }) => {
  return (
    <div className="cat-drop-down">
      <div className="drop-menu">
        {data?.map((item, index) => (
          <a
            href={item.slug}
            download
            key={index}
            className="drop-menu-item"
            style={{ cursor: "pointer" }}
          >
            {item.title}
            <span>
              <FiDownload />
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default CatalogueDropDown;
