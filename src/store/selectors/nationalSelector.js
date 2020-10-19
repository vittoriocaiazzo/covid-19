import { createSelector } from "reselect";

import * as dataHelper from "../../helpers/data-helpers/nationalData";

// data selector
const getData = (state) => state.nationalData.data;

// select today data
export const selectTodaysNationalData = createSelector(getData, (data) =>
  dataHelper.buildTodaysNationalData(data)
);

// select current data
export const selectCurrentNationalData = createSelector(getData, (data) =>
  dataHelper.buildCurrentNationalData(data)
);

// select and sort historical data
const selectHistoricalNationalData = createSelector(getData, (data) =>
  dataHelper.buildHistoricalNationalData(data)
);

export const selectSortedHistoricalData = createSelector(
  (state) => state.nationalData.sorting.historical,
  selectHistoricalNationalData,
  (sorting, historicalNationalData) => {
    switch (sorting.by) {
      case "DESC":
        return historicalNationalData.sort((a, b) =>
          a[sorting.value] < b[sorting.value] ? 1 : -1
        );
      case "ASC":
        return historicalNationalData.sort((a, b) =>
          a[sorting.value] < b[sorting.value] ? -1 : 1
        );
      default:
        return [];
    }
  }
);

// select summary data
export const selectSummaryNationalData = createSelector(getData, (data) => {
  return dataHelper.buildSummaryNationalData(data);
});

// select graph data for summary
export const selectSummaryGraphData = createSelector(
  getData,
  (state) => state.nationalData.graphInputs.summary,
  (data, graphInput) => {
    switch (graphInput.type) {
      case "Bar":
        return dataHelper.buildHistoricalGraphDataForToday(
          data,
          graphInput.input
        );
      case "Area":
        return dataHelper.buildHistoricalGraphDataForCurrent(
          data,
          graphInput.input
        );
      default:
        return [];
    }
  }
);

// select graph data for today
export const selectTodaysGraphData = createSelector(
  getData,
  (state) => state.nationalData.graphInputs.today,
  (data, graphInput) => {
    return dataHelper.buildHistoricalGraphDataForToday(data, graphInput.input);
  }
);

// select graph data for current
export const selectCurrentGraphData = createSelector(
  getData,
  (state) => state.nationalData.graphInputs.current,
  (data, graphInput) => {
    return dataHelper.buildHistoricalGraphDataForCurrent(
      data,
      graphInput.input
    );
  }
);
