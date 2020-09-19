import axios from "axios";
import * as actionTypes from "./actionTypes";
import { dateFormat } from "../../utilities/utilities";

const nationalDataURL =
  "https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale.json";

export const fetchNationalData = () => {
  return (dispatch) => {
    // dispatching the request
    dispatch(request());

    axios
      .get(nationalDataURL)
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
    type: actionTypes.GET_NATIONAL_DATA_REQUEST,
  };
};

const success = (nationalData, updateTime) => {
  return {
    type: actionTypes.GET_NATIONAL_DATA_SUCCESS,
    updateTime,
    nationalData,
  };
};

const failed = (error) => {
  return {
    type: actionTypes.GET_NATIONAL_DATA_FAILED,
    error,
  };
};

export const setNationalSorting = (sorting) => {
  const sortingKey = Object.keys(sorting)[0];
  return {
    type: actionTypes.SET_NATIONAL_SORTING,
    sorting,
    sortingKey,
  };
};

export const setRegionalFilter = (region) => {
  return {
    type: actionTypes.SET_REGIONAL_FILTER,
    region,
  };
};

export const filters = {
  SHOW_TODAYS_NATIONAL_DATA: "SHOW_TODAYS_NATIONAL_DATA",
  SHOW_CURRENT_NATIONAL_DATA: "SHOW_CURRENT_NATIONAL_DATA",
  SHOW_HISTORICAL_NATIONAL_DATA: "SHOW_HISTORICAL_NATIONAL_DATA",
};
