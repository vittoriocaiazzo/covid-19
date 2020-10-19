import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectSummaryGraphData } from "../../store/selectors/nationalSelector";
import { setGraphInput } from "../../store/actions/nationalActions";

import Graphs from "../../components/Graphs/Graphs";

const SummaryNationalGraphData = () => {
  const summaryGraphData = useSelector(selectSummaryGraphData);
  const graphInput = useSelector(
    (state) => state.nationalData.graphInputs.summary
  );
  const dispatch = useDispatch();

  // inputs
  const inputs = {
    nuovi_positivi: {
      label: "NUOVI POSITIVI",
      type: "Bar",
      color: "orange",
    },
    totale_positivi: {
      label: "ATTUALI POSITIVI",
      type: "Area",
      color: "orange",
    },
  };

  const changeInput = (e, type) => {
    if (e.target.checked)
      dispatch(setGraphInput({ summary: { input: e.target.name, type } }));
  };

  return (
    <Graphs
      data={summaryGraphData}
      graphInput={graphInput}
      inputs={inputs}
      onChange={changeInput}
    />
  );
};

export default SummaryNationalGraphData;
