import React from "react";
import "./HistoryCards.css";

const historyData = [
  { year: "1893", title: "Carter Oil Company", image: "/1893.jpg" },
  {
    year: "1915",
    title: "Carter moved its headquarters to Tulsa",
    image: "/1915.jpg",
  },
  {
    year: "1950 – 1960",
    title: "Humble Oil service stations branded as “Carter”",
    image: "/1950.jpg",
  },
  {
    year: "1962",
    title: "Carteroil enters international markets",
    image: "/1962.jpg",
  },
  { year: "Carter", title: "became a recognized brand", image: "/1965.jpg" },
  {
    year: "1970 – 2018",
    title: "Carteroil expands across Latin America",
    image: "/1970.png",
  },
  {
    year: "2019",
    title: "Carteroil expands across Latin America",
    image: "/carter-oil-logo.svg",
  },
  
];

const HistoryCards = () => {
  return (
    <div className="history-cards-grid">
      {historyData.map((card, index) => (
        <div className="history-each-card" key={index}>
          <div className="img-cont">
            <img src={card.image} alt={card.title} />
          </div>
          <h3 className="history-title">
            <span>{card.year}</span> {card.title}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default HistoryCards;
