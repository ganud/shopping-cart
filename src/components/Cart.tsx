// Takes an array of objects containing the product info
import { useOutletContext } from "react-router-dom";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import getQuantity from "../helpers/getQuantity";
import getTotal from "../helpers/getTotal";

export default function Cart() {
  const [products, setProducts] = useOutletContext();
  const productsInCart = products.filter((product) => product.quantity !== 0);

  if (getQuantity(products) === 0) {
    return <h2>No items in cart</h2>;
  }

  // Only renders items with a quantity value
  return (
    <>
      <div className={classes.centered}>
        <div className={classes.container}>
          Your Cart
          {productsInCart.map((product) => (
            <CartItem
              product={product}
              products={products}
              setProducts={setProducts}
              id={product.id}
            ></CartItem>
          ))}
          <div className={classes.priceTotal}>
            Total: ${getTotal(productsInCart)}
          </div>
        </div>
      </div>
    </>
  );
}
