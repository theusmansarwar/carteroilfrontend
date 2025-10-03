"use client";
import React from "react";
import "./Performance.css";
import { useRouter } from "next/navigation";
const Performance = ({ data }) => {
  const router = useRouter();
  return (
    <div className="performance">
      <h2>{data.title}</h2>
      <div
        className="performance-description"
        dangerouslySetInnerHTML={{ __html: data?.description || "" }}
      />
      <button
        onClick={() => {
          router.push("/contact-us");
        }}
      >
        Get Started Now
      </button>
    </div>
  );
};

export default Performance;
