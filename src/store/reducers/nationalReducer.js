import * as actionTypes from "../actions/actionTypes";

const initialState = {
  isLoading: false,
  isLoaded: false,
  data: [],
  sorting: {
    historical: { by: "DESC", value: "data" },
  },
  graphInputs: {
    summary: { input: "nuovi_positivi", type: "Bar" },
    today: { input: "nuovi_positivi", type: "Bar" },
    current: { input: "totale_casi", type: "Area" },
  },
};

const nationalReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_NATIONAL_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case actionTypes.GET_NATIONAL_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        updateTime: `Ultimo aggiornamento: ${action.updateTime}`,
        data: action.nationalData,
      };

    case actionTypes.GET_NATIONAL_DATA_FAILED:
      return { error: action.error };

    case actionTypes.SET_NATIONAL_SORTING:
      return {
        ...state,
        sorting: {
          ...state.sorting,
          historical: { ...state.sorting.historical },
          [action.sortingKey]: {
            by: action.sorting[action.sortingKey].by,
            value: action.sorting[action.sortingKey].value,
          },
        },
      };

    case actionTypes.SET_GRAPH_INPUT:
      return {
        ...state,
        graphInputs: {
          summary: { ...state.graphInputs.summary },
          today: { ...state.graphInputs.today },
          current: { ...state.graphInputs.current },
          [action.input]: {
            input: action.graphInput[action.input].input,
            type: action.graphInput[action.input].type,
          },
        },
      };

    default:
      return state;
  }
};

export default nationalReducer;
