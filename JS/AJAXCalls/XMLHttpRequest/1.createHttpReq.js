let request = new XMLHttpRequest();
//! Methods are
request.open("GET", "https://jsonplaceholder.typicode.com/comments"); //! setting
request.send(); //! data want to send like POST, DELETE. here dont need
//! After sending the data to the server, then we received the data from the server as a response

//! need to show the data
request.onload = function () {
  console.log(request.response); //here we get a simple text data
};
