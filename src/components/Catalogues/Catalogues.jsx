'use client';
import React, { useState } from "react";
import "./Catalogues.css";
import { FiDownload, FiCopy } from "react-icons/fi";
import { FaShareAlt, FaWhatsapp, FaInstagram, FaCheckCircle } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Modal } from "@mui/material";

const Catalogues = () => {
  const [open, setOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [copied, setCopied] = useState(false);

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

  const handleOpenShare = (file) => {
    setSelectedFile(window.location.origin + file);
    setOpen(true);
    setCopied(false); // reset copy state when opening modal
  };

  const handleCopyLink = async () => {
    await navigator.clipboard.writeText(selectedFile);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // revert after 2 seconds
  };

  const shareToWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(selectedFile)}`, "_blank");
  };

  const shareToEmail = () => {
    window.location.href = `mailto:?subject=Check this catalogue&body=${encodeURIComponent(
      selectedFile
    )}`;
  };

  const shareToInstagram = () => {
    alert("Instagram doesn’t support direct web sharing — copy the link instead!");
  };

  return (
    <div className="catalogues">
      {cataloguesData.map((item) => (
        <div key={item.id} className="catalogue-card">
          <div className="img-cont">
            <img src={item.image} alt={item.title} />
            <div
              className="shareicon"
              onClick={() => handleOpenShare(item.file)}
              style={{ cursor: "pointer" }}
            >
              <FaShareAlt />
            </div>
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

      {/* ===== Share Modal ===== */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="share-modal">
          <h3>Share this Catalogue</h3>

          <div className="share-options">
            <div className="share-btn" onClick={handleCopyLink}>
              {copied ? (
                <>
                  <FaCheckCircle style={{ color: "#28a745" }} />
                  <span style={{ color: "#28a745" }}>Copied!</span>
                </>
              ) : (
                <>
                  <FiCopy />
                  <span>Copy Link</span>
                </>
              )}
            </div>

            <div className="share-btn" onClick={shareToWhatsApp}>
              <FaWhatsapp style={{ color: "#25D366" }} />
              <span>WhatsApp</span>
            </div>

            <div className="share-btn" onClick={shareToEmail}>
              <HiOutlineMail style={{ color: "#d93025" }} />
              <span>Email</span>
            </div>

            <div className="share-btn" onClick={shareToInstagram}>
              <FaInstagram style={{ color: "#E4405F" }} />
              <span>Instagram</span>
            </div>
          </div>

          <p className="share-link">{selectedFile}</p>

          <button className="close-btn" onClick={() => setOpen(false)} >
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Catalogues;
