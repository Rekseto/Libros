import {takeLatest, call, put} from "redux-saga/effects";
import {push} from "connected-react-router";

import * as actions from "./actions";
import * as actionTypes from "./actionTypes";
import apiCalls from "./apiCalls";

export default function* booksSaga() {
  yield takeLatest(actionTypes.BOOKS_SEARCH_REQUEST, function*(action) {
    try {
      const headers = action.headers;

      const data = yield call(fetch, apiCalls.books.search(action.payload), {
        method: "GET",
        headers
      });

      const json = yield data.json();

      if (json.success) {
        yield put(actions.booksFetchReceive(json));
      } else {
        yield put(actions.booksFetchFailed(json.error));
      }
    } catch (error) {
      yield put(
        actions.booksFetchFailed({
          userMessage: "Niezidentyfikowany błąd",
          httpStatus: 500
        })
      );
    }
  });

  yield takeLatest(actionTypes.BOOK_FETCH_REQUEST, function*(action) {
    try {
      const headers = action.headers;
      const data = yield call(
        fetch,
        apiCalls.books.fetch(action.payload.isbn),
        {
          method: "GET",
          headers
        }
      );

      const json = yield data.json();

      if (json.success) {
        yield put(actions.bookFetchReceive(json));
      } else {
        yield put(actions.bookFetchFailed(json.error));
      }
    } catch (error) {
      yield put(
        actions.bookFetchFailed({
          message: "Niezidentyfikowany błąd",
          httpStatus: 500
        })
      );
    }
  });

  yield takeLatest(actionTypes.BOOK_CREATE_REQUEST, function*(action) {
    try {
      const headers = action.headers;
      const data = yield call(fetch, apiCalls.books.create(), {
        method: "POST",
        body: JSON.stringify(action.payload),
        headers
      });

      const json = yield data.json();

      if (json.success) {
        yield put(actions.bookCreateReceive());
        yield put(push("/search/1"));
      } else {
        yield put(actions.bookCreateFailed(json.error));
      }
    } catch (error) {
      yield put(
        actions.bookCreateFailed({
          userMessage: "Niezidentyfikowany błąd",
          httpStatus: 500
        })
      );
    }
  });

  yield takeLatest(actionTypes.BOOK_REMOVE_REQUEST, function*(action) {
    try {
      const headers = action.headers;
      const data = yield call(
        fetch,
        apiCalls.books.remove(action.payload.isbn),
        {
          method: "DELETE",
          headers
        }
      );

      const json = yield data.json();

      if (json.success) {
        yield put(actions.bookRemoveReceive(json));
        yield put(push("/search/1"));
      } else {
        yield put(actions.bookRemoveFailed(json.error));
      }
    } catch (error) {
      yield put(
        actions.bookRemoveFailed({
          message: "Niezidentyfikowany błąd",
          httpStatus: 500
        })
      );
    }
  });

  yield takeLatest(actionTypes.BOOK_EDIT_REQUEST, function*(action) {
    try {
      const headers = action.headers;
      const data = yield call(fetch, apiCalls.books.edit(action.payload.isbn), {
        method: "PATCH",
        headers,
        body: JSON.stringify(action.payload)
      });

      const json = yield data.json();

      if (json.success) {
        yield put(actions.bookEditReceive(json));
        yield put(push("/search/1"));
      } else {
        yield put(actions.bookEditFailed(json.error));
      }
    } catch (error) {
      yield put(
        actions.bookEditFailed({
          message: "Nieidentyfikowany błąd",
          httpStatus: 500
        })
      );
    }
  });
}
