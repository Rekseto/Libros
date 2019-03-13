import {takeLatest, call, put} from "redux-saga/effects";
import {
  categoriesFetchFailed,
  categoriesFetchReceive,
  categoriesRemoveReceive,
  categoriesFetchRequest,
  categoriesRemoveFailed,
  categoriesAddReceive,
  categoriesAddFailed
} from "./actions";
import {categoriesEndpoint} from "../endpoints";

export default function* categorySaga() {
  yield takeLatest("CATEGORIES_FETCH_REQUEST", function*(action) {
    try {
      const data = yield call(fetch, categoriesEndpoint, {
        method: "GET"
      });

      const json = yield data.json();

      if (json.success) {
        yield put(categoriesFetchReceive(json.data));
      } else {
        yield put(categoriesFetchFailed(json));
      }
    } catch (error) {
      yield put(
        categoriesFetchFailed({
          userMessage: "Nieidentyfikowany błąd",
          httpStatus: 500
        })
      );
    }
  });

  yield takeLatest("CATEGORIES_ADD_REQUEST", function*(action) {
    try {
      const headers = action.headers;
      const data = yield call(fetch, categoriesEndpoint, {
        method: "POST",
        body: JSON.stringify(action.payload),
        headers
      });

      const json = yield data.json();

      if (json.success) {
        yield put(categoriesAddReceive(json.data));
        yield put(categoriesFetchRequest());
      } else {
        yield put(categoriesAddFailed(json));
      }
    } catch (error) {
      yield put(
        categoriesAddFailed({
          userMessage: "Nieidentyfikowany błąd",
          httpStatus: 500
        })
      );
    }
  });

  yield takeLatest("CATEGORIES_REMOVE_REQUEST", function*(action) {
    try {
      const headers = action.headers;
      const data = yield call(fetch, categoriesEndpoint + action.payload.id, {
        method: "DELETE",
        headers
      });

      const json = yield data.json();

      if (json.success) {
        yield put(categoriesRemoveReceive(json.data));
        yield put(categoriesFetchRequest());
      } else {
        yield put(categoriesRemoveFailed(json));
      }
    } catch (error) {
      yield put(
        categoriesRemoveFailed({
          userMessage: "Nieidentyfikowany błąd",
          httpStatus: 500
        })
      );
    }
  });
}
