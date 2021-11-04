import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Purchased = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const purchaseHandler = (e) => {
    const pName = e.target.options[e.target.selectedIndex].text;

    const cost = e.target.value;
    let obj = { pName, cost };
    dispatch({ type: "PURCHASED", payLoad: obj }); //it calls the reducer function
  };
  return (
    <div className="customeDiv">
      <h3>Purchased Component</h3>
      <hr />
      <select onChange={(e) => purchaseHandler(e)}>
        {products.map((product) => {
          return (
            <option value={product.cost} key={product.id}>
              {product.pName} - ${product.cost}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Purchased;
