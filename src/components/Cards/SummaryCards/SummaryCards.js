import React from "react";

import SummaryCard from "./SummaryCard";

import "./SummaryCards.css";

const SummaryCards = (props) => {
  return (
    <div className="summary-cards">
      {props.data.map((el, index) => (
        <SummaryCard key={index} data={el} style={props.styles[index]} />
      ))}
    </div>
  );
};

export default SummaryCards;
