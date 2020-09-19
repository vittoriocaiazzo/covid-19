import React from "react";
import "./Cards.css";

import Card from "./Card";

const Cards = (props) => {
  return (
    <div className="cards">
      {Object.keys(props.data).map((key) => (
        <Card
          key={key}
          title={key}
          label={props.labels[key]}
          value={props.data[key]}
          yesterday={props.yesterday[key]}
          filter={props.filter}
          onClick={props.onClick}
        />
      ))}
    </div>
  );
};

export default Cards;
