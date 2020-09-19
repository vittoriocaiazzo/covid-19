import React, { useEffect } from "react";
import "./Content.css";

import TodaysNationalData from "../../containers/Today/TodaysNationalData";
import TodaysRegionalData from "../../containers/Today/TodaysRegionalData";
import TodaysProvincialData from "../../containers/Today/TodaysProvincialData";
import Footer from "../Footer/Footer";

const Today = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="content">
      <TodaysNationalData />
      <TodaysRegionalData />
      <TodaysProvincialData />
      <Footer />
    </div>
  );
};

export default Today;
