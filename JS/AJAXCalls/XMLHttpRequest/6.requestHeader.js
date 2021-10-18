//! setRequestHeader() is a method call between the open and send method
let req = new XMLHttpRequest();
req.open("GET", "https://jsonplaceholder.typicode.com/comments");
req.responseType = "json";
req.send();
req.onreadystatechange = function () {
  if (req.readyState === 4 && req.status === 200) {
    console.log(req.getAllResponseHeaders());
    console.log(req.getResponseHeader("content-type"));
    console.log(req.response);
  }
};

//! output
//! req.getAllResponseHeaders()
/* cache-control: max-age=43200
content-type: application/json; charset=utf-8
expires: -1
pragma: no-cache */
//! getResponseHeader("content-type");
/* application/json; charset=utf-8 */

//! how will you set HTTP headers
/* req.open("GET", "URL");
XMLHttpRequest.setRequestHeader(header, value);
request.send(); */
