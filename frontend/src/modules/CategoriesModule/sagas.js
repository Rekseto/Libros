import {takeLatest, call, put} from "redux-saga/effects";
import {toast} from "react-toastify";

import * as actionTypes from "./actionTypes";
import * as actions from "./actions";
import apiCalls from "./apiCalls";

export default function* categorySaga() {
  yield takeLatest(actionTypes.CATEGORIES_FETCH_REQUEST, function*(action) {
    try {
      const data = yield call(fetch, apiCalls.categories.fetch(), {
        method: "GET"
      });

      const json = yield data.json();

      if (json.success) {
        yield put(actions.categoriesFetchReceive(json));
      } else {
        yield put(actions.categoriesFetchFailed(json.error));
      }
    } catch (error) {
      yield put(
        actions.categoriesFetchFailed({
          message: "Niezidentyfikowany błąd"
        })
      );
    }
  });

  yield takeLatest(actionTypes.CATEGORY_CREATE_REQUEST, function*(action) {
    try {
      const headers = action.headers;
      const data = yield call(fetch, apiCalls.categories.create(), {
        method: "POST",
        body: JSON.stringify(action.payload),
        headers
      });

      const json = yield data.json();

      if (json.success) {
        yield put(actions.categoryCreateReceive(json));
        yield put(actions.categoriesFetchRequest());
      } else {
        yield put(actions.categoryCreateFailed(json.error));
      }
    } catch (error) {
      yield put(
        actions.categoryCreateFailed({
          message: "Niezidentyfikowany błąd",
          httpStatus: 500
        })
      );
    }
  });

  yield takeLatest(actionTypes.CATEGORY_REMOVE_REQUEST, function*(action) {
    try {
      const headers = action.headers;
      const data = yield call(
        fetch,
        apiCalls.categories.remove(action.payload.id),
        {
          method: "DELETE",
          body: JSON.stringify(action.payload),
          headers
        }
      );

      const json = yield data.json();

      if (json.success) {
        yield put(actions.categoryRemoveReceive(json));
        yield put(actions.categoriesFetchRequest());
      } else {
        yield put(actions.categoryRemoveFailed(json.error));
      }
    } catch (error) {
      yield put(
        actions.categoryRemoveFailed({
          message: "Niezidentyfikowany błąd",
          httpStatus: 500
        })
      );
    }
  });
}
