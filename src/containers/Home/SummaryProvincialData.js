import React from "react";
import { useDispatch, useSelector } from "react-redux";

import "../Containers.css";
import labels from "../../styles/todays-labels.json";
import { selectSortedSummaryProvincialData } from "../../store/selectors/provincialSelector";
import { setProvincialSorting } from "../../store/actions/provincialActions";

import RankTable from "../../components/Tables/RankTable";

const getColumns = (data) => {
  if (data.length === 0) return [];
  return Object.keys(data[0]).filter((key) => key !== "dataISO");
};

const SummaryProvincialData = () => {
  const summaryProvincialData = useSelector(selectSortedSummaryProvincialData);
  const provincialState = useSelector((state) => state.provincialData);

  const dispatch = useDispatch();

  // sorting handler for the click on a table header
  const sortingClickHandler = (value) => {
    if (provincialState.sorting.summary.by === "ASC")
      dispatch(setProvincialSorting({ summary: { by: "DESC", value } }));
    else if (provincialState.sorting.summary.by === "DESC")
      dispatch(setProvincialSorting({ summary: { by: "ASC", value } }));
  };

  return (
    <div className="summary-province-table">
      <RankTable
        data={summaryProvincialData}
        columns={getColumns(summaryProvincialData)}
        sortingBy={provincialState.sorting.summary.by}
        sortingValue={provincialState.sorting.summary.value}
        onClick={sortingClickHandler}
        labels={labels}
        isSummary={true}
      />
    </div>
  );
};

export default SummaryProvincialData;
