"use client";
import React from "react";
import "./LubeGuidePdf.css";
import { FiDownload } from "react-icons/fi";
import { baseUrl } from "@/config/Config";
const LubeGuidePdf = () => {
  const handleDownload = async (fileUrl, fileName) => {
    const response = await fetch(fileUrl, { mode: "cors" });
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="lubeguide-pdf">
      <a
        href={baseUrl + "/uploads/1761029857564-476890475.pptx"}
        download="Vehicals Lube Guide"
        className="first"
      >
        <h2>DOWNLOAD VEHICALS LUBE GUIDE PDF</h2>
        <FiDownload />
      </a>
      <button
        onClick={() =>
          handleDownload(
            baseUrl + "/uploads/1761029688774-559575918.pdf",
            "Industrial Lube Guide.pdf"
          )
        }
        className="second"
      >
        <h2>DOWNLOAD INDUSTRIAL LUBE GUIDE PDF</h2>
        <FiDownload />
      </button>
    </div>
  );
};

export default LubeGuidePdf;
