import { createSelector } from "reselect";

import * as dataHelper from "../../helpers/data-helpers/provincialData";

// data selector
const getData = (state) => state.provincialData.data;

// // live search filter provinces function (no implemented)
// const filterData = (data, searchFilter) => {
//   Object.keys(data).forEach((key) => {
//     data[key] = data[key].filter(
//       (el) =>
//         el.denominazione_regione
//           .toLowerCase()
//           .includes(searchFilter.toLowerCase()) ||
//         el.denominazione_provincia
//           .toLowerCase()
//           .includes(searchFilter.toLowerCase())
//     );
//   });
//   return data;
// };

// select and sort summary data
const selectSummaryProvincialData = createSelector(getData, (data) =>
  dataHelper.buildSummaryProvincialData(data)
);
export const selectSortedSummaryProvincialData = createSelector(
  selectSummaryProvincialData,
  (state) => state.provincialData.sorting.summary,
  (summaryProvincialData, sorting) => {
    switch (sorting.by) {
      case "DESC":
        return summaryProvincialData.sort((a, b) =>
          a[sorting.value] > b[sorting.value] ? -1 : 1
        );
      case "ASC":
        return summaryProvincialData.sort((a, b) =>
          a[sorting.value] > b[sorting.value] ? 1 : -1
        );
      default:
        return [];
    }
  }
);

// select, filter and sort today data
const selectTodaysProvincialData = createSelector(getData, (data) =>
  dataHelper.buildTodaysProvincialData(data)
);
const selectFilteredTodaysProvincialData = createSelector(
  selectTodaysProvincialData,
  (state) => state.provincialData.regionFilter,
  (todaysProvincialData, regionFilter) =>
    todaysProvincialData
      .filter((el) => el.regione === regionFilter)
      .map((el) => {
        return {
          denominazione_provincia: el.denominazione_provincia,
          nuovi_positivi: el.nuovi_positivi,
        };
      })
);
export const selectSortedTodaysProvincialDataForRegion = createSelector(
  (state) => state.provincialData.sorting.today,
  selectFilteredTodaysProvincialData,
  (sorting, todaysProvincialData) => {
    switch (sorting.by) {
      case "DESC":
        return todaysProvincialData.sort((a, b) =>
          a[sorting.value] > b[sorting.value] ? -1 : 1
        );
      case "ASC":
        return todaysProvincialData.sort((a, b) =>
          a[sorting.value] > b[sorting.value] ? 1 : -1
        );
      default:
        return [];
    }
  }
);

// select and filter current data
const selectCurrentProvincialData = createSelector(getData, (data) =>
  dataHelper.buildTotalProvincialData(data)
);
const selectFilteredCurrentProvincialData = createSelector(
  selectCurrentProvincialData,
  (state) => state.provincialData.regionFilter,
  (currentProvincialData, regionFilter) =>
    currentProvincialData
      .filter((el) => el.regione === regionFilter)
      .map((el) => {
        return {
          denominazione_provincia: el.denominazione_provincia,
          totale_casi: el.totale_casi,
        };
      })
);
export const selectSortedCurrentProvincialDataForRegion = createSelector(
  (state) => state.provincialData.sorting.current,
  selectFilteredCurrentProvincialData,
  (sorting, currentProvincialData) => {
    switch (sorting.by) {
      case "DESC":
        return currentProvincialData.sort((a, b) =>
          a[sorting.value] > b[sorting.value] ? -1 : 1
        );
      case "ASC":
        return currentProvincialData.sort((a, b) =>
          a[sorting.value] > b[sorting.value] ? 1 : -1
        );
      default:
        return [];
    }
  }
);

// select and sort historical data
const selectHistoricalProvincialData = createSelector(
  getData,
  (state) => state.provincialData.historicalFilter,
  (provincialData, historicalFilter) => {
    const filteredProvincialData = dataHelper.buildHistoricalProvincialData(
      provincialData,
      historicalFilter
    );
    return filteredProvincialData;
  }
);
export const selectSortedHistoricalProvincialData = createSelector(
  selectHistoricalProvincialData,
  (state) => state.provincialData.sorting.historical,
  (historicalProvincialData, sorting) => {
    switch (sorting.by) {
      case "DESC":
        return historicalProvincialData.sort((a, b) =>
          a[sorting.value] > b[sorting.value] ? -1 : 1
        );
      case "ASC":
        return historicalProvincialData.sort((a, b) =>
          a[sorting.value] > b[sorting.value] ? 1 : -1
        );
      default:
        return [];
    }
  }
);

// get province list
export const getProvinceList = createSelector(getData, (provincialData) => {
  if (provincialData.length === 0) return [];

  const lastDate = provincialData[provincialData.length - 1].data;
  return provincialData
    .filter(
      (el) =>
        el.data === lastDate &&
        el.denominazione_provincia !== "Fuori Regione / Provincia Autonoma" &&
        el.denominazione_provincia !== "In fase di definizione/aggiornamento"
    )
    .map((el) => el.denominazione_provincia)
    .sort((a, b) => (a > b ? 1 : -1));
});
