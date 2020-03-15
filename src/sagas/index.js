import { all } from "redux-saga/effects";
import { watchIncrementAsync, watchDecrementAsync } from "./watchers/counter";

function* helloSaga() {
  console.log("Hello Sagas!");
}

export default function* rootSaga() {
  yield all([helloSaga(), watchIncrementAsync(), watchDecrementAsync()]);
}
