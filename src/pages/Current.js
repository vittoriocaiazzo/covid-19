import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import "./Pages.css";

import UpdateTime from "../components/UpdateTime/UpdateTime";
import CurrentNationalData from "../containers/Current/CurrentNationalData";
import CurrentRegionalData from "../containers/Current/CurrentRegionalData";
import CurrentGraphData from "../containers/Current/CurrentGraphData";
import Footer from "../components/Footer/Footer";

const Current = () => {
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
      <CurrentNationalData />
      <UpdateTime>{regionalUpdateTime}</UpdateTime>
      <CurrentRegionalData />
      <CurrentGraphData />
      <Footer />
    </div>
  );
};

export default Current;
