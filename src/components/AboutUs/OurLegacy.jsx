import React from "react";
import "./OurLegacy.css";

const legacyData = [
  {
    id: 1,
    title: "Our Legacy of Innovation",
    image: "/legacy.webp",
    description: [
      "Since the beginning, Carteroil has kept innovation at the heart of its work. The company set out to create lubricants that deliver strong performance and reliable protection. Every step of the journey shows a clear drive to improve technology. Carteroil invests in research and development to stay ahead of industry needs. As industries grow and change, the company adapts. Each product reflects a promise to give you effective and dependable solutions.",
      "Carteroil’s legacy comes not only from its long history but also from the spirit of innovation that guided every challenge. The company knows that the needs of modern industries keep changing. It continues to lead through new technologies. It meets those needs with confidence",
    ],
  },
  {
    id: 2,
    title: "Commitment to Quality",
    image: "/reliability.webp",
    description: [
      "At Carteroil, quality stands as a promise, not just a goal. We understand that your operations depend on products that work without fail. Every lubricant we produce goes through strict testing and quality checks. From production to delivery, we never compromise. You receive products built to perform in every condition.",
      "Reliability defines our brand. Each product protects your equipment and extends its life. From heavy machinery to delicate engines, Carteroil provides solutions that deliver efficiency and lasting performance.",
    ],
  },
];

const OurLegacy = () => {
  return (
    <div className="our-legacy">
      {legacyData.map((item) => (
        <div className="legacy-card" key={item.id}>
          <h2>{item.title}</h2>
          <img src={item.image} alt={item.title} />
          {item.description.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default OurLegacy;
