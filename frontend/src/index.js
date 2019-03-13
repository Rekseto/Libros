import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./container/App";
import configureStore from "./state/store";
import registerServiceWorker from "./workers/ServiceWorker";

import "./index.css";
import { HashRouter } from 'react-router-dom';
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
