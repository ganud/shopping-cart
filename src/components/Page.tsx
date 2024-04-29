import Header from "./Header";
import classes from "./Page.module.css";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import getQuantity from "../helpers/getQuantity";

// State contains the id of product, and quantity of that product
export default function Page() {
  const [products, setProducts] = useState([]);
  let totalQuantity = getQuantity(products);
  return (
    <>
      <div className={classes["container"]}>
        <Header quantity={totalQuantity}></Header>
        <div className={classes.body}>
          <Outlet context={[products, setProducts]}></Outlet>
        </div>
      </div>
    </>
  );
}
