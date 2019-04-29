import {createStore, applyMiddleware, combineReducers, compose} from "redux";
import {all, takeEvery} from "redux-saga/effects";
import {toast} from "react-toastify";
import {connectRouter} from "connected-react-router";
import {routerMiddleware} from "connected-react-router";
import {createLogger} from "redux-logger";
import createSagaMiddleware from "redux-saga";

import * as reducers from "./modules";

import {booksSaga} from "./modules/BooksModule/";
import {publishersSaga} from "./modules/PublishersModule/";
import {categoriesSaga} from "./modules/CategoriesModule/";
import {authSaga} from "./modules/AuthModule";
import {userSaga} from "./modules/UserModule";
import {loansSaga} from "./modules/LoansModule";

function* rootSaga() {
  yield takeEvery(action => action.type.endsWith("FAILED"), function*(action) {
    yield toast.error(action.error.message, {
      position: toast.POSITION.TOP_RIGHT
    });
  });
  yield all([
    booksSaga(),
    categoriesSaga(),
    publishersSaga(),
    authSaga(),
    userSaga(),
    loansSaga()
  ]);
}

export default function configureStore(history) {
  const middlewares = [];

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

  const sagaMiddleware = createSagaMiddleware();

  middlewares.push(routerMiddleware(history));
  middlewares.push(sagaMiddleware);
  middlewares.push(createLogger({level: "info", collapsed: true}));

  const rootReducer = combineReducers({
    ...reducers,
    router: connectRouter(history)
  });

  const enhancer = composeEnhancers(applyMiddleware(...middlewares));

  const store = createStore(rootReducer, enhancer);

  sagaMiddleware.run(rootSaga);
  return store;
}
