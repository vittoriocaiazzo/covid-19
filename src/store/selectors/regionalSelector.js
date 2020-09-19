import { createSelector } from "reselect";

import * as data from "../../utilities/data-format/regionalData";
import { filters } from "../actions/regionalActions";

const getRegionalFilter = (state) => state.regionalData.regionFilter;
const getFilteredRegionalData = createSelector(
  (state) => state.regionalData.data,
  getRegionalFilter,
  (_, props) => props.filter,
  (regionalData, regionFilter, filter) => {
    switch (filter) {
      case filters.SHOW_TODAYS_REGIONAL_DATA:
        return data.buildTodaysRegionalData(regionalData);

      case filters.SHOW_CURRENT_REGIONAL_DATA:
        return data.buildCurrentRegionalData(regionalData);

      case filters.SHOW_HISTORICAL_REGIONAL_DATA:
        return data.buildHistoricalRegionalData(regionalData, regionFilter);

      default:
        return [];
    }
  }
);

const getSorting = (state) => state.regionalData.sorting;
export const getFilteredAndSortedRegionalData = createSelector(
  (state, props) => getFilteredRegionalData(state, props),
  getSorting,
  (_, props) => props.sortingKey,
  (filteredRegionalData, sorting, sortingKey) => {
    switch (sorting[sortingKey].by) {
      case "DESC":
        return filteredRegionalData.sort((a, b) =>
          a[sorting[sortingKey].value] > b[sorting[sortingKey].value] ? -1 : 1
        );
      case "ASC":
        return filteredRegionalData.sort((a, b) =>
          a[sorting[sortingKey].value] > b[sorting[sortingKey].value] ? 1 : -1
        );
      default:
        return [];
    }
  }
);

export const getRegionList = createSelector(
  (state) => state.regionalData.data,
  (regionalData) => {
    return regionalData
      .slice(regionalData.length - 21, regionalData.length)
      .map((el) => el.denominazione_regione);
  }
);
