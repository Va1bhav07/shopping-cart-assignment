import { takeLatest, call, put } from "redux-saga/effects";
import { Actions } from "../constants";
import axios from "axios";

const url = "http://localhost:5000";

function* fetchProducts() {
  try {
    const resp = yield call([axios, "get"], url + "/products");
    yield put({ type: Actions.GET_PRODUCTS_SUCCESS, payload: resp.data });
  } catch (e) {
    yield put({
      type: Actions.GET_PRODUCTS_FAIL,
      error: e.message || "somthing wrong with server",
    });
  }
}

export default function* productSaga() {
  yield takeLatest(Actions.GET_PRODUCTS, fetchProducts);
}
