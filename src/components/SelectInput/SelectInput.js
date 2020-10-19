import React from "react";
import "./SelectInput.css";

import Select from "react-select";

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    backgroundColor: "rgb(245, 245, 255)",
    color: "black",

    ":hover": {
      backgroundColor: "rgb(31, 124, 185)",
      color: "white",
      cursor: "pointer",
    },
  }),
  control: (provided, state) => ({
    ...provided,
    backgroundColor: "rgb(245, 245, 255)",
    cursor: "pointer",
    border: "1px solid rgb(0, 0, 0, 0.2)",
    boxShadow: "none",

    ":hover": {
      border: "1px solid rgb(0, 0, 0, 0.2)",
    },
  }),

  menu: (provided, state) => ({
    ...provided,
    backgroundColor: "rgb(245, 245, 255)",
    cursor: "pointer",
  }),
};

const SelectInput = (props) => {
  return (
    <div className="select-container">
      <Select
        className="select"
        styles={customStyles}
        options={props.options}
        defaultValue={props.defaultValue}
        onChange={props.onChange}
        placeholder="Seleziona..."
      />
    </div>
  );
};

export default SelectInput;
