//! onreadystatechange event fired when a property called "readystate"  changes
//! repalcemnet of onload event

let request = new XMLHttpRequest();
request.open("GET", "https://jsonplaceholder.typicode.com/comments");
request.send();
request.onreadystatechange = function () {
  if (request.readyState === 4 && request.status === 200) {
    console.log(request.response);
  }
};

//! we have onother method
//! request.abort(); // we can use this method whereever we want to stop the execution
