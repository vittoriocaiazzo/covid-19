import React from "react";
import "./SummaryCards.css";

const SummaryCard = (props) => {
  return (
    <div className="summary-card">
      <div className="summary-card__row" id="row-1">
        <span className="summary-card__title">{props.style.firstLabel}</span>

        <div className="summary-card__today-container">
          <span className="summary-card__today-value">
            {props.data[Object.keys(props.data)[0]] > 0
              ? `+${props.data[Object.keys(props.data)[0]].toLocaleString()}`
              : props.data[Object.keys(props.data)[0]].toLocaleString()}
          </span>

          <span
            className="summary-card__percentage"
            style={{ color: props.style.isNegative ? "red" : "green" }}
          >
            {props.data.percentuale.toFixed(2) > 0
              ? `+${props.data.percentuale.toFixed(2)}`
              : props.data.percentuale.toFixed(2)}
            %
          </span>
        </div>
      </div>

      <div className="summary-card__row" id="row-2">
        <div className={`summary-card__color ${props.style.color}`}>
          {/* <props.data.icon className="face-icon" /> */}
          <img src={props.style.icon} className="face-icon" alt="icon" />
        </div>
      </div>

      <div className="summary-card__row" id="row-3">
        <span className="summary-card__title">{props.style.secondLabel}</span>
        <span className="summary-card__total-value">
          {props.data[Object.keys(props.data)[2]].toLocaleString()}
        </span>
      </div>
    </div>
  );
};

export default SummaryCard;
