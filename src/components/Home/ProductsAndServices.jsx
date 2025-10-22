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
        Carteroil delivers trusted oilfield services built on decades of
        expertise. We support governments, operators, and industrial companies
        across land, subsea, and marine projects. Every service is engineered
        with advanced technology and delivered under the highest safety
        standards to ensure reliability, efficiency, and lasting performance.
      </p>

      <div className="products-container">
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
                onError={(e) => (e.target.src = "/default-icon.svg")}
              />
            </div>
            <h3>{product.title}</h3>
            <p>{product.short_description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsAndServices;
