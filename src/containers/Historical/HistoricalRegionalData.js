import React from "react";
import "../Containers.css";

import SelectInput from "../../components/SelectInput/SelectInput";
import HistoricalTable from "../../components/Tables/HistoricalTable";

import { useSelector, useDispatch } from "react-redux";

import { getRegionList } from "../../store/selectors/regionalSelector";
import { getFilteredAndSortedRegionalData } from "../../store/selectors/regionalSelector";
import {
  setRegionalSorting,
  setRegionalFilter,
  filters,
} from "../../store/actions/regionalActions";

const getColumns = (data) => {
  if (data.length === 0) return [];
  return Object.keys(data[0]).filter((key) => key !== "dataISO");
};

const Table = (props) => {
  const historicalRegionalData = useSelector((state) =>
    getFilteredAndSortedRegionalData(state, props)
  );
  const columns = getColumns(historicalRegionalData);

  return (
    <HistoricalTable
      data={historicalRegionalData}
      columns={columns}
      sortingBy={props.sortingBy}
      sortingValue={props.sortingValue}
      onClick={props.onClick}
    />
  );
};

const HistoricalRegionalData = () => {
  const regionalState = useSelector((state) => state.regionalData);
  const regions = useSelector(getRegionList);
  const dispatch = useDispatch();

  const options = regions.map((region) => {
    return { value: region, label: region };
  });

  const selectRegion = (selectedOption) => {
    dispatch(setRegionalFilter(selectedOption.value));
  };

  const sortingClickHandler = (key) => {
    let value;
    if (key === "data") value = "dataISO";
    else value = key.replace(new RegExp(" ", "g"), "_");
    if (regionalState.sorting.historical.by === "ASC")
      dispatch(setRegionalSorting({ historical: { by: "DESC", value } }));
    else if (regionalState.sorting.historical.by === "DESC")
      dispatch(setRegionalSorting({ historical: { by: "ASC", value } }));
  };

  return (
    <div className="data-container data-container--fixed-height">
      {regionalState.isLoading && !options && <div>LOADING</div>}

      {regionalState.isLoaded && (
        <>
          <h2 className="data-container__title">I DATI REGIONALI</h2>
          <SelectInput
            options={options}
            defaultValue={options.find(
              (option) => option.value === regionalState.regionFilter
            )}
            onChange={selectRegion}
          />

          <Table
            filter={filters.SHOW_HISTORICAL_REGIONAL_DATA}
            sortingKey={"historical"}
            sortingBy={regionalState.sorting.historical.by}
            sortingValue={regionalState.sorting.historical.value}
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

export default HistoricalRegionalData;
