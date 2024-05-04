import classes from "./CartItem.module.scss";
export default function CartItem({ product, products, setProducts, id }) {
  function setCartItemAmount(quantity: number) {
    // Update the specific item with new quantity
    let product = products.filter((item) => item.id === id);
    product[0].quantity = quantity;
    // Delete the old product from product list
    let filteredProducts = products.filter((item) => item.id !== id);
    // Format back into a readable format by map to add the new product
    let trimmedProduct = product[0];
    let updatedProducts = { ...filteredProducts, trimmedProduct };
    let formattedProducts = Object.keys(updatedProducts)
      .map((key) => {
        return updatedProducts[key];
      })
      .sort((a, b) => (a.id > b.id ? 1 : -1)); // Sort by id like the original API

    setProducts(formattedProducts);
  }

  return (
    <>
      <div className={classes.container}>
        <img src={product.image} alt="" className={classes.productImage} />
        <h2 className={classes.centered}>{product.title}</h2>
        <div className={classes.settings_container}>
          <input
            type="number"
            min={1}
            className={classes.quantitySetting}
            value={product.quantity}
            onChange={(event) =>
              setCartItemAmount(parseInt(event.target.value))
            }
          />
          <button
            className={classes.removeButton}
            onClick={() => setCartItemAmount(0)}
          >
            Remove Item
          </button>
        </div>
      </div>
    </>
  );
}
