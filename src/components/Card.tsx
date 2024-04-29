import classes from "./Card.module.css";
import { useState } from "react";
export default function Card({
  image,
  title,
  price,
  id,
  products,
  setProducts,
}) {
  function incrementQuantity(amount: number) {
    // Update the specific item with new quantity
    let product = products.filter((item) => item.id === id);
    product[0].quantity = product[0].quantity + amount;
    // Delete the old item from product list
    let filteredProducts = products.filter((item) => item.id !== id);

    // Format back into a readable format by map to add the new item
    let trimmedProduct = product[0];
    let updatedProducts = { ...filteredProducts, trimmedProduct };
    let formattedProducts = Object.keys(updatedProducts)
      .map((key) => {
        return updatedProducts[key];
      })
      .sort((a, b) => (a.id > b.id ? 1 : -1)); // Sort by id like the original API

    setProducts(formattedProducts);
  }

  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <div className={classes.container}>
        <img src={`${image}`} alt="" className={classes.productImage} />
        <h1>Price: ${price}</h1>
        <h2>{title}</h2>
        <div className={classes.centered}>
          <input
            type="number"
            min="0"
            onChange={(event) => setQuantity(parseInt(event.target.value))}
          />
        </div>
        <div className={classes.centered}>
          <button onClick={() => incrementQuantity(quantity)}>
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}
