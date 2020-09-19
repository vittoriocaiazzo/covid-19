import React, { useEffect } from "react";
import "./Content.css";

import CurrentNationalData from "../../containers/Current/CurrentNationalData";
import CurrentRegionalData from "../../containers/Current/CurrentRegionalData";
import CurrentProvincialData from "../../containers/Current/CurrentProvincialData";
import Footer from "../Footer/Footer";

const Current = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="content">
      <CurrentNationalData />
      <CurrentRegionalData />
      <CurrentProvincialData />
      <Footer />
    </div>
  );
};

export default Current;
