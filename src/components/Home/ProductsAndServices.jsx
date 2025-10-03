"use client";
import React from "react";
import "./ProductsAndServices.css";
import { useRouter } from "next/navigation";

const products = [
  {
    icon: "/automotive-lubricant.svg",
    title: "Automotive Lubricants",
    slug: "automotive-lubricants",
    description:
      "Oils and fluids designed to maximize vehicle performance. You get protection, efficiency, and long-lasting engine life.",
  },
  {
    icon: "/industrial-lubricant.svg",
    title: "Industrial Lubricants",
    slug: "industrial-lubricants",
    description:
      "Reliable solutions to keep machinery running smoothly. You reduce downtime and improve operational efficiency.",
  },
  {
    icon: "/marine-lubricant.svg",
    title: "Marine Lubricants",
    slug: "marine-lubricants",
    description:
      "Specialty products made for marine engines and harsh environments. You ensure safety and performance at sea.",
  },
  {
    icon: "/oilfield.svg",
    title: "Oilfield Services",
    slug: "oilfield-lubricants",
    description:
      "Tubing fabrication, control panels, inspections, and equipment rentals. You receive support built for every oilfield need.",
  },
  {
    icon: "/equipment.svg",
    title: "Equipment",
    slug: "equipments",
    description:
      "Tools and machinery designed to support oilfield and industrial operations. You gain reliability and operational readiness.",
  },
  {
    icon: "/racing-oils.svg",
    title: "Specialty & Racing Oils",
    slug: "speciality-lubricants",
    description:
      "High-performance lubricants for extreme and demanding applications. You achieve maximum efficiency.",
  },
];

const ProductsAndServices = () => {
  const router = useRouter();
  return (
    <div className="products-services">
      <div className="bg-half"></div>
      <h2>
        Carter Oil <span>Products & Services</span>
      </h2>
      <p>
        Carteroil delivers trusted oilfield services built on decades of
        expertise. We support governments, operators, and industrial companies
        across land, subsea, and marine projects. Every service is engineered
        with advanced technology and delivered under the highest safety
        standards to ensure reliability, efficiency, and lasting performance
      </p>
      <div className="products-container">
        {products.map((product, index) => (
          <div
            className="each-product"
            key={index}
            onClick={() => {
              router.push(`/${product.slug}`);
            }}
          >
            <div className="icon-container">
              <img src={product.icon} alt={product.title} />
            </div>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsAndServices;
