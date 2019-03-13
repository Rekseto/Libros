import {takeLatest, call, put} from "redux-saga/effects";
import {loanEndpoint} from "../endpoints";
import {
  addLoanFailed,
  addLoanReceive,
  removeLoanReceive,
  removeLoanFailed
} from "./actions";
import {loansRequest} from "../user/actions";

export default function* loanSaga() {
  yield takeLatest("LOAN_ADD_REQUEST", function*(action) {
    try {
      const headers = action.headers;
      const data = yield call(fetch, loanEndpoint, {
        method: "POST",
        body: JSON.stringify(action.payload),
        headers
      });

      const json = yield data.json();

      if (json.success) {
        yield put(addLoanReceive(json));
      } else {
        yield put(addLoanFailed(json));
      }
    } catch (error) {
      yield put(
        addLoanFailed({
          userMessage: "Nieidentyfikowany błąd",
          httpStatus: 500
        })
      );
    }
  });

  yield takeLatest("LOAN_REMOVE_REQUEST", function*(action) {
    try {
      const headers = action.headers;
      const data = yield call(fetch, loanEndpoint + action.payload.id, {
        method: "DELETE",
        headers
      });

      const json = yield data.json();

      if (json.success) {
        yield put(removeLoanReceive(json));
        yield put(loansRequest(action.payload.username));
      } else {
        yield put(removeLoanFailed(json));
      }
    } catch (error) {
      yield put(
        removeLoanFailed({
          userMessage: "Nieidentyfikowany błąd",
          httpStatus: 500
        })
      );
    }
  });
}
