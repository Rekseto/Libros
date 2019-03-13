import {takeLatest, call, put} from "redux-saga/effects";

import {
  bookCreateReceive,
  bookCreateFailed,
  bookFindFailed,
  bookFindReceive,
  bookRemoveFailed,
  bookRemoveReceive
} from "./actions";
import {booksEndpoint} from "../endpoints";

export default function* bookSaga() {
  yield takeLatest("BOOK_FIND_REQUEST", function*(action) {
    try {
      const headers = action.headers;
      const data = yield call(fetch, booksEndpoint + action.payload.isbn, {
        method: "GET",
        headers
      });

      const json = yield data.json();

      if (json.success) {
        yield put(bookFindReceive(json.data));
      } else {
        yield put(bookFindFailed(json));
      }
    } catch (error) {
      yield put(
        bookFindFailed({
          userMessage: "Nieidentyfikowany błąd",
          httpStatus: 500
        })
      );
    }
  });

  yield takeLatest("BOOK_CREATE_REQUEST", function*(action) {
    try {
      const headers = action.headers;
      const data = yield call(fetch, booksEndpoint, {
        method: "POST",
        body: JSON.stringify(action.payload),
        headers
      });

      const json = yield data.json();

      if (json.success) {
        yield put(bookCreateReceive());
      } else {
        yield put(bookCreateFailed(json));
      }
    } catch (error) {
      yield put(
        bookCreateFailed({
          userMessage: "Nieidentyfikowany błąd",
          httpStatus: 500
        })
      );
    }
  });

  yield takeLatest("BOOK_REMOVE_REQUEST", function*(action) {
    try {
      const headers = action.headers;
      const data = yield call(fetch, booksEndpoint + action.payload.isbn, {
        method: "DELETE",
        headers
      });

      const json = yield data.json();

      if (json.success) {
        yield put(bookRemoveReceive());
      } else {
        yield put(bookRemoveFailed(json));
      }
    } catch (error) {
      yield put(
        bookRemoveFailed({
          userMessage: "Nieidentyfikowany błąd",
          httpStatus: 500
        })
      );
    }
  });

  yield takeLatest("BOOK_EDIT_REQUEST", function*(action) {
    try {
      const headers = action.headers;
      const data = yield call(fetch, booksEndpoint + action.payload.isbn, {
        method: "PATCH",
        headers,
        body: JSON.stringify(action.payload)
      });

      const json = yield data.json();

      if (json.success) {
        yield put(bookRemoveReceive());
      } else {
        yield put(bookRemoveFailed(json));
      }
    } catch (error) {
      yield put(
        bookRemoveFailed({
          userMessage: "Nieidentyfikowany błąd",
          httpStatus: 500
        })
      );
    }
  });
}
