import React from "react";
import { useSelector, useDispatch } from "react-redux";

import "../Containers.css";
import labels from "../../styles/total-labels.json";
import { getRegionList } from "../../store/selectors/regionalSelector";
import { selectSortedHistoricalRegionalData } from "../../store/selectors/regionalSelector";
import {
  setRegionalSorting,
  setRegionalFilter,
} from "../../store/actions/regionalActions";

import SelectInput from "../../components/SelectInput/SelectInput";
import DateTable from "../../components/Tables/DateTable";

const getColumns = (data) => {
  if (data.length === 0) return [];
  return Object.keys(data[0]).filter((key) => key !== "dataISO");
};

const HistoricalRegionalData = () => {
  const historicalRegionalData = useSelector(
    selectSortedHistoricalRegionalData
  );
  const regionalState = useSelector((state) => state.regionalData);
  const regions = useSelector(getRegionList);
  const options = regions.map((region) => {
    return { value: region, label: region };
  });

  const dispatch = useDispatch();

  const selectRegion = (selectedOption) => {
    dispatch(setRegionalFilter(selectedOption.value));
  };

  const sortingClickHandler = (value) => {
    if (regionalState.sorting.historical.by === "ASC")
      dispatch(setRegionalSorting({ historical: { by: "DESC", value } }));
    else if (regionalState.sorting.historical.by === "DESC")
      dispatch(setRegionalSorting({ historical: { by: "ASC", value } }));
  };

  return (
    <div className="table-card table-fullwidth-column">
      <SelectInput
        options={options}
        defaultValue={options.find(
          (option) => option.value === regionalState.regionFilter
        )}
        onChange={selectRegion}
      />
      <DateTable
        data={historicalRegionalData}
        columns={getColumns(historicalRegionalData)}
        sortingBy={regionalState.sorting.historical.by}
        sortingValue={regionalState.sorting.historical.value}
        onClick={sortingClickHandler}
        labels={labels}
      />
    </div>
  );
};

export default HistoricalRegionalData;
