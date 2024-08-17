/**
 * This function calculates total prices of a new order
 * @param {Array} product cardProduct: Array of Objects
 * @returns {number} Total price
 */

export const totalPrice = (product) => {
  let sum = 0;
  product.forEach((products) => (sum += products.price));
  return sum;
};
