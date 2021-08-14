function outer() {
  console.log("Outer FUnction called");
  function inner() {
    console.log("Inner FUnction called");
  }
  inner(); //called krna hoga q k function scope me hee run hoga global me todi
}

outer();
