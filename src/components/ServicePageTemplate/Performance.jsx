import React from "react";
import "./Performance.css";
const Performance = ({ data }) => {
  return (
    <div className="performance">
      <h2>{data.title}</h2>
      <div
        className="performance-description"
        dangerouslySetInnerHTML={{ __html: data?.description || "" }}
      />
      <button>Lorem Ipsum</button>
    </div>
  );
};

export default Performance;
