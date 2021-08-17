import { Actions } from "../constants";
import { takeLatest, put, call } from "redux-saga/effects";
import axios from "axios";
import "regenerator-runtime/runtime";

const url = "http://localhost:5000";

// console.log(process.env.API_BASE_URL);

function* fetchBanner() {
  try {
    const resp = yield call([axios, "get"], url + "/banners");
    yield put({ type: Actions.GET_BANNER_SUCCESS, payload: resp });
  } catch (e) {
    yield put({
      type: Actions.GET_BANNER_FAIL,
      error: e.message || "somthing wrong with server",
    });
  }
}

function* fetchCategories() {
  try {
    const resp = yield call([axios, "get"], url + "/categories");
    yield put({ type: Actions.GET_CATEGORIES_SUCCESS, payload: resp });
  } catch (e) {
    yield put({
      type: Actions.GET_CATEGORIES_FAIL,
      error: e.message || "somthing wrong with server",
    });
  }
}

function* HomeSaga() {
  yield takeLatest(Actions.GET_BANNER, fetchBanner);
  yield takeLatest(Actions.GET_CATEGORIES, fetchCategories);
}

export default HomeSaga;
