import { BRANDS, IDEALFOR, PRICE, SIZES, CLEARALL } from "utils/filterActions";

export const filterInitialState = {
  price: "",
  brands: [],
  idealFor: [],
  sizes: [],
};

export const filterReducer = (state, action) => {
  switch (action.type) {
    case PRICE:
      return;
    case BRANDS:
      return;
    case IDEALFOR:
      return;
    case SIZES:
      return;
    case CLEARALL:
      return filterInitialState;
    default:
      return state;
  }
};
