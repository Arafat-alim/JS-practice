function circle(radius) {
  //   const cycling = {
  return {
    radius: radius,
    get() {
      console.log("Getting radius from the paramter");
    },
  };
  //   return cycling; // important to return
}

// creating a new object
let obj = circle(1);
console.log(obj);
