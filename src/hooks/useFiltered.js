import React from "react";
import { useFilter } from "context/filter-context";
export function useFiltered() {
  const {
    filteredProducts: { price, brands, idealFor, sizes, products },
  } = useFilter();

  const originalProducts = products;

  const sortPrductsByPrice = (originalProducts) => {
    console.log(price);
    if (price === "lowToHigh") {
      return originalProducts.sort(
        ({ price: firstPrice }, { price: secondPrice }) => {
          return parseInt(firstPrice) - parseInt(secondPrice);
        }
      );
    } else if (price === "highToLow") {
      return originalProducts.sort(
        ({ price: firstPrice }, { price: secondPrice }) => {
          return parseInt(secondPrice) - parseInt(firstPrice);
        }
      );
    } else {
      return originalProducts;
    }
  };

  const getFilterProductsByBrands = (sortedProducts) => {
    if (brands.length > 0) {
      return sortedProducts.filter((product) => brands.includes(product.brand));
    } else {
      return sortedProducts;
    }
  };

  const getFilterProductsBySizes = (sortedProducts) => {
    if (sizes.length > 0) {
      return sortedProducts.filter((product) => sizes.includes(product.size));
    } else {
      return sortedProducts;
    }
  };

  const getFilteredProductsByIdealFor = (sortedProducts) => {
    if (idealFor.length > 0) {
      return sortedProducts.filter((product) =>
        idealFor.includes(product.idealFor)
      );
    } else {
      return sortedProducts;
    }
  };

  const productSortedByPrice = sortPrductsByPrice(originalProducts);

  const productsFilteredByBrands =
    getFilterProductsByBrands(productSortedByPrice);

  const productsFilteredBySizes = getFilterProductsBySizes(
    productsFilteredByBrands
  );

  const productsFilteredByIdealFor = getFilteredProductsByIdealFor(
    productsFilteredBySizes
  );

  return { data: productsFilteredByIdealFor };
}
