import {takeLatest, call, put} from "redux-saga/effects";

import queryString from "querystring";
import {booksReceive, booksFailed} from "../books/actions";
import {booksEndpoint} from "../endpoints";
export default function* booksSaga() {
  yield takeLatest("BOOKS_FETCH_REQUEST", function*(action) {
    try {
      const headers = action.headers;

      const data = yield call(
        fetch,
        booksEndpoint + `?${queryString.stringify(action.payload)}`,
        {
          method: "GET",
          headers
        }
      );

      const json = yield data.json();

      if (json.success) {
        yield put(booksReceive(json));
      } else {
        yield put(booksFailed(json));
      }
    } catch (error) {
      yield put(
        booksFailed({
          userMessage: "Nieidentyfikowany błąd",
          httpStatus: 500
        })
      );
    }
  });
}
