import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Menu from "../components/Menu/Menu";

// import Home from "../pages/Home";
import Today from "../pages/Today";
import Current from "../pages/Current";
import Historical from "../pages/Historical";

const Layout = () => {
  return (
    <>
      <Menu />
      <Switch>
        <Route exact path="/">
          <Redirect to="/covid-19/dati odierni" />
        </Route>
        <Route exact path="/covid-19">
          <Redirect to="/covid-19/dati odierni" />
        </Route>
        {/* <Route exact path="/covid-19/home" component={Home} /> */}
        <Route exact path="/covid-19/dati odierni" component={Today} />
        <Route exact path="/covid-19/dati attuali" component={Current} />
        <Route exact path="/covid-19/storico dati" component={Historical} />
      </Switch>
    </>
  );
};

export default Layout;
