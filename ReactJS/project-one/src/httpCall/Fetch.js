import React, { useState } from "react";

const Fetch = () => {
  const [users, setUsers] = useState([]);
  const fetchingUser = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      // .then((data) => console.log(data));
      .then((data) => setUsers(data));
  };
  const fetchTodos = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <div className="topbar"></div>
      <button onClick={fetchTodos}>Todos</button>
      <button onClick={fetchingUser}>User</button>
      {users.map((user, index) => {
        return (
          <div className="box1">
            <h3>Id - {user.id}</h3>
            <h3>Name - {user.name}</h3>
            <h3>Username - {user.username}</h3>
            <h3>Email - {user.email}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Fetch;
