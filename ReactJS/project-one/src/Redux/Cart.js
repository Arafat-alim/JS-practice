import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handlerDelete = (index, price) => {
    dispatch({ type: "DELETE", payLoad: { index, price } });
  };
  return (
    <div className="customeDiv">
      <h2>Cart Component</h2>
      <hr />
      <ul>
        {cart.map((item, index) => {
          return (
            <li onClick={() => handlerDelete(index, item.cost)} key={item.id}>
              {item.pName}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cart;
