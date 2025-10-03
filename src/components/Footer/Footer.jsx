"use client";
import React from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaVimeoV, FaYoutube } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();
  return (
    <footer className="footer">
      <div className="black-area"></div>
      {/* Newsletter Section */}
      <div className="newsletter">
        <div className="left">
          {" "}
          <h3>Subscribe Newsletters</h3>
          <p>
            Subscribe to our newsletter and unlock a world of exclusive
            benefits. Be the first to know about our latest products, special
            promotions, and exciting updates.
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
            Subscribe to our newsletter and unlock a world of exclusive
            benefits.
          </p>
        </div>

        <div className="footer-links">
          <div>
            <h4>Company</h4>
            <ul>
              <li
                onClick={() => {
                  router.push("/");
                }}
              >
                Home
              </li>
              <li
                onClick={() => {
                  router.push("/contact-us");
                }}
              >
                Contact Us
              </li>
              <li
                onClick={() => {
                  router.push("/about-us");
                }}
              >
                About Us
              </li>
              <li
                onClick={() => {
                  router.push("/industries");
                }}
              >
                Industries
              </li>
            </ul>
          </div>

          <div>
            <h4>Quick Links</h4>
            <ul>
              <li
                onClick={() => {
                  router.push("/products-and-services");
                }}
              >
                Products & Services
              </li>
              <li
                onClick={() => {
                  router.push("/lube-guide");
                }}
              >
                Lube Guide
              </li>
              <li
                onClick={() => {
                  router.push("/history");
                }}
              >
                History
              </li>
              <li
                onClick={() => {
                  router.push("/suppliers");
                }}
              >
                Suppliers
              </li>
            </ul>
          </div>

          <div>
            <h4>Lubricants</h4>
            <ul>
              <li
                onClick={() => {
                  router.push("/automotive-lubricants");
                }}
              >
                Automotive Lubricants
              </li>
              <li
                onClick={() => {
                  router.push("/industrial-lubricants");
                }}
              >
                Industrial Lubricants
              </li>
              <li
                onClick={() => {
                  router.push("/marine-lubricants");
                }}
              >
                Marine Lubricants
              </li>
              <li
                onClick={() => {
                  router.push("/oilfield-lubricants");
                }}
              >
                Oilfield Lubricants
              </li>
              <li
                onClick={() => {
                  router.push("/equipments");
                }}
              >
                Equipments
              </li>
              <li
                onClick={() => {
                  router.push("/speciality-lubricants");
                }}
              >
                Speciality Lubricants
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© 2025 All rights reserved</p>
        <div className="footer-bottom-right">
          <ul>
            <li
              onClick={() => {
                router.push("/terms-and-conditions");
              }}
            >
              {" "}
              Terms of Service
            </li>
            <li
              onClick={() => {
                router.push("/privacy-policy");
              }}
            >
              {" "}
              Privacy Policy{" "}
            </li>
          </ul>
          <div className="footer-socials">
            <FaFacebookF />
            <FaTwitter />
            <FaVimeoV />
            <FaYoutube />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
