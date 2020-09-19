import React from "react";
import "./Menu.css";

import MenuItem from "./MenuItem";

const MenuItems = (props) => {
  const menuItems = [
    "dati odierni",
    "dati attuali",
    "storico dati",
    "dati mondiali",
    "grafici",
  ];
  return (
    <ul className="menu__items">
      {menuItems.map((item) => (
        <MenuItem key={item} onClick={props.onClick}>
          {item}
        </MenuItem>
      ))}
    </ul>
  );
};

export default MenuItems;
