import React from "react";
import "./AnImpact.css";

const impactData = [
  {
    id: 1,
    title: "Automotive Solutions",
    image: "/automotive-lubricant.svg",
    description:
      "We design lubricants that protect engines and boost efficiency. Your vehicles run longer and perform better with Carteroil. From personal cars to large fleets, our products keep engines strong and dependable.",
  },
  {
    id: 2,
    title: "Marine & Power Generation",
    image: "/marine.svg",
    description:
      "We provide oils that stand up to tough marine and power environments. Equipment stays protected even under pressure. You gain reliable performance that keeps operations steady and safe.",
  },
  {
    id: 3,
    title: "Heavy-Duty & Commercial Equipment",
    image: "/heavy-duty.svg",
    description:
      "We deliver lubricants made for the toughest machines. Our products reduce wear, extend lifespan, and support nonstop operations. Your equipment stays ready for demanding jobs.",
  },
  {
    id: 4,
    title: "Industrial & Manufacturing",
    image: "/industrial.svg",
    description:
      "We supply oils to keep the factories and plants moving. Our lubricants cut friction, lower downtime, and reduce maintenance costs. You get efficient machines that deliver higher output.",
  },
];

const AnImpact = () => {
  return (
    <div className="an-impact">
      <h2>Where We Make an Impact</h2>
      <p>
        We create solutions that help you achieve smooth, reliable performance
        from vehicles to heavy machines.
      </p>
      <div className="impact-container">
        {impactData.map((item) => (
          <div className="each-impact" key={item.id}>
            <div className="left">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="right">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnImpact;
