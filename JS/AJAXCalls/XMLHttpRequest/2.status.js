let request = new XMLHttpRequest();
//! Methods are
request.open("GET", "https://jsonplaceholder.typicode.com/commen"); //! setting
request.send(); //! data want to send like POST, DELETE. here dont need
//! After sending the data to the server, then we received the data from the server as a response

//! need to show the data
request.onload = function () {
  /*console.log(request.status); //200
  console.log(request.response); //here we get a simple text data */
  if (request.status === 200) {
    console.log(request.response);
  } else {
    document.write("Invalid Request - ", request.status);
  }
};
