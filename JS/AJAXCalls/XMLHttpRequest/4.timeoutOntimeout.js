//! timeout - property
//! ontimeout - event
//! requset.responseType - Properties

let request = new XMLHttpRequest();
//! Methods are
request.open("GET", "https://jsonplaceholder.typicode.com/comments"); //! setting
request.responseType = "json"; //! Array(500) [ {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, … ]
request.timeout = 200;
request.send(); // very important
//! need to show the data
request.onload = function () {
  if (request.status === 200) {
    console.log(request.response);
  } else {
    document.write("Invalid Request - ", request.status);
  }
};

//! if time is over then we give a message
request.ontimeout = function () {
  console.log("Time out ....");
};
