import { combineReducers } from "redux";
import { homeReducer } from "./homeReducer";
import { productReducer } from "./productReducer";

export const rootReducer = combineReducers({
  homeReducer,
  productReducer,
});
