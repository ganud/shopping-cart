import classes from "./Card.module.css";

export default function Card({ image, title, price }) {
  return (
    <>
      <div className={classes.container}>
        <img src={`${image}`} alt="" />
        <h1>Price: {price}</h1>
        <h2>{title}</h2>
        <div className={classes.centered}>
          <button>Add to Cart</button>
        </div>
      </div>
    </>
  );
}
