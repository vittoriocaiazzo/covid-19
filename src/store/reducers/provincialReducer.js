import * as actionTypes from "../actions/actionTypes";

const initialState = {
  isLoading: false,
  isLoaded: false,
  data: [],
  filter: "",
  historicalFilter: "Agrigento",
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

    case actionTypes.SET_PROVINCIAL_FILTER:
      return { ...state, filter: action.province };

    case actionTypes.SET_HISTORICAL_PROVINCIAL_FILTER:
      return { ...state, historicalFilter: action.province };

    default:
      return state;
  }
};

export default provincialReducer;
