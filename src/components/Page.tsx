import Header from "./Header";
import classes from "./Page.module.css";
import { useState } from "react";
import { Outlet } from "react-router-dom";

// State contains the id of product, and quantity of that product
export default function Page() {
  const [products, setProducts] = useState([]);
  return (
    <>
      <div className={classes["container"]}>
        <Header></Header>
        <div className={classes.body}>
          <Outlet context={[products, setProducts]}></Outlet>
        </div>
      </div>
    </>
  );
}
