import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import ImagesStore from "./redux/store/ImagesStore";
ReactDOM.render(
  <Provider store={ImagesStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
