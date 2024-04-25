import classes from "./Header.module.css";

export default function Header() {
  return (
    <>
      <div className={classes.header}>
        <div className={classes["header-text"]}>Torn n' Corn</div>
        <div className={classes["header-subtext"]}>
          We sell stuff torn out of the dumpsters, and maybe corn.
        </div>
        <div className={classes["container"]}></div>
        <div className={classes.nav}>
          <div className={classes["nav-item"]}>Home</div>
          <div className={classes["nav-item"]}>Shop</div>
          <div className={classes["nav-item"]}>Cart</div>
        </div>
      </div>
    </>
  );
}
