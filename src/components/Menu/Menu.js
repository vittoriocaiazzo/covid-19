import React from "react";

import MenuItems from "./MenuItems";
import Creator from "./Creator";

const Menu = (props) => {
  return (
    <>
      {props.showMenu && (
        <div className="menu-backdrop" onClick={props.onClick}></div>
      )}
      <nav className={props.showMenu ? "menu" : "menu menu--hidden"}>
        <MenuItems onClick={props.onClick} />
        <Creator />
      </nav>
    </>
  );
};

export default Menu;
