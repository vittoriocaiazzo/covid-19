import axios from "axios";
import * as actionTypes from "./actionTypes";
import { dateFormat } from "../../helpers/utilities";

const provincialDataURL =
  "https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-province.json";

export const fetchProvincialData = () => {
  return (dispatch) => {
    // dispatching the request
    dispatch(request());

    // fetching the provincial data
    axios
      .get(provincialDataURL)
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
    type: actionTypes.GET_PROVINCIAL_DATA_REQUEST,
  };
};

const success = (provincialData, updateTime) => {
  return {
    type: actionTypes.GET_PROVINCIAL_DATA_SUCCESS,
    updateTime,
    provincialData,
  };
};

const failed = (error) => {
  return {
    type: actionTypes.GET_PROVINCIAL_DATA_FAILED,
    error,
  };
};

export const setProvincialSorting = (sorting) => {
  const sortingKey = Object.keys(sorting)[0];
  return {
    type: actionTypes.SET_PROVINCIAL_SORTING,
    sorting,
    sortingKey,
  };
};

export const setProvincialFilter = (province) => {
  return {
    type: actionTypes.SET_PROVINCIAL_FILTER,
    province,
  };
};

export const setProvincialFilterForRegion = (region) => {
  return {
    type: actionTypes.SET_PROVINCIAL_FILTER_REGION,
    region,
  };
};

export const setHistoricalProvincialFilter = (province) => {
  return {
    type: actionTypes.SET_HISTORICAL_PROVINCIAL_FILTER,
    province,
  };
};
