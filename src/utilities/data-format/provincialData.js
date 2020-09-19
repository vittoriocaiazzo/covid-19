import _ from "lodash";

const dailyData = (dayAfter, dayBefore) => {
  return {
    denominazione_regione: dayAfter.denominazione_regione,
    denominazione_provincia: dayAfter.denominazione_provincia,
    totale_casi: dayAfter.totale_casi - dayBefore.totale_casi,
  };
};

const currentData = (data) => {
  return {
    denominazione_regione: data.denominazione_regione,
    denominazione_provincia: data.denominazione_provincia,
    totale_casi: data.totale_casi,
  };
};

const historicalData = (dayAfter, dayBefore) => {
  return {
    data: dayAfter.data,
    denominazione_regione: dayAfter.denominazione_regione,
    denominazione_provincia: dayAfter.denominazione_provincia,
    totale_casi: dayAfter.totale_casi,
    nuovi_positivi: dayBefore
      ? dayAfter.totale_casi - dayBefore.totale_casi
      : dayAfter.totale_casi,
  };
};

export const buildTodaysProvincialData = (data) => {
  const lastDate = data[data.length - 1].data;
  const currentProvincialData = data.filter((el) => el.data === lastDate);

  const todaysProvincialData = currentProvincialData.map((el) =>
    dailyData(el, data[data.indexOf(el) - currentProvincialData.length])
  );

  return _.groupBy(todaysProvincialData, (el) => el.denominazione_regione);
};

export const buildTotalProvincialData = (data) => {
  const lastDate = data[data.length - 1].data;
  const provincialData = data.filter((el) => el.data === lastDate);

  const currentProvincialData = provincialData.map((el) => currentData(el));

  return _.groupBy(currentProvincialData, (el) => el.denominazione_regione);
};

export const buildHistoricalProvincialData = (data, provinceFilter) => {
  const historicalProvinceData = data.filter(
    (el) => el.denominazione_provincia === provinceFilter
  );
  return historicalProvinceData.map((el, index) =>
    historicalData(el, historicalProvinceData[index - 1])
  );
};
