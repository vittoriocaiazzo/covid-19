import React from "react";
import { useSelector } from "react-redux";

import { selectSummaryNationalData } from "../../store/selectors/nationalSelector";
import summaryCardStyles from "../../styles/summaryCardStyles";

import SummaryCards from "../../components/Cards/SummaryCards/SummaryCards";

const SummaryNationalData = () => {
  const summaryNationalData = useSelector(selectSummaryNationalData);
  return <SummaryCards data={summaryNationalData} styles={summaryCardStyles} />;
};

export default SummaryNationalData;
