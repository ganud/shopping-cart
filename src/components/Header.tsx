import classes from "./Header.module.css";
import { Link } from "react-router-dom";
export default function Header({ quantity }: { quantity: number }) {
  return (
    <>
      <div className={classes.header}>
        <div className={classes["header-text"]}>Torn n' Corn</div>
        <div className={classes["header-subtext"]}>
          We sell stuff torn out of the dumpsters, and maybe corn.
        </div>
        <div className={classes["container"]}></div>
        <div className={classes.nav}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <div className={classes["nav-item"]}>Home</div>
          </Link>
          <Link to="/shop" style={{ textDecoration: "none" }}>
            <div className={classes["nav-item"]}>Shop</div>
          </Link>
          <Link to="/cart" style={{ textDecoration: "none" }}>
            <div className={classes["nav-item"]}>
              Cart ({quantity > 100 ? "100+" : quantity})
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
