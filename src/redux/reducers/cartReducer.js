import { ActionTypes } from "../constants/actionTypes";

const initialState = {
  cart: [],
};

export const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    /*ADD_TO_CART
    Check to see if item is in cart
    return the state and map through the cart
    if item is not in cart return cart plus new item with qty: 1
    if item is in cart and item is equal to clicked item return item details with qty+1
    else the item. 
    */
    case ActionTypes.ADD_TO_CART:
      const inCart = state.cart.find((item) =>
        item.id === payload.id ? true : false
      );
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === payload.id ? { ...item, qty: item.qty + 1 } : item
            )
          : [...state.cart, { ...payload, qty: 1 }],
      };
    /*REMOVE_FROM_CART
    Filter out all the contents in cart equal to clicked item id
    */
    case ActionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== payload.id),
      };
    /*ADJUST_QTY
    map through cart and if clicked item id is equal return item with qty plus value
    else return the item. 
    */
    case ActionTypes.ADJUST_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === payload.id ? { ...item, qty: +payload.qty } : item
        ),
      };
    default:
      return state;
  }
};
