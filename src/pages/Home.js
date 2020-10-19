import React, { useEffect } from "react";

import "./Pages.css";

import SummaryNationalData from "../containers/Home/SummaryNationalData";
import SummaryNationalGraphData from "../containers/Home/SummaryNationalGraphData";
import SummaryRegionalData from "../containers/Home/SummaryRegionalData";
import SummaryProvincialData from "../containers/Home/SummaryProvincialData";
import Footer from "../components/Footer/Footer";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      <SummaryNationalData />
      <SummaryRegionalData />
      <SummaryProvincialData />
      <SummaryNationalGraphData />
      <Footer />
    </div>
  );
};

export default Home;
