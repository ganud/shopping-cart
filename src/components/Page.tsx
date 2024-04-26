import Header from "./Header";
import classes from "./Page.module.css";

export default function Page({ render }) {
  return (
    <>
      <div className={classes["container"]}>
        <Header></Header>
        <div className={classes.body}>{render}</div>
      </div>
    </>
  );
}
