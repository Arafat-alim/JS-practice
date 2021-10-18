//! onprogress = event, it fired continuosly when a request receive data
//! onerror - event, when there is an error encountered while requesting
let request = new XMLHttpRequest();
//! Methods are
request.open("GET", "https://jsonplaceholder.typicode.com/comments"); //! setting
request.responseType = "json"; //! Array(500) [ {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, … ]
request.timeout = 200;
request.send(); // very important

//! testing for code syntax not a proper program !!
request.onprogress = function () {
  console.log("on progressing");
};
request.onerror = function () {
  console.log("When error occured");
};
