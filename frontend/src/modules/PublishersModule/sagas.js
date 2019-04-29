import {takeLatest, call, put} from "redux-saga/effects";

import * as actionTypes from "./actionTypes";
import * as actions from "./actions";
import apiCalls from "./apiCalls";

export default function* categorySaga() {
  yield takeLatest(actionTypes.PUBLISHERS_FETCH_REQUEST, function*(action) {
    try {
      const data = yield call(fetch, apiCalls.publishers.fetch(), {
        method: "GET"
      });

      const json = yield data.json();

      if (json.success) {
        yield put(actions.publishersFetchReceive(json));
      } else {
        yield put(actions.publishersFetchFailed(json.error));
      }
    } catch (error) {
      yield put(
        actions.publishersFetchFailed({
          message: "Nieidentyfikowany błąd"
        })
      );
    }
  });

  yield takeLatest(actionTypes.PUBLISHER_CREATE_REQUEST, function*(action) {
    try {
      const headers = action.headers;
      const data = yield call(fetch, apiCalls.publishers.create(), {
        method: "POST",
        body: JSON.stringify(action.payload),
        headers
      });

      const json = yield data.json();

      if (json.success) {
        yield put(actions.publisherCreateReceive(json));
        yield put(actions.publishersFetchRequest());
      } else {
        yield put(actions.publisherCreateFailed(json.error));
      }
    } catch (error) {
      yield put(
        actions.publisherCreateFailed({
          userMessage: "Nieidentyfikowany błąd",
          httpStatus: 500
        })
      );
    }
  });

  yield takeLatest(actionTypes.PUBLISHER_REMOVE_REQUEST, function*(action) {
    try {
      const headers = action.headers;
      const data = yield call(
        fetch,
        apiCalls.publishers.remove(action.payload.id),
        {
          method: "DELETE",
          body: JSON.stringify(action.payload),
          headers
        }
      );

      const json = yield data.json();

      if (json.success) {
        yield put(actions.publisherRemoveReceive(json));
        yield put(actions.publishersFetchRequest());
      } else {
        yield put(actions.publisherRemoveFailed(json.error));
      }
    } catch (error) {
      yield put(
        actions.publisherRemoveFailed({
          userMessage: "Nieidentyfikowany błąd",
          httpStatus: 500
        })
      );
    }
  });
}
