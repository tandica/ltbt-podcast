import { createContext, useReducer } from "react";

export const Store = createContext();

const initialState = {
  cart: {
    cartItems: [],
  },
};

//update state in cart
//instead of creating duplicate items of the same product, we increase the amount of the one product if button is pressed more than once
function reducer(state, action) {
  switch (action.type) {
    case "CART_ADD_ITEM":
      const newItem = action.payload;
      const existItem = state.cart.cartItems.find(
        (item) => item._id === newItem._id
      );
      const cartItems = existItem
        ? state.cart.cartItems.map((item) =>
            item._id === existItem._id ? newItem : item
          )
        : [...state.cart.cartItems, newItem];
      return { ...state, cart: { ...state.cart, cartItems } };

    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch: dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
