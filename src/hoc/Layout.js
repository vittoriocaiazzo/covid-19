import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Menu from "../components/Menu/Menu";
import Hamburger from "../components/Menu/Hamburger";
import Today from "../components/Contents/Today";
import Current from "../components/Contents/Current";
import Historical from "../components/Contents/Historical";
import World from "../components/Contents/World";
import Graphs from "../components/Contents/Graphs";

const Layout = () => {
  const [showMenu, setShowMenu] = useState(false);

  const showMobileMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <Hamburger onClick={showMobileMenu} />
      <Menu onClick={showMobileMenu} showMenu={showMenu} />
      <Switch>
        <Route exact path="/">
          <Redirect to="/covid-19/dati odierni" />
        </Route>
        <Route exact path="/covid-19">
          <Redirect to="/covid-19/dati odierni" />
        </Route>
        <Route exact path="/covid-19/dati odierni" component={Today} />
        <Route exact path="/covid-19/dati attuali" component={Current} />
        <Route exact path="/covid-19/storico dati" component={Historical} />
        <Route exact path="/covid-19/dati mondiali" component={World} />
        <Route exact path="/covid-19/grafici" component={Graphs} />
      </Switch>
    </>
  );
};

export default Layout;
