const tableData = (dayAfter, dayBefore) => {
  return {
    denominazione_provincia: dayAfter.denominazione_provincia,
    nuovi_positivi: dayAfter.totale_casi - dayBefore.totale_casi,
  };
};

const dailyData = (dayAfter, dayBefore) => {
  return {
    regione: dayAfter.denominazione_regione,
    denominazione_provincia: dayAfter.denominazione_provincia,
    nuovi_positivi: dayAfter.totale_casi - dayBefore.totale_casi,
  };
};

const currentData = (data) => {
  return {
    regione: data.denominazione_regione,
    denominazione_provincia: data.denominazione_provincia,
    totale_casi: data.totale_casi,
  };
};

const historicalData = (dayAfter, dayBefore) => {
  return {
    data: dayAfter.data,
    totale_casi: dayAfter.totale_casi,
    nuovi_positivi: dayBefore
      ? dayAfter.totale_casi - dayBefore.totale_casi
      : dayAfter.totale_casi,
  };
};

export const buildSummaryProvincialData = (data) => {
  const lastDate = data[data.length - 1].data;
  const currentProvincialData = data.filter((el) => el.data === lastDate);

  return currentProvincialData
    .map((el) =>
      tableData(el, data[data.indexOf(el) - currentProvincialData.length])
    )
    .filter(
      (el) =>
        el.denominazione_provincia !== "In fase di definizione/aggiornamento" &&
        el.denominazione_provincia !== "Fuori Regione / Provincia Autonoma"
    )
    .sort((a, b) => (a.nuovi_positivi < b.nuovi_positivi ? 1 : -1));
};

export const buildTodaysProvincialData = (data) => {
  const lastDate = data[data.length - 1].data;
  const currentProvincialData = data.filter((el) => el.data === lastDate);

  return currentProvincialData
    .map((el) =>
      dailyData(el, data[data.indexOf(el) - currentProvincialData.length])
    )

    .sort((a, b) => (a.nuovi_positivi < b.nuovi_positivi ? 1 : -1))
    .sort((a, b) => (a.regione < b.regione ? -1 : 1));
};

export const buildTotalProvincialData = (data) => {
  const lastDate = data[data.length - 1].data;
  const provincialData = data.filter((el) => el.data === lastDate);

  return provincialData
    .map((el) => currentData(el))
    .sort((a, b) => (a.totale_casi < b.totale_casi ? 1 : -1))
    .sort((a, b) => (a.regione < b.regione ? -1 : 1));
};

export const buildHistoricalProvincialData = (data, provinceFilter) => {
  const historicalProvinceData = data.filter(
    (el) => el.denominazione_provincia === provinceFilter
  );
  return historicalProvinceData.map((el, index) =>
    historicalData(el, historicalProvinceData[index - 1])
  );
};
