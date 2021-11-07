import React, { useState } from "react";
import Todo from "./Component/Todo";
import User from "./Component/User";

const Fetch = () => {
  const [users, setUsers] = useState([]);
  const [todos, setTodos] = useState([]);
  const fetchingUser = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      // .then((data) => console.log(data));
      .then((data) => setUsers(data));
  };
  const fetchTodos = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      // .then((data) => console.log(data));
      .then((data) => setTodos(data));
  };

  return (
    <div>
      <div className="topbar"></div>
      <button onClick={fetchTodos}>Todos</button>
      <button onClick={fetchingUser}>User</button>
      <hr />
      <h1>User Component</h1>
      {users.map((user, index) => {
        return <User user={user} key={index} />;
      })}
      {todos.map((todo, index) => {
        return <Todo todo={todo} key={index} />;
      })}
    </div>
  );
};

export default Fetch;
