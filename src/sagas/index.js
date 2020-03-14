import { put, takeEvery, all } from "redux-saga/effects";

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
  yield put({ type: "INCREMENT", payload: { data: "inc.payload" } });
}

function* decrementAsync() {
  yield delay(1000);
  yield put({ type: "DECREMENT", payload: { data: "dec.payload" } });
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
function* watchIncrementAsync() {
  yield takeEvery("INCREMENT_ASYNC", incrementAsync);
}
function* watchDecrementAsync() {
  yield takeEvery("DECREMENT_ASYNC", decrementAsync);
}

function* helloSaga() {
  console.log("Hello Sagas!");
}

export default function* rootSaga() {
  yield all([helloSaga(), watchIncrementAsync(), watchDecrementAsync()]);
}
