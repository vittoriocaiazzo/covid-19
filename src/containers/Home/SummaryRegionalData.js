import React from "react";
import { useSelector, useDispatch } from "react-redux";

import "../Containers.css";
import labels from "../../styles/todays-labels.json";
import { selectSortedSummaryRegionalData } from "../../store/selectors/regionalSelector";
import { setRegionalSorting } from "../../store/actions/regionalActions";

import RankTable from "../../components/Tables/RankTable";

const getColumns = (data) => {
  if (data.length === 0) return [];
  return Object.keys(data[0]).filter((key) => key !== "dataISO");
};

const SummaryRegionalData = () => {
  const regionalState = useSelector((state) => state.regionalData);
  const summaryRegionalData = useSelector(selectSortedSummaryRegionalData);

  const dispatch = useDispatch();

  // sorting handler for the click on a table header
  const sortingClickHandler = (value) => {
    if (regionalState.sorting.summary.by === "ASC")
      dispatch(setRegionalSorting({ summary: { by: "DESC", value } }));
    else if (regionalState.sorting.summary.by === "DESC")
      dispatch(setRegionalSorting({ summary: { by: "ASC", value } }));
  };

  return (
    <div className="summary-region-table">
      <RankTable
        data={summaryRegionalData}
        columns={getColumns(summaryRegionalData)}
        sortingBy={regionalState.sorting.summary.by}
        sortingValue={regionalState.sorting.summary.value}
        onClick={sortingClickHandler}
        labels={labels}
        isSummary={true}
      />
    </div>
  );
};

export default SummaryRegionalData;
