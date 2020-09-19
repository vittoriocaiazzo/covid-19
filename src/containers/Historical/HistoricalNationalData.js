import React from "react";
import "../Containers.css";

import HistoricalTable from "../../components/Tables/HistoricalTable";

import { useSelector, useDispatch } from "react-redux";
import { getFilteredAndSortedNationalData } from "../../store/selectors/nationalSelector";
import {
  setNationalSorting,
  filters,
} from "../../store/actions/nationalActions";

const getColumns = (data) => {
  if (data.length === 0) return [];
  return Object.keys(data[0]).filter(
    (key) => key !== "stato" && key !== "note"
  );
};

const Table = (props) => {
  const historicalNationalData = useSelector((state) =>
    getFilteredAndSortedNationalData(state, props)
  );
  const columns = getColumns(historicalNationalData);

  return (
    <HistoricalTable
      data={historicalNationalData}
      columns={columns}
      sortingBy={props.sortingBy}
      sortingValue={props.sortingValue}
      onClick={props.onClick}
    />
  );
};

const HistoricalNationalData = () => {
  const nationalState = useSelector((state) => state.nationalData);
  const dispatch = useDispatch();

  const sortingClickHandler = (value) => {
    if (nationalState.sorting.historical.by === "ASC")
      dispatch(setNationalSorting({ historical: { by: "DESC", value } }));
    else if (nationalState.sorting.historical.by === "DESC")
      dispatch(setNationalSorting({ historical: { by: "ASC", value } }));
  };

  return (
    <div className="data-container data-container--fixed-height">
      {nationalState.isLoading && <div>LOADING</div>}

      {nationalState.isLoaded && (
        <>
          <h2 className="data-container__title">I DATI NAZIONALI</h2>
          <Table
            filter={filters.SHOW_HISTORICAL_NATIONAL_DATA}
            sortingKey={"historical"}
            sortingBy={nationalState.sorting.historical.by}
            sortingValue={nationalState.sorting.historical.value}
            onClick={sortingClickHandler}
          />
          <div className="data-container__note-update-container">
            <div></div>
            <div>{nationalState.updateTime}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default HistoricalNationalData;
