//! Bind change the reference but does execute the function
function go(a, b) {
  console.log(this); //Object { name: "Gaming" }
  console.log(a, b); //5 7
}

let obj = {
  name: "Gaming",
};

let fe = go.bind(obj, 5, 7);
fe();
