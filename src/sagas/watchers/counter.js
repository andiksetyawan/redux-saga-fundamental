import { put, takeEvery, all } from "redux-saga/effects";
import { increment, decrement } from "../../actions/counter";

// ...
const delay = ms => new Promise(res => setTimeout(res, ms));

// Our worker Saga: will perform the async increment task
function* incrementAsync() {
  //if call api
  // try {
  //   const user = yield call(Api.fetchUser, action.payload.userId);
  //   yield put({ type: "USER_FETCH_SUCCEEDED", user: user });
  // } catch (e) {
  //   yield put({ type: "USER_FETCH_FAILED", message: e.message });
  // }
  yield delay(1000);
  yield put(increment());
}

function* decrementAsync() {
  yield delay(1000);
  console.log("decrement", decrement);
  yield put(decrement());
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
  yield takeEvery("INCREMENT_ASYNC", incrementAsync);
}
export function* watchDecrementAsync() {
  yield takeEvery("DECREMENT_ASYNC", decrementAsync);
}
