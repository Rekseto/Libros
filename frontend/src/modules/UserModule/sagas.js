import {takeLatest, call, put} from "redux-saga/effects";
import {push} from "connected-react-router";

import * as actionTypes from "./actionTypes";
import * as actions from "./actions";
import apiCalls from "./apiCalls";

export default function* userSagas() {
  yield takeLatest(actionTypes.USER_LOANS_REQUEST, function*(action) {
    try {
      const headers = action.headers;
      const {username} = action.payload;

      const data = yield call(fetch, apiCalls.users.fetchLoans(username), {
        method: "GET",
        headers
      });

      const json = yield data.json();

      if (json.success) {
        yield put(actions.userLoansReceive(json));
      } else {
        yield put(actions.userLoansFailed(json.error));
      }
    } catch (error) {
      yield put(
        actions.userLoansReceive({
          message: "Niezidentyfikowany błąd",
          httpStatus: 500
        })
      );
    }
  });

  yield takeLatest(actionTypes.USERS_FETCH_REQUEST, function*(action) {
    try {
      const headers = action.headers;
      const {page, username} = action.payload;
      const data = yield call(
        fetch,
        apiCalls.users.fetchUsers(page, {username}),
        {
          method: "GET",
          headers
        }
      );

      const json = yield data.json();

      if (json.success) {
        yield put(actions.fetchUsersReceive(json));
      } else {
        yield put(actions.fetchUsersFailed(json.error));
      }
    } catch (error) {
      yield put(
        actions.fetchUsersFailed({
          message: "Niezidentyfikowany błąd",
          httpStatus: 500
        })
      );
    }
  });
}
