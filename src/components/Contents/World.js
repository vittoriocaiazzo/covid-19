import React, { useEffect } from "react";
import "./Content.css";

import WorldComingSoon from "../../containers/World/WorldComingSoon";

const World = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="content">
      <WorldComingSoon />
    </div>
  );
};

export default World;
