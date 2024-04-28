// Takes an array of objects containing the product info
import { useOutletContext } from "react-router-dom";

export default function Cart() {
  const [products, setProducts] = useOutletContext();
  console.log(products);
  return <>hello</>;
}
