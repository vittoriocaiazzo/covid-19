import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import "../Containers.css";
import labels from "../../styles/total-labels.json";
import { selectSortedCurrentRegionalData } from "../../store/selectors/regionalSelector";
import { setRegionalSorting } from "../../store/actions/regionalActions";
import { selectSortedCurrentProvincialDataForRegion } from "../../store/selectors/provincialSelector";
import { setProvincialFilterForRegion } from "../../store/actions/provincialActions";
import { setProvincialSorting } from "../../store/actions/provincialActions";

import RankTable from "../../components/Tables/RankTable";
import ModalProvinceCard from "../../components/Cards/ProvinceCards/ModalProvinceCard";

const getColumns = (data) => {
  if (data.length === 0) return [];
  return Object.keys(data[0]).filter((key) => key !== "dataISO");
};

const CurrentRegionalData = () => {
  const regionalState = useSelector((state) => state.regionalData);
  const currentRegionalData = useSelector(selectSortedCurrentRegionalData);

  const provincialState = useSelector((state) => state.provincialData);
  const provincialData = useSelector(
    selectSortedCurrentProvincialDataForRegion
  );
  const regionFilter = useSelector(
    (state) => state.provincialData.regionFilter
  );
  const [showProvincialModal, setShowProvincialModal] = useState(false);

  const dispatch = useDispatch();

  // sorting handler for the click on a table header
  const sortingClickHandler = (value) => {
    if (regionalState.sorting.current.by === "ASC")
      dispatch(setRegionalSorting({ current: { by: "DESC", value } }));
    else if (regionalState.sorting.current.by === "DESC")
      dispatch(setRegionalSorting({ current: { by: "ASC", value } }));
  };

  // sorting handler for the click on the provincial header
  const sortingProvinceHandler = (value) => {
    if (provincialState.sorting.current.by === "ASC")
      dispatch(setProvincialSorting({ current: { by: "DESC", value } }));
    else if (provincialState.sorting.current.by === "DESC")
      dispatch(setProvincialSorting({ current: { by: "ASC", value } }));
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
          sortingBy={provincialState.sorting.current.by}
          sortingValue={provincialState.sorting.current.value}
          onClick={hideModal}
          onSortingClick={sortingProvinceHandler}
        />
      )}
      <RankTable
        data={currentRegionalData}
        columns={getColumns(currentRegionalData)}
        onClick={sortingClickHandler}
        onRegionClick={regionClickHandler}
        sortingBy={regionalState.sorting.current.by}
        sortingValue={regionalState.sorting.current.value}
        labels={labels}
        isSummary={false}
      />
    </div>
  );
};

export default CurrentRegionalData;
