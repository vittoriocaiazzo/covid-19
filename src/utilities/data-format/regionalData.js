const dailyData = (dayAfter, dayBefore) => {
  return {
    regione: dayAfter.denominazione_regione,
    nuovi_positivi: dayAfter.nuovi_positivi,
    deceduti: dayAfter.deceduti - dayBefore.deceduti,
    dimessi_guariti: dayAfter.dimessi_guariti - dayBefore.dimessi_guariti,
    variazione_totale_positivi: dayAfter.variazione_totale_positivi,

    totale_ospedalizzati:
      dayAfter.totale_ospedalizzati - dayBefore.totale_ospedalizzati,
    ricoverati_con_sintomi:
      dayAfter.ricoverati_con_sintomi - dayBefore.ricoverati_con_sintomi,
    terapia_intensiva: dayAfter.terapia_intensiva - dayBefore.terapia_intensiva,
    isolamento_domiciliare:
      dayAfter.isolamento_domiciliare - dayBefore.isolamento_domiciliare,

    tamponi: dayAfter.tamponi - dayBefore.tamponi,
    casi_testati: dayAfter.casi_testati - dayBefore.casi_testati,
    casi_da_sospetto_diagnostico:
      dayAfter.casi_da_sospetto_diagnostico -
      dayBefore.casi_da_sospetto_diagnostico,
    casi_da_screening: dayAfter.casi_da_screening - dayBefore.casi_da_screening,
  };
};

const currentData = (data) => {
  return {
    regione: data.denominazione_regione,
    totale_casi: data.totale_casi,
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

export const buildTodaysRegionalData = (data) => {
  const currentDay = data.slice(data.length - 21, data.length);
  const previousDay = data.slice(data.length - 42, data.length - 21);

  return currentDay.map((el, index) => dailyData(el, previousDay[index]));
};

export const buildCurrentRegionalData = (data) => {
  const currentDay = data.slice(data.length - 21, data.length);

  return currentDay.map((el) => currentData(el));
};

export const buildHistoricalRegionalData = (data, regionFilter) => {
  return data
    .filter((el) => el.denominazione_regione === regionFilter)
    .map((el) => historicalData(el));
};
