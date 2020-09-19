import { createSelector } from "reselect";

import * as data from "../../utilities/data-format/provincialData";
import { filters } from "../actions/provincialActions";

const getProvinceFilter = (state) => state.provincialData.filter;
const getHistoricalProvinceFilter = (state) =>
  state.provincialData.historicalFilter;

export const getFilteredProvincialData = createSelector(
  (state) => state.provincialData.data,
  getHistoricalProvinceFilter,
  (_, props) => props.filter,
  (provincialData, historicalProvinceFilter, filter) => {
    switch (filter) {
      case filters.SHOW_TODAYS_PROVINCIAL_DATA:
        return data.buildTodaysProvincialData(provincialData);

      case filters.SHOW_TOTAL_PROVINCIAL_DATA:
        return data.buildTotalProvincialData(provincialData);

      case filters.SHOW_HISTORICAL_PROVINCIAL_DATA:
        return data.buildHistoricalProvincialData(
          provincialData,
          historicalProvinceFilter
        );

      default:
        return provincialData;
    }
  }
);

export const getFilteredProvincialDataWithProvinceFilter = createSelector(
  (state, props) => getFilteredProvincialData(state, props),
  getProvinceFilter,
  (filteredProvincialData, provinceFilter) => {
    const filteredProvincialDataWithProvinceFilter = {
      ...filteredProvincialData,
    };

    Object.keys(filteredProvincialDataWithProvinceFilter).forEach((key) => {
      filteredProvincialDataWithProvinceFilter[
        key
      ] = filteredProvincialDataWithProvinceFilter[key].filter(
        (el) =>
          el.denominazione_regione
            .toLowerCase()
            .includes(provinceFilter.toLowerCase()) ||
          el.denominazione_provincia
            .toLowerCase()
            .includes(provinceFilter.toLowerCase())
      );
    });

    return filteredProvincialDataWithProvinceFilter;
  }
);

export const getHistoricalProvincialData = createSelector(
  (state, props) => getFilteredProvincialData(state, props),
  (filteredProvincialData) => {
    return filteredProvincialData.sort((a, b) => (a.data < b.data ? 1 : -1));
  }
);

export const getProvinceList = createSelector(
  (state) => state.provincialData.data,
  (provincialData) => {
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
  }
);
