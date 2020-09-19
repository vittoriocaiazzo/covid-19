const dailyData = (dayAfter, dayBefore) => {
  return [
    {
      nuovi_positivi: dayAfter.nuovi_positivi,
      deceduti: dayAfter.deceduti - dayBefore.deceduti,
      dimessi_guariti: dayAfter.dimessi_guariti - dayBefore.dimessi_guariti,
      variazione_totale_positivi: dayAfter.variazione_totale_positivi,
    },

    {
      totale_ospedalizzati:
        dayAfter.totale_ospedalizzati - dayBefore.totale_ospedalizzati,
      ricoverati_con_sintomi:
        dayAfter.ricoverati_con_sintomi - dayBefore.ricoverati_con_sintomi,
      terapia_intensiva:
        dayAfter.terapia_intensiva - dayBefore.terapia_intensiva,
      isolamento_domiciliare:
        dayAfter.isolamento_domiciliare - dayBefore.isolamento_domiciliare,
    },

    {
      tamponi: dayAfter.tamponi - dayBefore.tamponi,
      casi_testati: dayAfter.casi_testati - dayBefore.casi_testati,
      casi_da_sospetto_diagnostico:
        dayAfter.casi_da_sospetto_diagnostico -
        dayBefore.casi_da_sospetto_diagnostico,
      casi_da_screening:
        dayAfter.casi_da_screening - dayBefore.casi_da_screening,
    },
  ];
};
const currentData = (data) => {
  return [
    {
      totale_casi: data.totale_casi,
      deceduti: data.deceduti,
      dimessi_guariti: data.dimessi_guariti,
      totale_positivi: data.totale_positivi,
    },

    {
      totale_ospedalizzati: data.totale_ospedalizzati,
      ricoverati_con_sintomi: data.ricoverati_con_sintomi,
      terapia_intensiva: data.terapia_intensiva,
      isolamento_domiciliare: data.isolamento_domiciliare,
    },

    {
      tamponi: data.tamponi,
      casi_testati: data.casi_testati,
      casi_da_sospetto_diagnostico: data.casi_da_sospetto_diagnostico,
      casi_da_screening: data.casi_da_screening,
    },
  ];
};
const historicalData = (data) => {
  return {
    data: data.data,
    totale_casi: data.totale_casi,
    nuovi_positivi: data.nuovi_positivi,
    deceduti: data.deceduti,
    dimessi_guariti: data.dimessi_guariti,
    totale_positivi: data.totale_positivi,
    totale_ospedalizzati: data.totale_ospedalizzati,
    ricoverati_con_sintomi: data.ricoverati_con_sintomi,
    terapia_intensiva: data.terapia_intensiva,
    isolamento_domiciliare: data.isolamento_domiciliare,
    tamponi: data.tamponi,
    casi_testati: data.casi_testati,
    casi_da_sospetto_diagnostico: data.casi_da_sospetto_diagnostico,
    casi_da_screening: data.casi_da_screening,
  };
};

export const buildTodaysNationalData = (data) => {
  const currentDay = data[data.length - 1];
  const previousDay = data[data.length - 2];
  const dayBeforePreviousDay = data[data.length - 3];

  return [
    dailyData(currentDay, previousDay),
    dailyData(previousDay, dayBeforePreviousDay),
  ];
};

export const buildCurrentNationalData = (data) => {
  return [
    currentData(data[data.length - 1]),
    currentData(data[data.length - 2]),
  ];
};

export const buildHistoricalNationalData = (data) => {
  return data.map((el) => historicalData(el));
};

export const buildHistoricalGraphDataForToday = (data, graphDataKey) => {
  if (
    graphDataKey === "nuovi_positivi" ||
    graphDataKey === "variazione_totale_positivi"
  ) {
    const historicalGraphData = data.map((el) => {
      const newEl = { ...el };
      return { data: newEl.data, [graphDataKey]: newEl[graphDataKey] };
    });
    return historicalGraphData;
  } else {
    const historicalGraphData = data.map((el, index) => {
      if (index === 0) {
        const newEl = { ...el };
        return { data: newEl.data, [graphDataKey]: newEl[graphDataKey] };
      } else {
        const todayEl = { ...el };
        const yesterdayEl = { ...data[index - 1] };
        return {
          data: todayEl.data,
          [graphDataKey]: todayEl[graphDataKey] - yesterdayEl[graphDataKey],
        };
      }
    });
    return historicalGraphData;
  }
};

export const buildHistoricalGraphDataForCurrent = (data, graphDataKey) => {
  const historicalGraphData = data.map((el) => {
    const newEl = { ...el };
    return { data: newEl.data, [graphDataKey]: newEl[graphDataKey] };
  });
  return historicalGraphData;
};
