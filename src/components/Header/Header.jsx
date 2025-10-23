"use client";
import React, { useState } from "react";
import "./Header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiDownload, FiPhoneCall } from "react-icons/fi";
import { FaAngleDown, FaTimes } from "react-icons/fa";
import { usePathname, useRouter } from "next/navigation";
import ProductsDropDown from "../DropDown/ProductsDropDown";
import { MdMailOutline } from "react-icons/md";
import CatalogueDropDown from "../DropDown/CatalogueDropDown";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Lubricants", path: "/products" },
  { name: "Equipments & Services", path: "" },
  { name: "Catalogues", path: "/catalogues" },
  { name: "History", path: "/history" },
  { name: "Contact Us", path: "/contact-us" },
];

const lubricants = [
  { name: "Automotive Lubricants", path: "/automotive-lubricants" },
  { name: "Industrial Lubricants", path: "/industrial-lubricants" },
  { name: "Marine Lubricants", path: "/marine-lubricants" },
  { name: "Oilfield Lubricants", path: "/oilfield-lubricants" },
  { name: "Speciality Lubricants", path: "/speciality-lubricants" },
];

const equipments = [
  { name: "Equipments", path: "/equipments" },
  { name: "Pipes & Tubing", path: "/pipes-and-tubing" },
  { name: "Oilfield & Gas Services", path: "/oilfield-and-gas" },
];

const catalouges = [
  {
    name: "Automotive lubrication",
    path: "/Automotive lubrication Catalogue.pdf",
  },
  {
    name: "Industrial lubrication",
    path: "/Industrial lubrication Catalogue.pdf",
  },
];

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [showLubricantsDropdown, setShowLubricantsDropdown] = useState(false);
  const [showEquipmentsDropdown, setShowEquipmentsDropdown] = useState(false);
  const [showCatalogueDropdown, setShowCatalogueDropdown] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  // Mobile state for expandable menus
  const [isLubricantsOpen, setIsLubricantsOpen] = useState(false);
  const [isEquipmentsOpen, setIsEquipmentsOpen] = useState(false);
  const [isCataloguesOpen, setIsCataloguesOpen] = useState(false);

  return (
    <>
      <div className="header-area">
        <div className="header-top">
          <a href="tel:+18329976806">
            +1 (832) 997-6806
            <span>
              <FiPhoneCall />
            </span>
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=sales@carteroilusa.com"
            target="_blank"
            rel="noopener noreferrer"
            className="email-link"
          >
            sales@carteroilusa.com{" "}
            <span>
              {" "}
              <MdMailOutline />{" "}
            </span>
          </a>
        </div>

        {/* Desktop Nav */}
        <div className="main-navbar">
          <img
            className="logo"
            src="/carter-oil-logo.svg"
            alt="Carter Oil"
            onClick={() => {
              router.push("/");
            }}
          />
          <ul className="header-links">
            {navLinks
              .filter((link) => link.name !== "Contact Us")
              .map((link, index) => {
                const isLubricants = link.name === "Lubricants";
                const isEquipments = link.name === "Equipments & Services";
                const isCatalogues = link.name === "Catalogues";
                const hasDropdown =
                  isLubricants || isEquipments || isCatalogues;
                const isActive = pathname === link.path;

                return (
                  <li
                    key={index}
                    className={`${isActive ? "active" : ""} ${
                      hasDropdown ? "has-dropdown" : ""
                    }`}
                    onClick={() => router.push(link.path)}
                    onMouseEnter={() => {
                      if (isLubricants) {
                        setShowLubricantsDropdown(true);
                        setShowEquipmentsDropdown(false);
                        setShowCatalogueDropdown(false);
                      } else if (isEquipments) {
                        setShowEquipmentsDropdown(true);
                        setShowLubricantsDropdown(false);
                        setShowCatalogueDropdown(false);
                      } else if (isCatalogues) {
                        setShowCatalogueDropdown(true);
                        setShowLubricantsDropdown(false);
                        setShowEquipmentsDropdown(false);
                      }
                    }}
                    onMouseLeave={() => {
                      if (isLubricants) setShowLubricantsDropdown(false);
                      if (isEquipments) setShowEquipmentsDropdown(false);
                      if (isCatalogues) setShowCatalogueDropdown(false);
                    }}
                  >
                    {link.name} {hasDropdown && <FaAngleDown />}
                  </li>
                );
              })}
          </ul>

          {/* Contact Us button on far right */}
          <div
            className="contact-btn"
            onClick={() => router.push("/contact-us")}
          >
            Contact Us
          </div>

          {/* Hamburger / Cross */}
          {mobileMenu ? (
            <FaTimes
              className="menu-icon"
              onClick={() => setMobileMenu(false)}
            />
          ) : (
            <GiHamburgerMenu
              className="menu-icon"
              onClick={() => setMobileMenu(true)}
            />
          )}
        </div>
      </div>

      {/* Lubricants Dropdown */}
      {showLubricantsDropdown && (
        <div className="maindropdown-area">
          <div
            className="maindropdown-area-flex"
            onMouseLeave={() => setShowLubricantsDropdown(false)}
          >
            <div
              className="left"
              onMouseEnter={() => setShowLubricantsDropdown(false)}
            ></div>
            <div
              className="center"
              onMouseEnter={() => setShowLubricantsDropdown(true)}
            >
              <ProductsDropDown
                data={lubricants.map((item) => ({
                  title: item.name,
                  slug: item.path,
                }))}
              />
            </div>
            <div
              className="right"
              onMouseEnter={() => setShowLubricantsDropdown(false)}
            ></div>
          </div>
        </div>
      )}

      {/* Equipments Dropdown */}
      {showEquipmentsDropdown && (
        <div className="maindropdown-area equipments-dropdown">
          <div
            className="maindropdown-area-flex"
            onMouseLeave={() => setShowEquipmentsDropdown(false)}
          >
            <div
              className="left"
              onMouseEnter={() => setShowEquipmentsDropdown(false)}
            ></div>
            <div
              className="center"
              onMouseEnter={() => setShowEquipmentsDropdown(true)}
            >
              <ProductsDropDown
                data={equipments.map((item) => ({
                  title: item.name,
                  slug: item.path,
                }))}
              />
            </div>
            <div
              className="right"
              onMouseEnter={() => setShowEquipmentsDropdown(false)}
            ></div>
          </div>
        </div>
      )}

      {/* Catalogue Dropdown */}
      {showCatalogueDropdown && (
        <div className="maindropdown-area catalogue-dropdown">
          <div
            className="maindropdown-area-flex"
            onMouseLeave={() => setShowCatalogueDropdown(false)}
          >
            <div
              className="left"
              onMouseEnter={() => setShowCatalogueDropdown(false)}
            ></div>
            <div
              className="center"
              onMouseEnter={() => setShowCatalogueDropdown(true)}
            >
              <CatalogueDropDown
                data={catalouges.map((item) => ({
                  title: item.name,
                  slug: item.path,
                }))}
              />
            </div>
            <div
              className="right"
              onMouseEnter={() => setShowCatalogueDropdown(false)}
            ></div>
          </div>
        </div>
      )}

      {/* Mobile Nav */}
      <div className={`mobile-menu ${mobileMenu ? "open" : ""}`}>
        <ul>
          {navLinks.map((link, index) => {
            const isLubricants = link.name === "Lubricants";
            const isEquipments = link.name === "Equipments & Services";
            const isCatalogues = link.name === "Catalogues";
            const isActive = pathname === link.path;

            return (
              <React.Fragment key={index}>
                {!isLubricants && !isEquipments && !isCatalogues ? (
                  <li
                    className={isActive ? "active" : ""}
                    onClick={() => {
                      router.push(link.path);
                      setMobileMenu(false);
                    }}
                  >
                    {link.name}
                  </li>
                ) : isLubricants ? (
                  <li>
                    <div className="mobile-services-row">
                      <span
                        className={`mobile-link ${isActive ? "active" : ""}`}
                        onClick={() => setIsLubricantsOpen(!isLubricantsOpen)}
                      >
                        {link.name}
                      </span>
                      <FaAngleDown
                        className={`expand-icon ${
                          isLubricantsOpen ? "open" : ""
                        }`}
                        onClick={() => setIsLubricantsOpen(!isLubricantsOpen)}
                      />
                    </div>

                    {isLubricantsOpen && (
                      <ul className="mobile-submenu">
                        {lubricants.map((item, idx) => (
                          <li
                            key={idx}
                            onClick={() => {
                              router.push(item.path);
                              setMobileMenu(false);
                            }}
                          >
                            {item.name}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ) : isEquipments ? (
                  <li>
                    <div className="mobile-services-row">
                      <span
                        className={`mobile-link ${isActive ? "active" : ""}`}
                        onClick={() => setIsEquipmentsOpen(!isEquipmentsOpen)}
                      >
                        {link.name}
                      </span>
                      <FaAngleDown
                        className={`expand-icon ${
                          isEquipmentsOpen ? "open" : ""
                        }`}
                        onClick={() => setIsEquipmentsOpen(!isEquipmentsOpen)}
                      />
                    </div>

                    {isEquipmentsOpen && (
                      <ul className="mobile-submenu">
                        {equipments.map((item, idx) => (
                          <li
                            key={idx}
                            onClick={() => {
                              router.push(item.path);
                              setMobileMenu(false);
                            }}
                          >
                            {item.name}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ) : (
                  <li>
                    <div className="mobile-services-row">
                      <span
                        className={`mobile-link ${isActive ? "active" : ""}`}
                        onClick={() => setIsCataloguesOpen(!isCataloguesOpen)}
                      >
                        {link.name}
                      </span>
                      <FaAngleDown
                        className={`expand-icon ${
                          isCataloguesOpen ? "open" : ""
                        }`}
                        onClick={() => setIsCataloguesOpen(!isCataloguesOpen)}
                      />
                    </div>

                    {isCataloguesOpen && (
                      <ul className="mobile-submenu">
                        {catalouges.map((item, idx) => (
                          <a key={idx} href={item.path} download>
                            {item.name}
                            <span>
                              <FiDownload />
                            </span>
                          </a>
                        ))}
                      </ul>
                    )}
                  </li>
                )}
              </React.Fragment>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Header;
