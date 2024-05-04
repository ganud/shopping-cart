import getQuantity from "./getQuantity";
import { expect, test } from "vitest";
import data from "./data.json";

export default function getTotal(products: Array<object>) {
  let sum = 0;
  for (let i = 0; i < products.length; i++) {
    sum = products[i].quantity * products[i].price + sum;
  }
  return sum;
}
