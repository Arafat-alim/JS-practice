import React from "react";

const Fetch = () => {
  const fetchTodos = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  const fetchingUser = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
  return (
    <div>
      <div className="topbar"></div>
      <button onClick={fetchTodos}>Todos</button>
      <button onClick={fetchingUser}>User</button>
    </div>
  );
};

export default Fetch;
