import React from "react";
import { useSelector, useDispatch } from "react-redux";

import currentGraphStyles from "../../styles/currentGraphStyles";
import { selectCurrentGraphData } from "../../store/selectors/nationalSelector";
import { setGraphInput } from "../../store/actions/nationalActions";

import Graphs from "../../components/Graphs/Graphs";

const CurrentGraphData = () => {
  const currentGraphData = useSelector(selectCurrentGraphData);
  const graphInput = useSelector(
    (state) => state.nationalData.graphInputs.current
  );
  const dispatch = useDispatch();

  const changeInput = (e, type) => {
    if (e.target.checked)
      dispatch(setGraphInput({ current: { input: e.target.name, type } }));
  };

  return (
    <Graphs
      data={currentGraphData}
      graphInput={graphInput}
      inputs={currentGraphStyles}
      onChange={changeInput}
    />
  );
};

export default CurrentGraphData;
