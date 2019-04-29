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
        toast.error(json.error.message, {
          position: toast.POSITION.TOP_LEFT
        });

        yield put(actions.categoriesFetchFailed(json.error));
      }
    } catch (error) {
      yield put(
        actions.categoriesFetchFailed({
          userMessage: "Niezidentyfikowany błąd"
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
          userMessage: "Niezidentyfikowany błąd",
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
        apiCalls.categorys.remove(action.payload.id),
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
          userMessage: "Niezidentyfikowany błąd",
          httpStatus: 500
        })
      );
    }
  });
}
