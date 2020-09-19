import React from "react";
import "./ProvinceCards.css";

import ProvinceCard from "./ProvinceCard";

const ProvinceCards = (props) => {
  return (
    <div className="historical-province-container">
      {props.data.map((el, index) => (
        <ProvinceCard key={index} province={el} />
      ))}
    </div>
  );
};

export default ProvinceCards;
