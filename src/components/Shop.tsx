import Card from "./Card";
import classes from "./Shop.module.css";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

export default function Shop() {
  const [products, setProducts] = useOutletContext();

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
        // Add a quantity value for the cart
        let filteredit = filtered.map((product) => {
          if (products.length !== 0) {
            // If there already are items in the cart
            return product;
          }
          return { ...product, quantity: 0 }; // Else set all quantities to zero
        });
        setProducts(filteredit);
      });
  }, []);

  return (
    <>
      <div className={classes.container}>
        {products.map((product) => (
          <Card
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            id={product.id}
          ></Card>
        ))}
      </div>
    </>
  );
}
