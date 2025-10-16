"use client";
import React from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaVimeoV, FaYoutube } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();

  // 🔹 Object arrays for each section
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
        { name: "Products & Services", path: "/products-and-services" },
        { name: "Lube Guide", path: "/lube-guide" },
        { name: "Suppliers", path: "/suppliers" },
      ],
    },
    {
      title: "Lubricants",
      links: [
        { name: "Automotive Lubricants", path: "/automotive-lubricants" },
        { name: "Industrial Lubricants", path: "/industrial-lubricants" },
        { name: "Marine Lubricants", path: "/marine-lubricants" },
        { name: "Oilfield Lubricants", path: "/oilfield-lubricants" },
        { name: "Equipments", path: "/equipments" },
        { name: "Speciality Lubricants", path: "/speciality-lubricants" },
      ],
    },
  ];

  const bottomLinks = [
    { name: "Terms of Service", path: "/terms-and-conditions" },
    { name: "Privacy Policy", path: "/privacy-policy" },
  ];

  const socials = [FaFacebookF, FaTwitter, FaVimeoV, FaYoutube];

  return (
    <footer className="footer">
      <div className="black-area"></div>

      {/* Newsletter Section */}
      <div className="newsletter">
        <div className="left">
          <h3>Subscribe Newsletters</h3>
          <p>
            Subscribe to our newsletter and unlock a world of exclusive benefits.
            Be the first to know about our latest products, special promotions,
            and exciting updates.
          </p>
        </div>
        <div className="newsletter-form">
          <input type="email" placeholder="Enter Your Email" />
          <button>SUBSCRIBE NOW</button>
        </div>
      </div>

      {/* Footer Content */}
      <div className="footer-main">
        <div className="footer-logo-area">
          <img src="/carter-oil-logo.svg" alt="Carter Oil" />
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
        <p>© 2025 All rights reserved</p>
        <div className="footer-bottom-right">
          <ul>
            {bottomLinks.map((link) => (
              <li key={link.path} onClick={() => router.push(link.path)}>
                {link.name}
              </li>
            ))}
          </ul>
          <div className="footer-socials">
            {socials.map((Icon, index) => (
              <Icon key={index} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
