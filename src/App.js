import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import Layout from "./hoc/Layout";

import { fetchNationalData } from "./store/actions/nationalActions";
import { fetchRegionalData } from "./store/actions/regionalActions";
import { fetchProvincialData } from "./store/actions/provincialActions";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNationalData());
    dispatch(fetchRegionalData());
    dispatch(fetchProvincialData());
  }, [dispatch]);

  const nationalState = useSelector((state) => state.nationalData);
  const regionalState = useSelector((state) => state.regionalData);
  const provincialState = useSelector((state) => state.provincialData);

  return (
    <div className="main-container">
      <BrowserRouter>
        {nationalState.isLoaded &&
          regionalState.isLoaded &&
          provincialState.isLoaded && <Layout />}
      </BrowserRouter>
    </div>
  );
};

export default App;
