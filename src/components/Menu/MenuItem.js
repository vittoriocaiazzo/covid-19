import React from "react";
import "./Menu.css";
import { NavLink } from "react-router-dom";

const MenuItem = (props) => {
  return (
    <li className="menu__item">
      <NavLink
        to={`/covid-19/${props.children}`}
        className="menu__link"
        onClick={props.onClick}
      >
        <img className="menu__icon" alt="" src={props.icon} />
        <span className="menu__span">{props.children}</span>
      </NavLink>
    </li>
  );
};

export default MenuItem;
