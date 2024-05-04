import Card from "./Card";
import classes from "./Shop.module.css";
import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

export default function Shop() {
  const [products, setProducts] = useOutletContext();
  useEffect(() => {
    if (products.length === 0) {
      fetch("https://fakestoreapi.com/products/")
        .then((res) => res.json())
        .then((json) =>
          json.filter(
            (item: { category: string }) =>
              item.category === "men's clothing" ||
              item.category === "women's clothing"
          )
        )
        .then((filtered) => {
          // Add a quantity value for the product selection
          let filteredit = filtered.map((product: object) => {
            return { ...product, quantity: 0 };
          });
          setProducts(filteredit);
        });
    }
  }, []);

  return (
    <>
      <div className={classes.container}>
        {products.map((product) => (
          <Card
            key={product.id}
            product={product}
            id={product.id}
            setProducts={setProducts}
            products={products}
          ></Card>
        ))}
      </div>
    </>
  );
}
