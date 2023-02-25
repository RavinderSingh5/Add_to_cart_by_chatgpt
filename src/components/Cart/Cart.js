import React from "react";

const Cart = (props) => {
  const { items, total } = props;

  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <p>Total: {total}</p>
      <button>Checkout</button>
    </div>
  );
};

export default Cart;
