import React from "react";
import ReactDOM from "react-dom";
import {createBrowserHistory} from "history";
import {Provider} from "react-redux";
import {ConnectedRouter} from "connected-react-router";
import registerServiceWorker from "./workers/ServiceWorker";

import "./index.css";

import configureStore from "./store";
import App from "./App";

const history = createBrowserHistory();
const store = configureStore(history);
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
