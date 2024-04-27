import Header from "./Header";
import classes from "./Page.module.css";
import { useState } from "react";
import { Outlet } from "react-router-dom";

// State contains the id of product, and quantity of that product
export default function Page() {
  const [cart, useCart] = useState([]);
  return (
    <>
      <div className={classes["container"]}>
        <Header></Header>
        <div className={classes.body}>
          <Outlet context={[cart, useCart]}></Outlet>
        </div>
      </div>
    </>
  );
}
