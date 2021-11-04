import React from "react";

const purchased = () => {
  const products = [
    { id: 1, pName: "Apple", Cost: 20 },
    { id: 2, pName: "Mango", Cost: 30 },
    { id: 3, pName: "Banana", Cost: 40 },
    { id: 4, pName: "Grapes", Cost: 50 },
  ];
  return (
    <div className="customeDiv">
      <h3>Purchased Component</h3>
      <hr />
      <select>
        {products.map((product) => {
          return (
            <option value={product.pName} key={product.id}>
              {product.pName}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default purchased;
