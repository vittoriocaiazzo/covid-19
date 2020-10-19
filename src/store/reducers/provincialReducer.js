import * as actionTypes from "../actions/actionTypes";

const initialState = {
  isLoading: false,
  isLoaded: false,
  data: [],
  searchFilter: "",
  regionFilter: "",
  historicalFilter: "Agrigento",
  sorting: {
    summary: { by: "DESC", value: "nuovi_positivi" },
    historical: { by: "DESC", value: "data" },
    today: { by: "DESC", value: "nuovi_positivi" },
    current: { by: "DESC", value: "totale_casi" },
  },
};

const provincialReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PROVINCIAL_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case actionTypes.GET_PROVINCIAL_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        updateTime: `Ultimo aggiornamento: ${action.updateTime}`,
        data: action.provincialData,
      };

    case actionTypes.GET_PROVINCIAL_DATA_FAILED:
      return { error: action.error };

    case actionTypes.SET_PROVINCIAL_SORTING:
      return {
        ...state,
        sorting: {
          ...state.sorting,
          summary: { by: "DESC", value: "nuovi_positivi" },
          historical: { by: "DESC", value: "data" },
          today: { by: "DESC", value: "nuovi_positivi" },
          current: { by: "DESC", value: "totale_casi" },
          [action.sortingKey]: {
            by: action.sorting[action.sortingKey].by,
            value: action.sorting[action.sortingKey].value,
          },
        },
      };

    case actionTypes.SET_PROVINCIAL_FILTER:
      return { ...state, searchFilter: action.province };

    case actionTypes.SET_HISTORICAL_PROVINCIAL_FILTER:
      return { ...state, historicalFilter: action.province };

    case actionTypes.SET_PROVINCIAL_FILTER_REGION:
      return { ...state, regionFilter: action.region };

    default:
      return state;
  }
};

export default provincialReducer;
