import { ActionTypes } from "../constants/actionTypes";

const initialState = {
  products: [],
  filteredProducts: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_PRODUCTS:
      return { ...state, products: [payload] };
    case ActionTypes.FETCH_FILTERED_PRODUCTS:
      return { ...state, filteredProducts: [payload] };
    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};
