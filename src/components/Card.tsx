import classes from "./Card.module.css";

export default function Card({ image, title, price }) {
  return (
    <>
      <div className={classes.container}>
        <img
          src={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Banana.png/836px-Banana.png"
          }
          alt=""
        />
        <h1>Price: $420.69</h1>
        <h2>
          Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA
          III 2.5
        </h2>
        <div className={classes.centered}>
          <button>Add to Cart</button>
        </div>
      </div>
    </>
  );
}
