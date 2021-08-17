import { Actions } from "../constants";

export const getBanner = () => {
  return {
    type: Actions.GET_BANNER,
  };
};

export const getCategories = () => {
  return {
    type: Actions.GET_CATEGORIES,
  };
};
