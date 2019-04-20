import {takeLatest, call, put} from "redux-saga/effects";
import {usersActions} from "./";
import {usersEndpoint} from "../endpoints";
import queryString from "querystring";
import {toast} from "react-toastify";

export default function* booksSaga() {
  yield takeLatest("USERS_FETCH_REQUEST", function*(action) {
    try {
      const headers = action.headers;

      const data = yield call(
        fetch,
        usersEndpoint +
          action.payload.page +
          `?${queryString.stringify({username: action.payload.username})}`,
        {
          method: "GET",
          headers
        }
      );

      const json = yield data.json();

      if (json.success) {
        yield put(usersActions.usersFetchReceive(json.data));
      } else {
        toast.error(json.error.message, {
          position: toast.POSITION.TOP_RIGHT
        });
        yield put(usersActions.usersFetchFailed(json));
      }
    } catch (error) {
      yield put(
        usersActions.usersFetchFailed({
          userMessage: "Nieidentyfikowany błąd",
          httpStatus: 500
        })
      );
    }
  });
}
