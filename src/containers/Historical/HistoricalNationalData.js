import React from "react";
import { useSelector, useDispatch } from "react-redux";

import "../Containers.css";
import labels from "../../styles/total-labels.json";
import { selectSortedHistoricalData } from "../../store/selectors/nationalSelector";
import { setNationalSorting } from "../../store/actions/nationalActions";

import DateTable from "../../components/Tables/DateTable";

const getColumns = (data) => {
  if (data.length === 0) return [];
  return Object.keys(data[0]).filter(
    (key) => key !== "stato" && key !== "note"
  );
};

const HistoricalNationalData = () => {
  const nationalState = useSelector((state) => state.nationalData);
  const historicalNationalData = useSelector(selectSortedHistoricalData);

  const dispatch = useDispatch();

  const sortingClickHandler = (value) => {
    if (nationalState.sorting.historical.by === "ASC")
      dispatch(setNationalSorting({ historical: { by: "DESC", value } }));
    else if (nationalState.sorting.historical.by === "DESC")
      dispatch(setNationalSorting({ historical: { by: "ASC", value } }));
  };

  return (
    <div className="table-card">
      <DateTable
        data={historicalNationalData}
        columns={getColumns(historicalNationalData)}
        sortingBy={nationalState.sorting.historical.by}
        sortingValue={nationalState.sorting.historical.value}
        onClick={sortingClickHandler}
        labels={labels}
      />
    </div>
  );
};

export default HistoricalNationalData;
