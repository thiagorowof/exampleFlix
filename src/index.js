import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import "./assets/css/main.css";
import { Provider } from "react-redux";
import store from "./store/store";

// setup fake backend
import { configureFakeBackend } from './helpers/fake-backend';
configureFakeBackend();

 
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>, 
  document.getElementById("root")
);