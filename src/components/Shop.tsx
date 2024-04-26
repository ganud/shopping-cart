import Card from "./Card";
// Fetch and return an array of cards listing products
import classes from "./Shop.module.css";
import { useEffect, useState } from "react";
export default function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((json) =>
        json.filter(
          (item) =>
            item.category === "men's clothing" ||
            item.category === "women's clothing"
        )
      )
      .then((filtered) => {
        setProducts(filtered);
      });
  }, []);

  return (
    <>
      <div className={classes.container}>
        {products.map((product) => (
          <Card
            image={product.image}
            title={product.title}
            price={product.price}
          ></Card>
        ))}
      </div>
    </>
  );
}
