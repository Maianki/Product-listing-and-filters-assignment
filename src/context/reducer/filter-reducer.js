import { BRANDS, IDEALFOR, PRICE, SIZES, CLEARALL } from "utils/filterActions";
import data from "utils/data.json";

export const filterInitialState = {
  products: data.products,
  price: "",
  brands: [],
  idealFor: [],
  sizes: [],
};

export const filterReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case PRICE:
      return { ...state, price: payload };
    case BRANDS:
      return {
        ...state,
        brands: state.brands.includes(payload)
          ? state.brands?.filter((brand) => brand !== payload)
          : [...state.brands, payload],
      };
    case IDEALFOR:
      return {
        ...state,
        idealFor: state.idealFor.includes(payload)
          ? state.idealFor?.filter((ideal) => ideal !== payload)
          : [...state.idealFor, payload],
      };
    case SIZES:
      return {
        ...state,
        sizes: state.sizes.includes(payload)
          ? state.sizes?.filter((size) => size !== payload)
          : [...state.sizes, payload],
      };
    case CLEARALL:
      return filterInitialState;
    default:
      return state;
  }
};
