// Takes an array of objects containing the product info
import { useOutletContext } from "react-router-dom";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import getQuantity from "../helpers/getQuantity";

export default function Cart() {
  const [products, setProducts] = useOutletContext();
  const productsInCart = products.filter((product) => product.quantity !== 0);
  console.log(productsInCart);

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
              image={product.image}
              id={product.id}
              title={product.title}
              quantity={product.quantity}
            ></CartItem>
          ))}
          <div className={classes.priceTotal}>Total: $420.69</div>
        </div>
      </div>
    </>
  );
}
