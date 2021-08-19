import { Actions } from "../constants";

const initState = {
  productData: [],
  error: "",
};

export const productReducer = (state = initState, action) => {
  switch (action.type) {
    case Actions.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        productData: action.payload,
      };
    case Actions.GET_PRODUCTS_FAIL:
      return {
        ...state,
        error: action.error,
      };
    default:
      return {
        ...state,
      };
  }
};
