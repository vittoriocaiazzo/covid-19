import React from "react";
import { useSelector } from "react-redux";

import "../Containers.css";
import labels from "../../styles/todays-labels.json";
import { selectTodaysNationalData } from "../../store/selectors/nationalSelector";

import SimpleCards from "../../components/Cards/SimpleCards/SimpleCards";

const TodaysNationalData = () => {
  const todaysNationalData = useSelector(selectTodaysNationalData);
  return (
    <SimpleCards
      data={todaysNationalData[0]}
      yesterday={todaysNationalData[1]}
      labels={labels}
      todaysData={true}
    />
  );
};

export default TodaysNationalData;
