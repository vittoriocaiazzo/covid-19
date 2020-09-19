import React from "react";
import "./ProvinceCards.css";

import { dateFormat } from "../../../utilities/utilities";

const ProvinceCard = (props) => {
  return (
    <div
      key={props.province.dataISO}
      className="historical-province-container__provinces"
    >
      <div className="province-container__provinces__data">
        {dateFormat(props.province.data)}
      </div>
      <div className="province-container__provinces__totale-casi">
        TOTALE CASI: {props.province.totale_casi}
      </div>
      <div className="province-container__provinces__increment">
        +{props.province.nuovi_positivi}
      </div>
    </div>
  );
};

export default ProvinceCard;
