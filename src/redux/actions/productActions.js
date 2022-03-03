import fakeStoreApi from "../../API/fakeStoreApi";
import { ActionTypes } from "../constants/actionTypes";

export const fetchProducts = () => async (dispatch) => {
  const response = await fakeStoreApi.get("/products");
  dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data });
};

export const fetchFilteredProducts = (category) => async (dispatch) => {
  const response = await fakeStoreApi.get(`/products/category/${category}`);
  dispatch({
    type: ActionTypes.FETCH_FILTERED_PRODUCTS,
    payload: response.data,
  });
};

export const fetchProduct = (id) => async (dispatch) => {
  const response = await fakeStoreApi.get(`/products/${id}`);
  dispatch({ type: ActionTypes.SELECTED_PRODUCT, payload: response.data });
};

export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
