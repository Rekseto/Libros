import {takeLatest, call, put} from "redux-saga/effects";
import {loanEndpoint} from "../endpoints";
import {fetchLoansReceive, fetchLoansFailed} from "./actions";
export default function* loansSaga() {
  yield takeLatest("LOANS_FETCH_REQUEST", function*(action) {
    try {
      const headers = action.headers;

      const data = yield call(fetch, loanEndpoint + action.payload.page, {
        method: "GET",
        headers
      });

      const json = yield data.json();

      if (json.success) {
        yield put(fetchLoansReceive(json));
      } else {
        yield put(fetchLoansFailed(json));
      }
    } catch (error) {
      yield put(
        fetchLoansFailed({
          userMessage: "Nieidentyfikowany błąd",
          httpStatus: 500
        })
      );
    }
  });
}
