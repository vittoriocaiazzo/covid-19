import React from "react";

import "./ModalProvinceCard.css";
import labels from "../../../styles/todays-labels.json";
import Close from "../../../styles/icons/close.png";

import RankTable from "../../Tables/RankTable";

const getColumns = (data) => {
  if (data.length === 0) return [];
  return Object.keys(data[0]).filter((key) => key !== "denominazione_regione");
};

const ModalProvinceCard = (props) => {
  return (
    <>
      <div className="modal-province-backdrop" onClick={props.onClick} />
      <div className="modal-province-card">
        <img
          src={Close}
          className="close-button"
          alt=""
          onClick={props.onClick}
        />
        <h2 className="modal-province-card__region">{props.regionName}</h2>
        {/* {props.region.map((el, index) => (
          <div key={index} className="modal-province-card__province">
            <div className="modal-province">
              {el.denominazione_provincia}: {el.totale_casi.toLocaleString()}
            </div>
          </div>
        ))} */}
        <div className="province-region-table">
          <RankTable
            data={props.region}
            columns={getColumns(props.region)}
            sortingBy={props.sortingBy}
            sortingValue={props.sortingValue}
            onClick={props.onSortingClick}
            labels={labels}
            isSummary={true}
          />
        </div>
      </div>
    </>
  );
};

export default ModalProvinceCard;
