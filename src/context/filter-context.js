import { createContext, useContext, useReducer } from "react";
import { filterInitialState, filterReducer } from "./reducer/filter-reducer";

const FilterContext = createContext(null);

export const FilterProvider = ({ children }) => {
  const [filteredProducts, dispatchFilters] = useReducer(
    filterReducer,
    filterInitialState
  );
  return (
    <FilterContext.Provider value={{ filteredProducts, dispatchFilters }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => useContext(FilterContext);
