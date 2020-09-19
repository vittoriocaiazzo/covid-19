import React from "react";
import "./ModalGraphs.css";

import { useSelector } from "react-redux";
import { Line } from "react-chartjs-2";

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

const LineGraph = (props) => {
  const nationalGraphData = useSelector((state) => getGraphData(state, props));

  const chart = {
    labels: nationalGraphData.map((el) => dateFormat(el.data)),
    datasets: [
      {
        label: props.graphDataKey
          .replace(new RegExp("_", "g"), " ")
          .toUpperCase(),
        data: nationalGraphData.map((el) => el[props.graphDataKey]),
        backgroundColor: props.graphDataKey.includes("deceduti")
          ? "rgb(255, 0, 0, 0.2)"
          : props.graphDataKey.includes("guariti")
          ? "rgb(0, 185, 0, 0.2)"
          : "rgb(60, 60, 60, 0.2)",
        pointBorderColor: "transparent",
        borderWidth: 1,
        borderColor: props.graphDataKey.includes("deceduti")
          ? "rgb(255, 0, 0)"
          : props.graphDataKey.includes("guariti")
          ? "rgb(0, 185, 0)"
          : "rgb(60, 60, 60)",
        fill: true,
        lineTension: 0,
      },
    ],
  };

  // "rgb(4, 64, 137)"

  return (
    <>
      <div className="backdrop" onClick={props.onClick} />
      <div className="bar-graph">
        <CloseGraph className="close-graph" onClick={props.onClick} />
        <div className="graph-container">
          <Line data={chart} options={graphOptions} />
        </div>
      </div>
    </>
  );
};

export default LineGraph;
