import { ActionTypes } from "../constants/action-types";

const initalState = {
  products: [],

}

export const productsReducer = (state = initalState, { type, payload }) => {

  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
}