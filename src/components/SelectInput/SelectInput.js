import React from "react";
import "./SelectInput.css";

import Select from "react-select";

const SelectInput = (props) => {
  return (
    <div className="select-container">
      <Select
        className="select"
        options={props.options}
        defaultValue={props.defaultValue}
        onChange={props.onChange}
        placeholder="Seleziona..."
      />
    </div>
  );
};

export default SelectInput;
