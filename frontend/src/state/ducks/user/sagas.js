import { takeLatest, call, put } from "redux-saga/effects";
import { userActions } from "./";
import { userEndpoint } from '../endpoints';
export default function* booksSaga() {
  yield takeLatest("USER_LOANS_REQUEST", function* (action) {
    try {
      const headers = action.headers;
      const { username } = action.payload;

      const data = yield call(fetch, userEndpoint + username, {
        method: "GET",
        headers
      });

      const json = yield data.json();

      if (json.success) {
        yield put(userActions.loansReceive(json.data));
      } else {
        yield put(userActions.loansFailed(json));
      }
    } catch (error) {
      yield put(userActions.loansFailed({
        userMessage: "Nieidentyfikowany błąd",
        httpStatus: 500,
      }));
    }
  });
}