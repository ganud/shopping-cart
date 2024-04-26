import Card from "./Card";
// Fetch and return an array of cards listing products
import classes from "./Shop.module.css";

export default function Shop() {
  return (
    <>
      <div className={classes.container}>
        <Card></Card>
        <Card></Card>
      </div>
    </>
  );
}
