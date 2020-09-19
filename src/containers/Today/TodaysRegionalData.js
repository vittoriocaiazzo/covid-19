import React from "react";
import "../Containers.css";

import RegionTable from "../../components/Tables/RegionTable";

import labels from "../../utilities/labels/todays-labels.json";

import { useSelector, useDispatch } from "react-redux";
import { getFilteredAndSortedRegionalData } from "../../store/selectors/regionalSelector";
import {
  setRegionalSorting,
  filters,
} from "../../store/actions/regionalActions";

const getColumns = (data) => {
  if (data.length === 0) return [];
  return Object.keys(data[0]).filter((key) => key !== "dataISO");
};

const Table = (props) => {
  const todaysRegionalData = useSelector((state) =>
    getFilteredAndSortedRegionalData(state, props)
  );
  const columns = getColumns(todaysRegionalData);

  return (
    <RegionTable
      data={todaysRegionalData}
      columns={columns}
      sortingBy={props.sortingBy}
      sortingValue={props.sortingValue}
      onClick={props.onClick}
      labels={labels}
    />
  );
};

const TodaysRegionalData = () => {
  const regionalState = useSelector((state) => state.regionalData);
  const dispatch = useDispatch();

  // sorting handler for the click on a table header
  const sortingClickHandler = (key) => {
    let value;
    if (key === "data") value = "dataISO";
    else value = key.replace(new RegExp(" ", "g"), "_");

    if (regionalState.sorting.today.by === "ASC")
      dispatch(setRegionalSorting({ today: { by: "DESC", value } }));
    else if (regionalState.sorting.today.by === "DESC")
      dispatch(setRegionalSorting({ today: { by: "ASC", value } }));
  };

  return (
    <div className="data-container data-container--fixed-height">
      {regionalState.isLoading && <div>LOADING</div>}

      {regionalState.isLoaded && (
        <>
          <h2 className="data-container__title">I DATI REGIONALI</h2>
          <Table
            filter={filters.SHOW_TODAYS_REGIONAL_DATA}
            sortingKey={"today"}
            sortingBy={regionalState.sorting.today.by}
            sortingValue={regionalState.sorting.today.value}
            onClick={sortingClickHandler}
          />
          <div className="data-container__note-update-container">
            <div></div>
            <div>{regionalState.updateTime}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default TodaysRegionalData;
