import alert from "../styles/icons/alert.png";
import sad from "../styles/icons/sad.png";
import happiness from "../styles/icons/happiness.png";
import graph from "../styles/icons/graph.png";

const summaryCardStyles = [
  {
    firstLabel: "nuovi positivi",
    secondLabel: "totale casi",
    color: "summary-orange",
    isNegative: true,
    icon: alert,
  },
  {
    firstLabel: "nuovi deceduti",
    secondLabel: "totale deceduti",
    color: "summary-red",
    isNegative: true,
    icon: sad,
  },
  {
    firstLabel: "nuovi guariti",
    secondLabel: "totale guariti",
    color: "summary-green",
    isNegative: false,
    icon: happiness,
  },
  {
    firstLabel: "variazione positivi",
    secondLabel: "attuali positivi",
    color: "summary-orange",
    isNegative: true,
    icon: graph,
  },
];

export default summaryCardStyles;
