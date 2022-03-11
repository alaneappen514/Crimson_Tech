import { ActionTypes } from "../constants/actionTypes";

export const addToCart = (product) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: {
      ...product,
    },
  };
};

export const removeFromCart = (productID) => {
  return {
    type: ActionTypes.REMOVE_FROM_CART,
    payload: {
      id: productID,
    },
  };
};

export const adjustQty = (productID, value) => {
  return {
    type: ActionTypes.ADJUST_QTY,
    payload: {
      id: productID,
      qty: value,
    },
  };
};
