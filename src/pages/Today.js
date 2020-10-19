import React, { useEffect } from "react";

import "./Pages.css";

import TodaysNationalData from "../containers/Today/TodaysNationalData";
import TodaysRegionalData from "../containers/Today/TodaysRegionalData";
import TodaysGraphData from "../containers/Today/TodaysGraphData";
import Footer from "../components/Footer/Footer";

const Today = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      <TodaysNationalData />
      <TodaysRegionalData />
      <TodaysGraphData />
      <Footer />
    </div>
  );
};

export default Today;
