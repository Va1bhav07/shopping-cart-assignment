import { Actions } from "../constants";

const initState = {
  bannerData: [],
  categoriesData: [],
  error: "",
};

export const homeReducer = (state = initState, action) => {
  switch (action.type) {
    case Actions.GET_BANNER_SUCCESS:
      return {
        ...state,
        bannerData: action.payload.data,
      };
    case Actions.GET_BANNER_FAIL:
      return {
        ...state,
        error: action.error,
      };
    case Actions.GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        categoriesData: action.payload.data,
      };
    case Actions.GET_CATEGORIES_FAIL:
      return {
        error: action.error,
      };
    default:
      return {
        ...state,
      };
  }
};
