import React from "react";

import "./Graphs.css";
import Graph from "./Graph";

const Graphs = (props) => {
  return (
    <div className="graphs">
      <div className="graphs__inputs">
        {Object.keys(props.inputs).map((key) => (
          <div key={key}>
            <label className="graphs__label">
              <input
                className="graphs__input"
                type="checkbox"
                name={key}
                checked={key === props.graphInput.input}
                onChange={(e) => props.onChange(e, props.inputs[key].type)}
              />
              {props.inputs[key].label}
            </label>
          </div>
        ))}
      </div>
      <Graph
        data={props.data}
        graphInput={props.graphInput}
        label={props.inputs[props.graphInput.input].label}
        color={props.inputs[props.graphInput.input].color}
      />
    </div>
  );
};

export default Graphs;
