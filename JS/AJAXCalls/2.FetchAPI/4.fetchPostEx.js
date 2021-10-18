// ! POST request - we need an object parameter
let todo = {
  userId: 1001,
  id: 1,
  title: "New Title",
  completed: false,
};

fetch("https://jsonplaceholder.typicode.com/todos", {
  method: "POST",
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
  body: JSON.stringify(todo),
}).then((response) => console.log(response));

//! Output
/* Response { type: "cors", url: "https://jsonplaceholder.typicode.com/todos", redirected: false, status: 201, ok: true, statusText: "Created", headers: Headers, body: ReadableStream, bodyUsed: false } */
