import React, { useEffect } from "react";
import "./Content.css";

import HistoricalNationalData from "../../containers/Historical/HistoricalNationalData";
import HistoricalRegionalData from "../../containers/Historical/HistoricalRegionalData";
import HistoricalProvincialData from "../../containers/Historical/HistoricalProvincialData";
import Footer from "../Footer/Footer";

const Historical = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="content">
      <HistoricalNationalData />
      <HistoricalRegionalData />
      <HistoricalProvincialData />
      <Footer />
    </div>
  );
};

export default Historical;
