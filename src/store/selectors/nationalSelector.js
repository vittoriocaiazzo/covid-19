import { createSelector } from "reselect";

import * as data from "../../utilities/data-format/nationalData";
import { filters } from "../actions/nationalActions";

export const getFilteredNationalData = createSelector(
  (state) => state.nationalData.data,
  (_, props) => props.filter,
  (nationalData, filter) => {
    switch (filter) {
      case filters.SHOW_TODAYS_NATIONAL_DATA:
        return data.buildTodaysNationalData(nationalData);

      case filters.SHOW_CURRENT_NATIONAL_DATA:
        return data.buildCurrentNationalData(nationalData);

      case filters.SHOW_HISTORICAL_NATIONAL_DATA:
        return data.buildHistoricalNationalData(nationalData);

      default:
        return [];
    }
  }
);

const getSorting = (state) => state.nationalData.sorting;
export const getFilteredAndSortedNationalData = createSelector(
  (state, props) => getFilteredNationalData(state, props),
  getSorting,
  (_, props) => props.sortingKey,
  (filteredNationalData, sorting, sortingKey) => {
    switch (sorting[sortingKey].by) {
      case "DESC":
        return filteredNationalData.sort((a, b) =>
          a[sorting[sortingKey].value] < b[sorting[sortingKey].value] ? 1 : -1
        );
      case "ASC":
        return filteredNationalData.sort((a, b) =>
          a[sorting[sortingKey].value] < b[sorting[sortingKey].value] ? -1 : 1
        );
      default:
        return [];
    }
  }
);

export const getGraphData = createSelector(
  (state) => state.nationalData.data,
  (_, props) => props.graphDataKey,
  (_, props) => props.type,
  (nationalData, graphDataKey, type) => {
    switch (type) {
      case "TODAY":
        return data.buildHistoricalGraphDataForToday(
          nationalData,
          graphDataKey
        );

      case "CURRENT":
        return data.buildHistoricalGraphDataForCurrent(
          nationalData,
          graphDataKey
        );

      default:
        return [];
    }
  }
);
