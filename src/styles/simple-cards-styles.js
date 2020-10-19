import alert from "../styles/icons/alert.png";
import sad from "../styles/icons/sad.png";
import happy from "../styles/icons/happy.png";
import graph from "../styles/icons/graph.png";
import hospital from "../styles/icons/hospital.png";
import ambulance from "../styles/icons/ambulance.png";
import hospitalBed from "../styles/icons/hospital-bed.png";
import thermometer from "../styles/icons/thermometer.png";
import test from "../styles/icons/test.png";

const simpleCardsStyle = {
  nuovi_positivi: {
    color: "simple-orange",
    icon: alert,
  },
  totale_casi: {
    color: "simple-orange",
    icon: alert,
  },
  deceduti: {
    color: "simple-red",
    icon: sad,
  },
  dimessi_guariti: {
    color: "simple-green",
    icon: happy,
  },
  variazione_totale_positivi: {
    color: "simple-orange",
    icon: graph,
  },
  totale_positivi: {
    color: "simple-orange",
    icon: graph,
  },

  totale_ospedalizzati: {
    color: "simple-purple",
    icon: ambulance,
  },
  ricoverati_con_sintomi: {
    color: "simple-purple",
    icon: hospital,
  },
  terapia_intensiva: {
    color: "simple-purple",
    icon: hospitalBed,
  },
  isolamento_domiciliare: {
    color: "simple-purple",
    icon: thermometer,
  },

  tamponi: {
    color: "simple-blue",
    icon: test,
  },
  casi_testati: {
    color: "simple-blue",
    icon: test,
  },
  casi_da_sospetto_diagnostico: {
    color: "simple-blue",
    icon: test,
  },
  casi_da_screening: {
    color: "simple-blue",
    icon: test,
  },
};

export default simpleCardsStyle;
