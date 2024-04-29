import classes from "./CartItem.module.scss";
export default function CartItem({ image }) {
  return (
    <>
      <div className={classes.container}>
        <img src={image} alt="" className={classes.productImage} />
        <h2 className={classes.centered}>
          Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA
          III 2.5
        </h2>
      </div>
    </>
  );
}
