export default function getQuantity(products: Array<object>) {
  let sum = 0;
  for (let i = 0; i < products.length; i++) {
    if ("quantity" in products[i]) {
      sum = products[i].quantity + sum;
    }
  }
  console.log(sum);
  return sum;
}
