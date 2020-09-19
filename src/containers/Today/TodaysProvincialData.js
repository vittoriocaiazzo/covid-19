import React from "react";
import "../Containers.css";

import ProvincialSection from "../../components/Sections/ProvincialSection";

import { useSelector, useDispatch } from "react-redux";
import {
  setProvincialFilter,
  filters,
} from "../../store/actions/provincialActions";
import { getFilteredProvincialDataWithProvinceFilter } from "../../store/selectors/provincialSelector";

const TodaysProvincialSections = (props) => {
  const todaysProvincialData = useSelector((state) =>
    getFilteredProvincialDataWithProvinceFilter(state, props)
  );

  return (
    <ProvincialSection
      data={todaysProvincialData}
      onChange={props.onChange}
      value={props.provinceFilter}
    />
  );
};

const TodaysProvincialData = () => {
  const provincialState = useSelector((state) => state.provincialData);
  const dispatch = useDispatch();

  const onChangeProvinceFilter = (e) => {
    dispatch(setProvincialFilter(e.target.value));
  };

  return (
    <div className="data-container data-container--fixed-height">
      {provincialState.isLoading && <div>LOADING</div>}

      {provincialState.isLoaded && (
        <>
          <h2 className="data-container__title">I DATI PROVINCIALI</h2>

          <TodaysProvincialSections
            filter={filters.SHOW_TODAYS_PROVINCIAL_DATA}
            provinceFilter={provincialState.filter}
            onChange={onChangeProvinceFilter}
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

export default TodaysProvincialData;
