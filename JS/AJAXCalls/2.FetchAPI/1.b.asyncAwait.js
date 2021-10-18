//basic way in async/awaits function
//! GET

async function fetchData() {
  let data;
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (response.ok) {
    //! data = await response.json(); //turn into json object
    //! data = await response.text(); //turn into text
    data = await response.blob(); //turn into blob object
    console.log(data); //! Array(10) [ {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…} ]
  }
}

fetchData();
