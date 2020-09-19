import axios from "axios";
import * as actionTypes from "./actionTypes";
import { dateFormat } from "../../utilities/utilities";

const regionalDataURL =
  "https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni.json";

export const fetchRegionalData = () => {
  return (dispatch) => {
    dispatch(request());

    return axios
      .get(regionalDataURL)
      .then((response) => {
        const data = response.data;
        const updateTime = dateFormat(
          response.data[response.data.length - 1].data,
          true
        );
        dispatch(success(data, updateTime));
      })
      .catch((error) => dispatch(failed(error.response)));
  };
};

const request = () => {
  return {
    type: actionTypes.GET_REGIONAL_DATA_REQUEST,
  };
};

const success = (regionalData, updateTime) => {
  return {
    type: actionTypes.GET_REGIONAL_DATA_SUCCESS,
    updateTime,
    regionalData,
  };
};

const failed = (error) => {
  return {
    type: actionTypes.GET_REGIONAL_DATA_FAILED,
    error,
  };
};

export const setRegionalSorting = (sorting) => {
  const sortingKey = Object.keys(sorting)[0];
  return {
    type: actionTypes.SET_REGIONAL_SORTING,
    sorting,
    sortingKey,
  };
};

export const setRegionalFilter = (regionFilter) => {
  return {
    type: actionTypes.SET_REGIONAL_FILTER,
    regionFilter,
  };
};

export const filters = {
  SHOW_TODAYS_REGIONAL_DATA: "SHOW_TODAYS_REGIONAL_DATA",
  SHOW_CURRENT_REGIONAL_DATA: "SHOW_CURRENT_REGIONAL_DATA",
  SHOW_HISTORICAL_REGIONAL_DATA: "SHOW_HISTORICAL_REGIONAL_DATA",
};
