import { createContext, useContext, useReducer } from "react";
import { cartInitialState, cartReducer } from "./cartReducer";

const CartContext = createContext(null);

const CartContextProvider = ({ children }) => {
  const [cartState, cartDispatcher] = useReducer(cartReducer, cartInitialState);
  return (
    <CartContext.Provider value={{ cartState, cartDispatcher }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { useCart, CartContextProvider };
