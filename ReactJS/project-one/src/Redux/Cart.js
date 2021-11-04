import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div className="customeDiv">
      <h2>Cart Component</h2>
      <hr />
      <ul>
        {cart.map((item) => {
          return <li key={item.id}>{item.pName}</li>;
        })}
      </ul>
    </div>
  );
};

export default Cart;
