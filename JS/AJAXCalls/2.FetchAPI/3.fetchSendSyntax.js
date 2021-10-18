//! SUppose we want to make a post request using FetchAPi
const response = fetch("https://jsonplaceholder.typicode.com/comments", {
  method: "POST",
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
  body: JSON.stringify(data),
});
