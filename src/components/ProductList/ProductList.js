import React from "react";
import Product from "./Product";

const ProductList = (props) => {
  const { products, addToCart } = props;

  return (
    <div>
      {products.map((product) => (
        <Product key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;
