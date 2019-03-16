import React from "react";
import ReactDOM from "react-dom";

import {Provider} from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./container/App";
import configureStore from "./state/store";
import registerServiceWorker from "./workers/ServiceWorker";

import "./index.css";
import {HashRouter} from "react-router-dom";
import {i18nContext} from "./i18n/i18nContext";
import i18n from "./i18n";

const store = configureStore();
const I18nProvider = i18nContext.Provider;
ReactDOM.render(
  <Provider store={store}>
    <I18nProvider value={new i18n("PL")}>
      <HashRouter>
        <App />
      </HashRouter>
    </I18nProvider>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
