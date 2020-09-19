import * as actionTypes from "../actions/actionTypes";

const initialState = {
  isLoading: false,
  isLoaded: false,
  data: [],
  sorting: {
    today: { by: "DESC", value: "nuovi_positivi" },
    current: { by: "DESC", value: "totale_casi" },
    historical: { by: "DESC", value: "data" },
  },
  regionFilter: "Abruzzo",
};

const regionalReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_REGIONAL_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case actionTypes.GET_REGIONAL_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        updateTime: `Ultimo aggiornamento: ${action.updateTime}`,
        data: action.regionalData,
      };

    case actionTypes.GET_REGIONAL_DATA_FAILED:
      return { error: action.error };

    case actionTypes.SET_REGIONAL_SORTING:
      return {
        ...state,
        sorting: {
          ...state.sorting,
          today: { ...state.sorting.today },
          current: { ...state.sorting.current },
          historical: { ...state.sorting.historical },
          [action.sortingKey]: {
            by: action.sorting[action.sortingKey].by,
            value: action.sorting[action.sortingKey].value,
          },
        },
      };

    case actionTypes.SET_REGIONAL_FILTER:
      return { ...state, regionFilter: action.regionFilter };

    default:
      return state;
  }
};

export default regionalReducer;
