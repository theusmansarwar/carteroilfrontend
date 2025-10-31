"use client";
import React from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaVimeoV, FaYoutube } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();

  //  Object arrays for each section
  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "Home", path: "/" },
        { name: "Contact Us", path: "/contact-us" },
        { name: "About Us", path: "/about-us" },
        { name: "History", path: "/history" },
      ],
    },
    {
      title: "Quick Links",
      links: [
        { name: "Products & Services", path: "/products" },
        { name: "Lube Guide", path: "/lube-guide" },
        { name: "Become A Supplier", path: "/become-a-supplier" },
        { name: "Catalogues", path: "/catalogues" },
      ],
    },
    {
      title: "Equipments & Services",
      links: [
        { name: "Equipment", path: "/equipment" },
        { name: "Pipes & Tubing", path: "/pipes-and-tubing" },
        { name: "Oil & Gas Services", path: "/oil-and-gas-services" },
      ],
    },
    {
      title: "Lubricants",
      links: [
        {
          name: "Automotive Lubricants",
          path: "/products/automotive-lubricants",
        },
        {
          name: "Industrial Lubricants",
          path: "/products/industrial-lubricants",
        },
        { name: "Marine Lubricants", path: "/products/marine-lubricants" },
        { name: "Oilfield Lubricants", path: "/products/oilfield-lubricants" },
        {
          name: "Speciality Lubricants",
          path: "/products/speciality-lubricants",
        },
      ],
    },
  ];

  const bottomLinks = [
    { name: "Terms & Conditions", path: "/terms-and-conditions" },
    { name: "Privacy Policy", path: "/privacy-policy" },
  ];

  // const socials = [FaFacebookF, FaTwitter, FaVimeoV, FaYoutube];

  return (
    <footer className="footer">
      <div className="black-area"></div>
      {/* Footer Content */}
      <div className="footer-main">
        <div className="footer-logo-area">
          <img src="/carteroil-w.svg" alt="Carter Oil" />
          <p>
            Carter Oil USA delivers premium lubricants and equipment solutions,
            ensuring performance, reliability, and smooth operations worldwide.
          </p>
        </div>

        {/*  Footer Links */}
        <div className="footer-links">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4>{section.title}</h4>
              <ul>
                {section.links.map((link) => (
                  <li key={link.path} onClick={() => router.push(link.path)}>
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <p>© 2025 All Rights Reserved</p> <span></span> <p>Developed By <a className="ze-link" href="https://zemalt.com/" target="_blank"
            rel="noopener noreferrer">Zemalt</a></p>
        </div>

        <div className="footer-bottom-right">
          <ul>
            {bottomLinks.map((link) => (
              <li key={link.path} onClick={() => router.push(link.path)}>
                {link.name}
              </li>
            ))}
          </ul>
          {/* <div className="footer-socials">
            {socials.map((Icon, index) => (
              <Icon key={index} />
            ))}
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
