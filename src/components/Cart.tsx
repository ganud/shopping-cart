// Takes an array of objects containing the product info
import { useOutletContext } from "react-router-dom";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
export default function Cart() {
  const [products, setProducts] = useOutletContext();

  return (
    <>
      <div className={classes.centered}>
        <div className={classes.container}>
          <CartItem image="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"></CartItem>
          <CartItem image="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"></CartItem>
          <CartItem image="https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg"></CartItem>
        </div>
      </div>
    </>
  );
}
