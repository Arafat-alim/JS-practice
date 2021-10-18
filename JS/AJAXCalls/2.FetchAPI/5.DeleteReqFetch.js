//! Delete request
let todo = {
  userId: 1001,
  id: 1,
  title: "New Title",
  completed: false,
};
fetch("https://jsonplaceholder.typicode.com/todos", {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
  body: JSON.stringify(todo),
}).then((response) => response);
