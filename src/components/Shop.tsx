import Card from "./Card";
import classes from "./Shop.module.css";
import { useEffect, useState } from "react";

export default function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
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
