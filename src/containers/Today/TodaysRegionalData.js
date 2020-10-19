import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import "../Containers.css";
import labels from "../../styles/todays-labels.json";
import { selectSortedTodaysRegionalData } from "../../store/selectors/regionalSelector";
import { setRegionalSorting } from "../../store/actions/regionalActions";
import { selectSortedTodaysProvincialDataForRegion } from "../../store/selectors/provincialSelector";
import { setProvincialFilterForRegion } from "../../store/actions/provincialActions";
import { setProvincialSorting } from "../../store/actions/provincialActions";

import RankTable from "../../components/Tables/RankTable";
import ModalProvinceCard from "../../components/Cards/ProvinceCards/ModalProvinceCard";

const getColumns = (data) => {
  if (data.length === 0) return [];
  return Object.keys(data[0]).filter((key) => key !== "dataISO");
};

const TodaysRegionalData = () => {
  const regionalState = useSelector((state) => state.regionalData);
  const todaysRegionalData = useSelector(selectSortedTodaysRegionalData);

  const provincialState = useSelector((state) => state.provincialData);
  const provincialData = useSelector(selectSortedTodaysProvincialDataForRegion);
  const regionFilter = useSelector(
    (state) => state.provincialData.regionFilter
  );
  const [showProvincialModal, setShowProvincialModal] = useState(false);

  const dispatch = useDispatch();

  // sorting handler for the click on a table header
  const sortingClickHandler = (value) => {
    if (regionalState.sorting.today.by === "ASC")
      dispatch(setRegionalSorting({ today: { by: "DESC", value } }));
    else if (regionalState.sorting.today.by === "DESC")
      dispatch(setRegionalSorting({ today: { by: "ASC", value } }));
  };

  // sorting handler for the click on the provincial header
  const sortingProvinceHandler = (value) => {
    if (provincialState.sorting.today.by === "ASC")
      dispatch(setProvincialSorting({ today: { by: "DESC", value } }));
    else if (provincialState.sorting.today.by === "DESC")
      dispatch(setProvincialSorting({ today: { by: "ASC", value } }));
  };

  // pronvincial data modal
  const regionClickHandler = (region) => {
    dispatch(setProvincialFilterForRegion(region));
    setShowProvincialModal(true);
  };

  // modal
  const hideModal = () => setShowProvincialModal(false);

  return (
    <div className="table-card">
      {showProvincialModal && (
        <ModalProvinceCard
          region={provincialData}
          regionName={regionFilter}
          sortingBy={provincialState.sorting.today.by}
          sortingValue={provincialState.sorting.today.value}
          onClick={hideModal}
          onSortingClick={sortingProvinceHandler}
        />
      )}
      <RankTable
        data={todaysRegionalData}
        columns={getColumns(todaysRegionalData)}
        onClick={sortingClickHandler}
        onRegionClick={regionClickHandler}
        sortingBy={regionalState.sorting.today.by}
        sortingValue={regionalState.sorting.today.value}
        labels={labels}
        isSummary={false}
      />
    </div>
  );
};

export default TodaysRegionalData;
