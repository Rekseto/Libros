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
import {toast} from "react-toastify";

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
        toast.error(json.error, {
          position: toast.POSITION.TOP_RIGHT
        });
        yield put(bookFindFailed(json));
      }
    } catch (error) {
      toast.error("Niezidentyfikowany błąd", {
        position: toast.POSITION.TOP_RIGHT
      });
      yield put(
        bookFindFailed({
          userMessage: "Niezidentyfikowany błąd",
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
        toast.error(json.error.message, {
          position: toast.POSITION.TOP_RIGHT
        });
        yield put(bookCreateFailed(json));
      }
    } catch (error) {
      toast.error("Niezidentyfikowany błąd", {
        position: toast.POSITION.TOP_RIGHT
      });

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
        toast.error(json.error.message, {
          position: toast.POSITION.TOP_RIGHT
        });
        yield put(bookRemoveFailed(json));
      }
    } catch (error) {
      toast.error("Niezidentyfikowany błąd", {
        position: toast.POSITION.TOP_RIGHT
      });

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
        toast.error(json.error.message, {
          position: toast.POSITION.TOP_RIGHT
        });
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
