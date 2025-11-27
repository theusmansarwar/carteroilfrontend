"use client";
import React, { useEffect, useState } from "react";
import "./ProductsAndServices.css";
import { useRouter } from "next/navigation";
import { baseUrl } from "@/config/Config";
import { fetchAllProducts } from "@/DAL/Fetch";
import HomeServicesSkeleton from "../SkeletonLoaders/HomeServicesSkeleton";

const ProductsAndServices = () => {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetchAllProducts(1, 6);
        if (res?.products) {
          setProducts(res.products);
        }
      } catch (err) {
        console.error("Failed to fetch products:", err);
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  if (loading) return <HomeServicesSkeleton />;

  return (
    <div className="products-services">
      <div className="bg-half"></div>
      <h2>
        Carter Oil <span>Products & Services</span>
      </h2>
      <p>
        Carteroil delivers trusted oilfield <a href="https://carteroilusa.com/oil-and-gas-services">services</a> built on decades of
        expertise. We support governments, operators, and industrial companies
        across land, subsea, and marine projects. Every service is engineered
        with advanced technology and delivered under the highest safety
        standards to ensure reliability, efficiency, and lasting performance.
      </p>

      <div className="products-container">

        {/* ---------- Dynamic Products ---------- */}
        {products.map((product) => (
          <div
            className="each-product"
            key={product._id}
            onClick={() => router.push(`products/${product.slug}`)}
          >
            <div className="icon-container">
              <img
                src={baseUrl + product.icon}
                alt={product.title}
              />
            </div>
            <h3>{product.title}</h3>
            <p>{product.short_description}</p>
          </div>
        ))}

        {/* ---------- STATIC CARD ---------- */}
        <div className="each-product static-card" onClick={() => router.push("/carter-ofs")}>
          <div className="icon-container">
            <img src="/ofs-icon.svg" alt="OFS" />
          </div>
          <h3>Oil Field Services
          </h3>
          <p>
           Reliable oilfield solutions improving drilling, production, maintenance, efficiency, safety, and operational performance.
          </p>
        </div>

      </div>
    </div>
  );
};

export default ProductsAndServices;
