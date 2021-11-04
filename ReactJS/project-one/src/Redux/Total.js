import React from "react";
import { useSelector } from "react-redux";

const Total = () => {
  const total = useSelector((state) => state.total);
  return (
    <div className="customeDiv">
      <h2>Total Component</h2>
      <hr />
      <h3>Total - {total}</h3>
    </div>
  );
};

export default Total;
