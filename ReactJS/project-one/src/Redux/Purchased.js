import React from "react";
import { useSelector } from "react-redux";

const Purchased = () => {
  const products = useSelector((state) => state.products);
  return (
    <div className="customeDiv">
      <h3>Purchased Component</h3>
      <hr />
      <select>
        {products.map((product) => {
          return (
            <option value={product.pName} key={product.id}>
              {product.pName} - ${product.cost}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Purchased;
