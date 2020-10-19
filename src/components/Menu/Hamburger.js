import React from "react";
import "./Menu.css";

import { ReactComponent as HamburgerIcon } from "../../styles/icons/hamburger.svg";

const Hamburger = (props) => {
  return (
    <div className="hamburger-container" onClick={props.onClick}>
      <HamburgerIcon className="hamburger-container__hamburger-icon">
        <path className="hamburger-container__hamburger-icon-path" />
      </HamburgerIcon>
    </div>
  );
};

export default Hamburger;
