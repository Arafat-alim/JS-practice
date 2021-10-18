//! requset.responseType - Properties

let request = new XMLHttpRequest();
//! Methods are
request.open("GET", "https://jsonplaceholder.typicode.com/comments"); //! setting
/* request.responseType = "json";*/ //! Array(500) [ {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, … ]

request.responseType = "document";
request.responseType = "";
request.responseType = "blob"; //! Blob { size: 157745, type: "application/json" }

//! need to show the data
request.onload = function () {
  if (request.status === 200) {
    console.log(request.response);
  } else {
    document.write("Invalid Request - ", request.status);
  }
};
