//basic way in async/awaits function

async function fetchData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  console.log(response);
}

fetchData();
//! Output
/* Response { type: "cors", url: "https://jsonplaceholder.typicode.com/users", redirected: false, status: 200, ok: true, statusText: "OK", headers: Headers, body: ReadableStream, bodyUsed: false } */
