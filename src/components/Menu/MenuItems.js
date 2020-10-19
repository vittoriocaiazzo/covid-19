import React from "react";
import "./Menu.css";

import MenuItem from "./MenuItem";
import menuIcons from "../../styles/menuIcons";

const MenuItems = (props) => {
  const menuItems = ["dati odierni", "dati attuali", "storico dati"];
  return (
    <ul className="menu__items">
      {menuItems.map((item, index) => (
        <MenuItem key={item} onClick={props.onClick} icon={menuIcons[index]}>
          {item}
        </MenuItem>
      ))}
    </ul>
  );
};

export default MenuItems;
