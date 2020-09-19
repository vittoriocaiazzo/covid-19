import React from "react";
import "../Containers.css";

import SelectInput from "../../components/SelectInput/SelectInput";
import ProvinceCards from "../../components/Cards/ProvinceCards/ProvinceCards";

import { useSelector, useDispatch } from "react-redux";

import {
  getProvinceList,
  getHistoricalProvincialData,
} from "../../store/selectors/provincialSelector";
import { setHistoricalProvincialFilter } from "../../store/actions/provincialActions";

const HistoricalProvincialCards = (props) => {
  const historicalProvincialData = useSelector((state) =>
    getHistoricalProvincialData(state, props)
  );

  return <ProvinceCards data={historicalProvincialData} />;
};

const HistoricalProvincialData = () => {
  const provincialState = useSelector((state) => state.provincialData);
  const provinces = useSelector(getProvinceList);
  const dispatch = useDispatch();

  const options = provinces.map((province) => {
    return { value: province, label: province };
  });

  const selectProvince = (selectedOption) => {
    dispatch(setHistoricalProvincialFilter(selectedOption.value));
  };

  return (
    <div className="data-container data-container--fixed-height">
      {provincialState.isLoading && <div>LOADING</div>}

      {provincialState.isLoaded && (
        <>
          <h2 className="data-container__title">I DATI PROVINCIALI</h2>
          <SelectInput
            options={options}
            defaultValue={options.find(
              (option) => option.value === provincialState.historicalFilter
            )}
            onChange={selectProvince}
          />
          <HistoricalProvincialCards
            filter={"SHOW_HISTORICAL_PROVINCIAL_DATA"}
          />

          <div className="data-container__note-update-container">
            <div></div>
            <div>{provincialState.updateTime}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default HistoricalProvincialData;
