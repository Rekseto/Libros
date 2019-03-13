import {createStore, applyMiddleware, combineReducers, compose} from "redux";
import {all} from "redux-saga/effects";
import {createLogger} from "redux-logger";
import createSagaMiddleware from "redux-saga";
import {routerReducer} from "react-router-redux";
import * as reducers from "./ducks"; // import all reducers from ducks/index.js

import {authSaga} from "./ducks/auth";
import {bookSaga} from "./ducks/book";
import {booksSaga} from "./ducks/books";
import {userSaga} from "./ducks/user";
import {loanSaga} from "./ducks/loan";
import {usersSaga} from "./ducks/users";
import {loansSaga} from "./ducks/loans";
import {categoriesSaga} from "./ducks/categories";
import {publishersSaga} from "./ducks/publishers";
function* rootSaga() {
  yield all([
    authSaga(),
    userSaga(),
    booksSaga(),
    bookSaga(),
    loanSaga(),
    usersSaga(),
    loansSaga(),
    categoriesSaga(),
    publishersSaga()
  ]);
}

export default function configureStore() {
  const middlewares = [];

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

  const sagaMiddleware = createSagaMiddleware();

  middlewares.push(sagaMiddleware);
  middlewares.push(createLogger({level: "info", collapsed: true}));
  console.log(reducers);
  const rootReducer = combineReducers({...reducers, routing: routerReducer});

  const enhancer = composeEnhancers(applyMiddleware(...middlewares));

  const store = createStore(rootReducer, enhancer);

  sagaMiddleware.run(rootSaga);
  return store;
}
