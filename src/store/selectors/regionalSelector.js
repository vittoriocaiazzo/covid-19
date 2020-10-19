import { createSelector } from "reselect";

import * as dataHelper from "../../helpers/data-helpers/regionalData";

// data selector
const getData = (state) => state.regionalData.data;

// select and sort today data
const selectTodaysRegionalData = createSelector(getData, (data) =>
  dataHelper.buildTodaysRegionalData(data)
);

export const selectSortedTodaysRegionalData = createSelector(
  (state) => state.regionalData.sorting.today,
  selectTodaysRegionalData,
  (sorting, todaysRegionalData) => {
    switch (sorting.by) {
      case "DESC":
        return todaysRegionalData.sort((a, b) =>
          a[sorting.value] > b[sorting.value] ? -1 : 1
        );
      case "ASC":
        return todaysRegionalData.sort((a, b) =>
          a[sorting.value] > b[sorting.value] ? 1 : -1
        );
      default:
        return [];
    }
  }
);

// select and sort current data
const selectCurrentRegionalData = createSelector(getData, (data) =>
  dataHelper.buildCurrentRegionalData(data)
);

export const selectSortedCurrentRegionalData = createSelector(
  (state) => state.regionalData.sorting.current,
  selectCurrentRegionalData,
  (sorting, currentRegionalData) => {
    switch (sorting.by) {
      case "DESC":
        return currentRegionalData.sort((a, b) =>
          a[sorting.value] > b[sorting.value] ? -1 : 1
        );
      case "ASC":
        return currentRegionalData.sort((a, b) =>
          a[sorting.value] > b[sorting.value] ? 1 : -1
        );
      default:
        return [];
    }
  }
);

// select and sort historical data
const selectHistoricalRegionalData = createSelector(
  (state) => state.regionalData.regionFilter,
  getData,
  (regionFilter, data) =>
    dataHelper.buildHistoricalRegionalData(data, regionFilter)
);

export const selectSortedHistoricalRegionalData = createSelector(
  (state) => state.regionalData.sorting.historical,
  selectHistoricalRegionalData,
  (sorting, historicalRegionalData) => {
    switch (sorting.by) {
      case "DESC":
        return historicalRegionalData.sort((a, b) =>
          a[sorting.value] > b[sorting.value] ? -1 : 1
        );
      case "ASC":
        return historicalRegionalData.sort((a, b) =>
          a[sorting.value] > b[sorting.value] ? 1 : -1
        );
      default:
        return [];
    }
  }
);

// select and sort summary data
const selectSummaryRegionalData = createSelector(
  selectTodaysRegionalData,
  (todaysRegionalData) => {
    return todaysRegionalData.map((el) => {
      return {
        regione: el.regione,
        nuovi_positivi: el.nuovi_positivi,
        deceduti: el.deceduti,
        dimessi_guariti: el.dimessi_guariti,
        variazione_totale_positivi: el.variazione_totale_positivi,
      };
    });
  }
);

export const selectSortedSummaryRegionalData = createSelector(
  selectSummaryRegionalData,
  (state) => state.regionalData.sorting.summary,
  (summaryRegionalData, sorting) => {
    switch (sorting.by) {
      case "DESC":
        return summaryRegionalData.sort((a, b) =>
          a[sorting.value] > b[sorting.value] ? -1 : 1
        );
      case "ASC":
        return summaryRegionalData.sort((a, b) =>
          a[sorting.value] > b[sorting.value] ? 1 : -1
        );
      default:
        return [];
    }
  }
);

// get region list
export const getRegionList = createSelector(
  (state) => state.regionalData.data,
  (regionalData) => {
    return regionalData
      .slice(regionalData.length - 21, regionalData.length)
      .map((el) => el.denominazione_regione);
  }
);
