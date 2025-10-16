import React from "react";
import "./LubeGuidePdf.css";
import { FiDownload } from "react-icons/fi";
const LubeGuidePdf = () => {
  return (
    <div className="lubeguide-pdf">
      <a href="#"  className="first">
        <h2>DOWNLOAD VEHICALS LUBE GUIDE PDF</h2>
        <FiDownload />
      </a>
     <a href="/Industrial Lubes.pdf" download="Industrial Lube Guide" className="second">
        <h2>DOWNLOAD INDUSTRIAL LUBE GUIDE PDF</h2>
        <FiDownload />
      </a>
    </div>
  );
};

export default LubeGuidePdf;
