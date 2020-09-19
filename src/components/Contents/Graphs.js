import React, { useEffect } from "react";
import "./Content.css";

import GraphsComingSoon from "../../containers/Graphs/GraphsComingSoon";

const Graphs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="content">
      <GraphsComingSoon />
    </div>
  );
};

export default Graphs;
