import React from "react";

const Cart = () => {
  const cart = [
    { id: 1, pName: "Apple", Cost: 20 },
    { id: 2, pName: "Mango", Cost: 30 },
  ];
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
