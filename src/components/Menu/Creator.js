import React from "react";

import { ReactComponent as Github } from "../../styles/icons/github.svg";
import { ReactComponent as Linkedin } from "../../styles/icons/linkedin.svg";

const Creator = () => {
  return (
    <div className="creator">
      <a
        href="https://github.com/VittoVitto88"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github className="creator__icon github" />
      </a>
      <a
        href="https://www.linkedin.com/in/vittorio-caiazzo-54781150/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Linkedin className="creator__icon linkedin" />
      </a>
    </div>
  );
};

export default Creator;
