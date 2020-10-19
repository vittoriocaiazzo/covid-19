import React from "react";
import { useSelector, useDispatch } from "react-redux";

import "../Containers.css";
import labels from "../../styles/total-labels.json";
import {
  getProvinceList,
  selectSortedHistoricalProvincialData,
} from "../../store/selectors/provincialSelector";
import { setHistoricalProvincialFilter } from "../../store/actions/provincialActions";
import { setProvincialSorting } from "../../store/actions/provincialActions";

import SelectInput from "../../components/SelectInput/SelectInput";
import DateTable from "../../components/Tables/DateTable";

const getColumns = (data) => {
  if (data.length === 0) return [];
  return Object.keys(data[0]).filter((key) => key !== "dataISO");
};

const HistoricalProvincialData = () => {
  const provincialState = useSelector((state) => state.provincialData);
  const historicalProvincialData = useSelector(
    selectSortedHistoricalProvincialData
  );
  const provinces = useSelector(getProvinceList);

  const dispatch = useDispatch();

  const options = provinces.map((province) => {
    return { value: province, label: province };
  });

  const selectProvince = (selectedOption) => {
    dispatch(setHistoricalProvincialFilter(selectedOption.value));
  };

  const sortingClickHandler = (value) => {
    if (provincialState.sorting.historical.by === "ASC")
      dispatch(setProvincialSorting({ historical: { by: "DESC", value } }));
    else if (provincialState.sorting.historical.by === "DESC")
      dispatch(setProvincialSorting({ historical: { by: "ASC", value } }));
  };

  return (
    <div className="table-card table-fullwidth-column">
      <SelectInput
        options={options}
        defaultValue={options.find(
          (option) => option.value === provincialState.historicalFilter
        )}
        onChange={selectProvince}
      />
      <DateTable
        data={historicalProvincialData}
        columns={getColumns(historicalProvincialData)}
        sortingBy={provincialState.sorting.historical.by}
        sortingValue={provincialState.sorting.historical.value}
        onClick={sortingClickHandler}
        labels={labels}
      />
    </div>
  );
};

export default HistoricalProvincialData;
