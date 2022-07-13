export const calculateTotalPrice = (cart) => {
  return cart.reduce((acc, curr) => {
    return acc + curr.price * curr.qty;
  }, 0);
};
