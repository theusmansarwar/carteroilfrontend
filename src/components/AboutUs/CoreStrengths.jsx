import React from "react";
import "./CoreStrengths.css";

const impactData = [
  {
    id: 1,
    title: "Innovation in Lubricant",
    image: "/innovation.svg",
    description:
      "We place innovation at the heart of our work. New technologies shape our lubricants to meet the highest standards. You always receive solutions designed to match the pace of modern industry.",
  },
  {
    id: 2,
    title: "Technical Expertise",
    image: "/technical.svg",
    description:
      "Our team of specialists brings deep knowledge and hands-on experience. You get expert guidance to choose the right lubricants for your operations. We solve complex challenges with precision and care.",
  },
  {
    id: 3,
    title: "Customized Solutions",
    image: "/customized.svg",
    description:
      "We believe every business is unique. Our experts listen to your needs and create products that fit your operations. You get solutions made to match your goals, not generic ones.",
  },
  {
    id: 4,
    title: "Reliable Supply Network",
    image: "/reliable.svg",
    description:
      "We keep our supply chain dependable and efficient. No matter your location, you receive products on time. You can trust Carteroil to deliver when it matters most.",
  },
  {
    id: 5,
    title: "Sustainability Commitment",
    image: "/sustainability.svg",
    description:
      "We care about the performance of the planet. Our lubricants are created to lower environmental impact. You can move forward with solutions that support both efficiency and responsibility.",
  },
  {
    id: 6,
    title: "Global Reach",
    image: "/global.svg",
    description:
      "We serve industries across the world. From the United States to Latin America and beyond, our reach is wide. Wherever you operate, Carteroil stands ready with reliable support.",
  },
];
const CoreStrengths = () => {
  return (
    <div className="core-strengths">
      <h2>Our Core Strengths</h2>
      <div className="strength-container">
        {impactData.map((item) => (
          <div className="each-strength" key={item.id}>
            <img src={item.image} alt={item.title} />
            <p>
              <strong>{item.title}: </strong>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreStrengths;
