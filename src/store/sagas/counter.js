import { take, all, fork } from "redux-saga/effects";
import { incrementCounter } from "../actions";

export function* logger() {
  while (true) {
    yield take(incrementCounter);
    console.log("Taked increment from saga");
  }
}

export default function* root() {
  yield all([fork(logger)]);
}
