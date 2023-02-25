import React, { useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

const App = () => {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (product) => {
    setItems([...items, product]);
    setTotal(total + product.price);
  };

  return (
    <div>
      <ProductList products={PRODUCTS} addToCart={addToCart} />
      <Cart items={items} total={total} />
    </div>
  );
};

export default App;
