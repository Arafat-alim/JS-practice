import React, { useState } from "react";
import Todo from "./Component/Todo";
import User from "./Component/User";

const Fetch = () => {
  const [users, setUsers] = useState([]);
  const [todos, setTodos] = useState([]);
  const [userData, setUserData] = useState(true);
  const fetchingUser = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      // .then((data) => console.log(data));
      .then((data) => setUsers(data));

    setUserData(true);
  };
  const fetchTodos = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      // .then((data) => console.log(data));
      .then((data) => setTodos(data));

    setUserData(false);
  };

  return (
    <div>
      <div className="topbar"></div>
      <button onClick={fetchTodos}>Todos</button>
      <button onClick={fetchingUser}>User</button>
      <hr />

      {userData
        ? users.map((user, index) => {
            return (
              <>
                <h3>User Component - {(index + 1).toString()}</h3>
                <User user={user} key={index} />
              </>
            );
          })
        : todos.map((todo, index) => {
            return (
              <>
                <h3>Todo Component - {(index + 1).toString()}</h3>
                <Todo todo={todo} key={index} />;
              </>
            );
          })}
    </div>
  );
};

export default Fetch;
