import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";

import store from "./store";
import { Provider } from "react-redux";

window.store = store;

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
