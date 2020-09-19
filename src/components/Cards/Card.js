import React from "react";
import "./Cards.css";

import { ReactComponent as StatsBars } from "../../icons/stats-bars.svg";
import { ReactComponent as StatsDots } from "../../icons/stats-dots.svg";

const Card = (props) => {
  return (
    <div className="cards__card">
      {props.filter === "SHOW_TODAYS_NATIONAL_DATA" && (
        <StatsBars
          className="stats-bars"
          onClick={() => props.onClick(props.title)}
        />
      )}
      {props.filter === "SHOW_CURRENT_NATIONAL_DATA" && (
        <StatsDots
          className="stats-dots"
          onClick={() => props.onClick(props.title)}
        />
      )}

      <div
        className={
          props.title === "deceduti"
            ? "cards__card-value red"
            : props.title === "dimessi_guariti"
            ? "cards__card-value green"
            : "cards__card-value"
        }
      >
        {props.value.toLocaleString()}
      </div>
      <div
        className={
          props.title === "deceduti"
            ? "cards__card-title red"
            : props.title === "dimessi_guariti"
            ? "cards__card-title green"
            : "cards__card-title"
        }
      >
        {/* {props.title.replace(/_/g, " ")} */}
        {props.label}
      </div>
      <div className="cards__card-yesterday-value">
        Ieri: {props.yesterday && props.yesterday.toLocaleString()}
      </div>
    </div>
  );
};

export default Card;
