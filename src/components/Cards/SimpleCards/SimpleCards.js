import React from "react";

import "./SimpleCards.css";
// import todaysLabels from "../../../styles/todays-labels.json";

import SimpleCard from "./SimpleCard";

const SimpleCards = (props) => {
  return (
    <div className="cards-container">
      {props.data.map((el, index) => (
        <div key={index} className="cards">
          {Object.keys(el).map((key) => (
            <SimpleCard
              key={key}
              title={key}
              label={props.labels[key]}
              value={el[key]}
              yesterday={props.yesterday[index][key]}
              todaysData={props.todaysData}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default SimpleCards;
