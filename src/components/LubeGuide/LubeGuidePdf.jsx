"use client";
import React from "react";
import "./LubeGuidePdf.css";
import { FiDownload } from "react-icons/fi";
import { baseUrl } from "@/config/Config";

const LubeGuidePdf = () => {
  const handleDownload = async (e, fileUrl, fileName) => {
    e.preventDefault(); // prevent default link navigation
    try {
      const response = await fetch(fileUrl, { mode: "cors" });
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = fileName;
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  return (
    <div className="lubeguide-pdf">
      {/* Vehicles PDF */}
      <a
        href={baseUrl + "/uploads/1761029857564-476890475.pptx"}
        onClick={(e) =>
          handleDownload(
            e,
            baseUrl + "/uploads/1761029857564-476890475.pptx",
            "Vehicles Lube Guide.pptx"
          )
        }
        className="pdf-link first"
      >
        <h2>DOWNLOAD VEHICLES LUBE GUIDE PDF</h2>
        <FiDownload />
      </a>

      {/* Industrial PDF */}
      <a
        href={baseUrl + "/uploads/1761029688774-559575918.pdf"}
        onClick={(e) =>
          handleDownload(
            e,
            baseUrl + "/uploads/1761029688774-559575918.pdf",
            "Industrial Lube Guide.pdf"
          )
        }
        className="pdf-link second"
      >
        <h2>DOWNLOAD INDUSTRIAL LUBE GUIDE PDF</h2>
        <FiDownload />
      </a>
    </div>
  );
};

export default LubeGuidePdf;
