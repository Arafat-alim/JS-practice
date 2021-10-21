import React, { useState } from "react";

function EventsReact5() {
  //making a states
  const [count, setCount] = useState(0);

  //making a functions
  function addValue() {
    setCount(count + 1);
  }
  function minValue() {
    setCount(count - 1);
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={addValue}>(+)</button>
      <button onClick={minValue}>(-)</button>
    </div>
  );
}

export default EventsReact5;
