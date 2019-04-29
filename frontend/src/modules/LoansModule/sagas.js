import {takeLatest, call, put} from "redux-saga/effects";
import {push} from "connected-react-router";

import * as actionTypes from "./actionTypes";
import * as actions from "./actions";
import {actions as userActions} from "../UserModule";
import apiCalls from "./apiCalls";

export default function* loanSaga() {
  yield takeLatest(actionTypes.LOAN_ADD_REQUEST, function*(action) {
    try {
      const headers = action.headers;
      const data = yield call(fetch, apiCalls.loans.add(), {
        method: "POST",
        headers,
        body: JSON.stringify(action.payload)
      });

      const json = yield data.json();

      if (json.success) {
        yield put(actions.loanAddReceive(json));
      } else {
        yield put(actions.loanAddFailed(json.error));
        yield put(push("/search/1"));
      }
    } catch (error) {
      yield put(
        actions.loanAddFailed({
          message: "Niezidentyfikowany błąd",
          httpStatus: 500
        })
      );
      yield put(push("/search/1"));
    }
  });

  yield takeLatest(actionTypes.LOAN_REMOVE_REQUEST, function*(action) {
    try {
      const headers = action.headers;
      const data = yield call(fetch, apiCalls.loans.remove(action.payload.id), {
        method: "DELETE",
        headers
      });

      const json = yield data.json();

      if (json.success) {
        yield put(actions.loanRemoveReceive(json));

        yield put(
          userActions.userLoansRequest({
            token: headers["Authorization"],
            username: action.payload.username
          })
        );
      } else {
        yield put(actions.loanRemoveFailed(json.error));
      }
    } catch (error) {
      yield put(
        actions.loanRemoveFailed({
          message: "Nieidentyfikowany błąd",
          httpStatus: 500
        })
      );
    }
  });

  yield takeLatest(actionTypes.LOANS_FETCH_REQUEST, function*(action) {
    try {
      const headers = action.headers;

      const data = yield call(
        fetch,
        apiCalls.loans.fetch(action.payload.page),
        {
          method: "GET",
          headers
        }
      );

      const json = yield data.json();

      if (json.success) {
        yield put(actions.fetchLoansReceive(json));
      } else {
        yield put(actions.fetchLoansFailed(json.error));
      }
    } catch (error) {
      yield put(
        actions.fetchLoansFailed({
          message: "Niezidentyfikowany błąd",
          httpStatus: 500
        })
      );
    }
  });
}
