"use client";
import React from "react";
import { useRouter } from "next/navigation";
import "./EquipmentsDropDown.css";

const EquipmentsDropDown = ({ data }) => {
  const router = useRouter();

  return (
    <div className="equipment-drop-down">
      <ul className="drop-menu">
        {data?.map((item, index) => (
          <li
            key={index}
            className="drop-menu-item"
            onClick={() => router.push(`${item.slug}`)}
            style={{ cursor: "pointer" }}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EquipmentsDropDown;
