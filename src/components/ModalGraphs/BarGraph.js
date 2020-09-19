import React from "react";
import "./ModalGraphs.css";

import { useSelector } from "react-redux";
import { Bar } from "react-chartjs-2";

import { getGraphData } from "../../store/selectors/nationalSelector";

import { ReactComponent as CloseGraph } from "../../icons/cancel-circle.svg";

import { dateFormat } from "../../utilities/utilities";

const graphOptions = {
  maintainAspectRatio: false,
  tooltips: {
    position: "average",
    titleFontSize: 14,
    bodyFontSize: 14,
  },
  legend: {
    labels: {
      fontColor: "#1175b8",
      fontSize: 14,
    },
  },
  scales: {
    xAxes: [
      {
        gridLines: { color: "transparent", borderDash: [20, 5] },
        ticks: { fontColor: "rgb(100,100,100)", fontSize: 9 },
      },
    ],
    yAxes: [
      {
        gridLines: { color: "rgb(235,235,235)", borderDash: [20, 5] },
        ticks: { fontColor: "rgb(100,100,100)", fontSize: 9 },
      },
    ],
  },
};

const BarGraph = (props) => {
  const nationalGraphData = useSelector((state) => getGraphData(state, props));

  console.log(props.graphDataKey);

  const chart = {
    labels: nationalGraphData.map((el) => dateFormat(el.data)),
    datasets: [
      {
        label: props.graphDataKey
          .replace(new RegExp("_", "g"), " ")
          .toUpperCase(),
        data: nationalGraphData.map((el) =>
          props.graphDataKey.includes("deceduti")
            ? el[props.graphDataKey] < 0
              ? 0
              : el[props.graphDataKey]
            : el[props.graphDataKey]
        ),
        backgroundColor: props.graphDataKey.includes("deceduti")
          ? "rgb(255, 0, 0)"
          : props.graphDataKey.includes("guariti")
          ? "rgb(0, 185, 0)"
          : "rgb(60, 60, 60)",
      },
    ],
  };

  return (
    <>
      <div className="backdrop" onClick={props.onClick} />
      <div className="bar-graph">
        <CloseGraph className="close-graph" onClick={props.onClick} />
        <div className="graph-container">
          <Bar data={chart} options={graphOptions} />
        </div>
      </div>
    </>
  );
};

export default BarGraph;
