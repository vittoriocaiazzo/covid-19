import React, { useEffect } from "react";

import "./Pages.css";

import CurrentNationalData from "../containers/Current/CurrentNationalData";
import CurrentRegionalData from "../containers/Current/CurrentRegionalData";
import CurrentGraphData from "../containers/Current/CurrentGraphData";
import Footer from "../components/Footer/Footer";

const Current = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      <CurrentNationalData />
      <CurrentRegionalData />
      <CurrentGraphData />
      <Footer />
    </div>
  );
};

export default Current;
