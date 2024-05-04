import classes from "./CartItem.module.scss";
export default function CartItem({ image, title, id, quantity }) {
  return (
    <>
      <div className={classes.container}>
        <img src={image} alt="" className={classes.productImage} />
        <h2 className={classes.centered}>{title}</h2>
        <div className={classes.settings_container}>
          <input
            type="number"
            className={classes.quantitySetting}
            value={quantity}
          />
          <button className={classes.removeButton}>Remove Item</button>
        </div>
      </div>
    </>
  );
}
