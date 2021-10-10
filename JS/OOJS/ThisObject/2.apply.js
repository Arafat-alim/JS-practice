//! Apply() - act same just take two parameters one target object and second array

function go(a, b, c) {
  //yaha pe multiple dena hoga
  console.log(this); // Object { name: "goku" }
  console.log(a, b, c, c); //1 2 3 3
}

let obj = {
  name: "goku",
};

go.apply(obj, [1, 2, 3, 4, 5, 6]);
