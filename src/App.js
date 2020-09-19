import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { useDispatch } from "react-redux";

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

  return (
    <div className="main-container">
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </div>
  );
};

export default App;
