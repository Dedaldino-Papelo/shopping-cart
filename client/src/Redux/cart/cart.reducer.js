import { cart_types } from "./cart.type";
import { addItemToCart } from "./cart.utils";

const initial_state = {
    cartItems: []
}

export const cart_reducer = (state = initial_state, action) => {
    switch (action.type) {
        case cart_types.ADD_CART:
        return {
          ...state,
          cartItems: addItemToCart(state.cartItems, action.payload)
        };

        case cart_types.REMOVE_CART_ITEM:
          return {
            ...state,
            cartItems: state.cartItems.filter
                        (cartItem => cartItem._id !== action.payload._id)
          }
      default:
        return state;
    }
  };