import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_TO_SAVE_LATER,
  REMOVE_FROM_SAVE_LATER,
  MANAGE_QTY,
} from "utils/CartActions";

export const cartInitialState = {
  cart: [],
  saveToLater: [],
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, qty: 1 }],
      };

    case REMOVE_FROM_CART:
      const updatedCart = state.cart.filter(
        ({ id }) => action.payload.id !== id
      );
      return { ...state, cart: updatedCart };

    case ADD_TO_SAVE_LATER:
      return {
        ...state,
        saveToLater: [...state.saveToLater, action.payload],
      };

    case REMOVE_FROM_SAVE_LATER:
      const updatedSaveLater = state.saveToLater.filter(
        ({ id }) => action.payload.id !== id
      );
      return { ...state, saveToLater: updatedSaveLater };

    case MANAGE_QTY:
      const productId = action.payload.product.id;
      const updatedValue = state.cart.map((product) =>
        product.id === productId
          ? { ...product, qty: action.payload.qty }
          : product
      );

      return { ...state, cart: updatedValue };
    default:
      return state;
  }
};
