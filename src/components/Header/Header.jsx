"use client";
import React, { useEffect, useState } from "react";
import "./Header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiPhoneCall } from "react-icons/fi";
import { FaAngleDown, FaTimes } from "react-icons/fa";
import { usePathname, useRouter } from "next/navigation";
import ProductsDropDown from "../DropDown/ProductsDropDown";
import { fetchProductsSlugs } from "@/DAL/Fetch";
import { MdMailOutline } from "react-icons/md";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Lubricants", path: "/products" },
  { name: "History", path: "/history" },
  { name: "About Us", path: "/about-us" },
  { name: "Contact", path: "/contact-us" },
];

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [products, setProducts] = useState();
  const [showDropdown, setShowDropdown] = useState(false); // desktop dropdown
  const [mobileMenu, setMobileMenu] = useState(false);

  // Mobile state for lubricants
  const [isLubricantsOpen, setIsLubricantsOpen] = useState(false);
  const visibleDropdown = () => setShowDropdown(true);
  const hidedropdown = () => setShowDropdown(false);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetchProductsSlugs();
        const data = res?.slugs;
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch product slugs:", error);
      }
    };

    getProducts();
  }, []);

  return (
    <>
      <div className="header-area">
        {/* Left */}
        <div className="left">
          <img
            className="logo"
            src="/carter-oil-logo.svg"
            alt="Carter Oil"
            onClick={() => {
              router.push("/");
            }}
          />
          <ul className="header-links">
            {navLinks.map((link, index) => {
              const isLubricants = link.name === "Lubricants";
              const isActive = pathname === link.path;

              return (
                <li
                  key={index}
                  className={`${isActive ? "active" : ""} ${
                    isLubricants ? "has-dropdown" : ""
                  }`}
                  onClick={() => router.push(link.path)}
                  onMouseEnter={isLubricants ? visibleDropdown : undefined}
                  onMouseLeave={isLubricants ? hidedropdown : undefined}
                >
                  {link.name} {isLubricants && <FaAngleDown />}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Right */}
        <div className="right">
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
      {/* Desktop Prdoducts Dropdown */}
      {showDropdown && (
        <div className="maindropdown-area">
          <div className="maindropdown-area-flex " onMouseLeave={hidedropdown}>
            <div className="left" onMouseEnter={hidedropdown}></div>
            <div className="center" onMouseEnter={visibleDropdown}>
              <ProductsDropDown data={products} />
            </div>
            <div className="right" onMouseEnter={hidedropdown}></div>
          </div>
        </div>
      )}
      {/* Mobile Nav */}
      <div className={`mobile-menu ${mobileMenu ? "open" : ""}`}>
        <ul>
          {navLinks.map((link, index) => {
            const isLubricants = link.name === "Lubricants";
            const isActive = pathname === link.path;

            return (
              <React.Fragment key={index}>
                {!isLubricants ? (
                  <li
                    className={isActive ? "active" : ""}
                    onClick={() => {
                      router.push(link.path);
                      setMobileMenu(false);
                    }}
                  >
                    {link.name}
                  </li>
                ) : (
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
                        {products?.map((product, idx) => (
                          <li
                            key={idx}
                            onClick={() => {
                              router.push(`/products/${product.slug}`);
                              setMobileMenu(false);
                            }}
                          >
                            {product.title}
                          </li>
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
