import React from "react";
import ReactDOM from "react-dom";
import "../styles/theme.scss";
import App from "./app";
import { Provider } from "react-redux";
import { store } from "../Store/store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
