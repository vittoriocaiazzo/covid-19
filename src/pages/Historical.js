import React, { useEffect } from "react";

import "./Pages.css";

import HistoricalNationalData from "../containers/Historical/HistoricalNationalData";
import HistoricalRegionalData from "../containers/Historical/HistoricalRegionalData";
import HistoricalProvincialData from "../containers/Historical/HistoricalProvincialData";
import Footer from "../components/Footer/Footer";

const Historical = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      <HistoricalNationalData />
      <HistoricalRegionalData />
      <HistoricalProvincialData />
      <Footer />
    </div>
  );
};

export default Historical;
