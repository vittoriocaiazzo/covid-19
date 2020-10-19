import React from "react";
import { useSelector } from "react-redux";

import "../Containers.css";
import labels from "../../styles/total-labels.json";
import { selectCurrentNationalData } from "../../store/selectors/nationalSelector";

import SimpleCards from "../../components/Cards/SimpleCards/SimpleCards";

const CurrentNationalData = () => {
  const currentNationalData = useSelector(selectCurrentNationalData);
  return (
    <SimpleCards
      data={currentNationalData[0]}
      yesterday={currentNationalData[1]}
      labels={labels}
      todaysData={false}
    />
  );
};

export default CurrentNationalData;
