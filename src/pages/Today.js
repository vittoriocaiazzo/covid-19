import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import "./Pages.css";

import UpdateTime from "../components/UpdateTime/UpdateTime";
import TodaysNationalData from "../containers/Today/TodaysNationalData";
import TodaysRegionalData from "../containers/Today/TodaysRegionalData";
import TodaysGraphData from "../containers/Today/TodaysGraphData";
import Footer from "../components/Footer/Footer";

const Today = () => {
  const nationalUpdateTime = useSelector(
    (state) => state.nationalData.updateTime
  );
  const regionalUpdateTime = useSelector(
    (state) => state.regionalData.updateTime
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      <UpdateTime>{nationalUpdateTime}</UpdateTime>
      <TodaysNationalData />
      <UpdateTime>{regionalUpdateTime}</UpdateTime>
      <TodaysRegionalData />
      <TodaysGraphData />
      <Footer />
    </div>
  );
};

export default Today;
