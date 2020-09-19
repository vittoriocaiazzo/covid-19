import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import nationalReducer from "./store/reducers/nationalReducer";
import regionalReducer from "./store/reducers/regionalReducer";
import provincialReducer from "./store/reducers/provincialReducer";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const rootReducer = combineReducers({
  nationalData: nationalReducer,
  regionalData: regionalReducer,
  provincialData: provincialReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
