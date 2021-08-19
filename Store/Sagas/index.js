import { all, fork } from "redux-saga/effects";
import homeSaga from "./HomeSaga";
import productSaga from "./productSaga";

export default function* rootSaga() {
  yield all([fork(homeSaga), fork(productSaga)]);
}
