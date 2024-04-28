export default function getQuantity(products: Array<object>) {
  let sum = 0;
  for (let i = 0; i < products.length; i++) {
    sum = products[i].quantity + sum;
  }
  return sum;
}
