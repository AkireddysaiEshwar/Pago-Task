import React from "react";

const products = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.category}</h2>
      <h3>{props.price}</h3>
      <img src={props.image} alt="/" />
    </div>
  );
};

export default products;
