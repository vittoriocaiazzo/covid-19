import React from "react";
import { useSelector, useDispatch } from "react-redux";

import todaysGraphStyles from "../../styles/todaysGraphStyles";
import { selectTodaysGraphData } from "../../store/selectors/nationalSelector";
import { setGraphInput } from "../../store/actions/nationalActions";

import Graphs from "../../components/Graphs/Graphs";

const TodaysGraphData = () => {
  const todaysGraphData = useSelector(selectTodaysGraphData);
  const graphInput = useSelector(
    (state) => state.nationalData.graphInputs.today
  );
  const dispatch = useDispatch();

  const changeInput = (e, type) => {
    if (e.target.checked)
      dispatch(setGraphInput({ today: { input: e.target.name, type } }));
  };

  return (
    <Graphs
      data={todaysGraphData}
      graphInput={graphInput}
      inputs={todaysGraphStyles}
      onChange={changeInput}
    />
  );
};

export default TodaysGraphData;
