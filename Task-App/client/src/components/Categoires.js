import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import products from "./products";

const Categoires = () => {
  const [products, setProducts] = useState([]);

  const url = "https://fakestoreapi.com/products";

  useEffect(() => {
    axios.get(url).then((res) => {
      console.log(res.data);
      setProducts(res.data);
    });
  }, []);

  return (
    <div>
      <div className="products-container">
        {products.map((product) => {
          return (
            <products
              image={product.image}
              price={product.price}
              title={product.title}
              category={product.category}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Categoires;
