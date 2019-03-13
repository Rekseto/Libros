import {takeLatest, call, put} from "redux-saga/effects";
import {
  publishersFetchFailed,
  publishersFetchReceive,
  publishersAddReceive,
  publishersAddFailed,
  publishersFetchRequest,
  publishersRemoveReceive,
  publishersRemoveFailed
} from "./actions";
import {publishersEndpoint} from "../endpoints";

export default function* publishersSaga() {
  yield takeLatest("PUBLISHERS_FETCH_REQUEST", function*(action) {
    try {
      const data = yield call(fetch, publishersEndpoint, {
        method: "GET"
      });

      const json = yield data.json();

      if (json.success) {
        yield put(publishersFetchReceive(json.data));
      } else {
        yield put(publishersFetchFailed(json));
      }
    } catch (error) {
      yield put(
        publishersFetchFailed({
          userMessage: "Nieidentyfikowany błąd",
          httpStatus: 500
        })
      );
    }
  });

  yield takeLatest("PUBLISHERS_ADD_REQUEST", function*(action) {
    try {
      const headers = action.headers;
      const data = yield call(fetch, publishersEndpoint, {
        method: "POST",
        body: JSON.stringify(action.payload),
        headers
      });

      const json = yield data.json();

      if (json.success) {
        yield put(publishersAddReceive(json.data));
        yield put(publishersFetchRequest());
      } else {
        yield put(publishersAddFailed(json));
      }
    } catch (error) {
      yield put(
        publishersAddFailed({
          userMessage: "Nieidentyfikowany błąd",
          httpStatus: 500
        })
      );
    }
  });

  yield takeLatest("PUBLISHERS_REMOVE_REQUEST", function*(action) {
    try {
      const headers = action.headers;
      const data = yield call(fetch, publishersEndpoint + action.payload.id, {
        method: "DELETE",
        headers
      });

      const json = yield data.json();

      if (json.success) {
        yield put(publishersRemoveReceive(json.data));
        yield put(publishersFetchRequest());
      } else {
        yield put(publishersRemoveFailed(json));
      }
    } catch (error) {
      yield put(
        publishersRemoveFailed({
          userMessage: "Nieidentyfikowany błąd",
          httpStatus: 500
        })
      );
    }
  });
}
