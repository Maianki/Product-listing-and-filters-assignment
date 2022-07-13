export const calculateDiscountPrice = (cart) => {
  return cart.reduce((acc, curr) => {
    return acc + curr.discount * curr.qty;
  }, 0);
};
