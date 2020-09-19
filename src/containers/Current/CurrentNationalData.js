import React, { useState } from "react";
import "../Containers.css";

import LineGraph from "../../components/ModalGraphs/LineGraph";
import labels from "../../utilities/labels/current-total-labels.json";

import { useSelector } from "react-redux";

import { filters } from "../../store/actions/nationalActions";
import { getFilteredNationalData } from "../../store/selectors/nationalSelector";

import Cards from "../../components/Cards/Cards";

const DataSection = (props) => {
  const todaysNationalData = useSelector((state) =>
    getFilteredNationalData(state, props)
  );

  return (
    <>
      <h2 className="data-container__title">I DATI PRINCIPALI</h2>
      <Cards
        data={todaysNationalData[0][0]}
        yesterday={todaysNationalData[1][0]}
        labels={labels}
        filter={props.filter}
        onClick={props.onClick}
      />

      <h2 className="data-container__title">LA SITUAZIONE DEI POSITIVI</h2>
      <Cards
        data={todaysNationalData[0][1]}
        yesterday={todaysNationalData[1][1]}
        labels={labels}
        filter={props.filter}
        onClick={props.onClick}
      />

      <h2 className="data-container__title">I DATI SUI TAMPONI</h2>
      <Cards
        data={todaysNationalData[0][2]}
        yesterday={todaysNationalData[1][2]}
        labels={labels}
        filter={props.filter}
        onClick={props.onClick}
      />
    </>
  );
};

const CurrentNationalData = () => {
  const nationalState = useSelector((state) => state.nationalData);
  const [showGraph, setShowGraph] = useState(false);
  const [graphDataKey, setGraphDataKey] = useState("");

  const showBarGraph = (key) => {
    if (key !== "nuovi_positivi") {
      if (key.includes("nuovi")) key = key.replace("nuovi", "totale");
    }
    setGraphDataKey(key);
    setShowGraph(true);
  };
  const hideBarGraph = () => {
    setGraphDataKey("");
    setShowGraph(false);
  };

  return (
    <div className="data-container">
      {nationalState.isLoading && <div>LOADING</div>}

      {nationalState.isLoaded && (
        <>
          <DataSection
            filter={filters.SHOW_CURRENT_NATIONAL_DATA}
            onClick={showBarGraph}
          />
          <div className="data-container__note-update-container">
            <div></div>
            <div>{nationalState.updateTime}</div>
          </div>
        </>
      )}

      {showGraph && (
        <LineGraph
          type={"CURRENT"}
          graphDataKey={graphDataKey}
          onClick={hideBarGraph}
        />
      )}
    </div>
  );
};

export default CurrentNationalData;
