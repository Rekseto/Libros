import {takeLatest, put, call} from "redux-saga/effects";

import * as actionTypes from "./actionTypes";
import apiCalls from "./apiCalls";

import {createSagaApiCall} from "../../helpers/reduxHelper";

import {
  authRegisterFailed,
  authRegisterReceive,
  authLoginReceive,
  authLoginFailed,
  authLogoutReceive,
  authLogoutFailed
} from "./actions";

const loginSagaCall = createSagaApiCall(
  apiCalls.auth.login(),
  "POST",
  authLoginReceive,
  authLoginFailed
);
const registerSagaCall = createSagaApiCall(
  apiCalls.auth.register(),
  "POST",
  authRegisterReceive,
  authRegisterFailed
);

export default function* authSaga() {
  yield takeLatest(actionTypes.AUTH_LOGIN_REQUEST, loginSagaCall);
  yield takeLatest(actionTypes.AUTH_REGISTER_REQUEST, registerSagaCall);
  yield takeLatest(actionTypes.AUTH_LOGOUT_REQUEST, function*(action) {
    try {
      localStorage.removeItem("token");
      localStorage.removeItem("userData");

      const data = yield call(fetch, apiCalls.auth.logout(), {
        method: "GET",
        headers: action.headers
      });

      const json = yield data.json();

      if (json.success) {
        yield put(authLogoutReceive());
      }
    } catch (error) {
      yield put(authLogoutFailed());
    }
  });

  yield takeLatest(actionTypes.AUTH_LOGIN_RECEIVE, function*(action) {
    const json = yield action.payload;

    localStorage.setItem("token", json.token);
    localStorage.setItem("userData", JSON.stringify(json.userData));
  });

  yield takeLatest(actionTypes.AUTH_VERIFY_REQUEST, function*(action) {
    try {
      const token = localStorage.getItem("token");
      const userData = JSON.parse(localStorage.getItem("userData"));

      if (token && userData) {
        const data = yield call(fetch, apiCalls.auth.verify(), {
          method: "GET",
          headers: {
            Authorization: token
          }
        });

        const json = yield data.json();

        if (json.success) {
          yield put(
            authLoginReceive({
              token,
              userData: json.userData
            })
          );
        } else {
          localStorage.setItem("token", "");
          localStorage.setItem("userData", "");
        }
      }
    } catch (error) {
      localStorage.setItem("token", "");
      localStorage.setItem("userData", "");
    }
  });
}
