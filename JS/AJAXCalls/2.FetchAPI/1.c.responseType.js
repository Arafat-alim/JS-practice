async function fetchData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  console.log(response);
  console.log(response.headers);
  console.log(response.headers.get("Content-Type")); //application/json; charset=utf-8
}
fetchData();
