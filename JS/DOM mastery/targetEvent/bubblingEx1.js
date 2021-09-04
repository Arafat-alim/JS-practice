// bubbling
// when target is one
document.getElementById("one").addEventListener(
  "click",
  (e) => {
    console.log(1);
    console.log("Target - ", e.target.dataset.name);
    console.log("CurrentTarget - ", e.currentTarget.dataset.name);
  },
  false
);

// when target is two
document.getElementById("two").addEventListener("click", (e) => {
  console.log(2);
  console.log("Target - ", e.target.dataset.name);
  console.log("CurrentTarget - ", e.currentTarget.dataset.name);
});

//when target is three
document.getElementById("three").addEventListener("click", (e) => {
  console.log(3);
  console.log("Target - ", e.target.dataset.name);
  console.log("CurrentTarget - ", e.currentTarget.dataset.name);
});

//when target is four
document.getElementById("four").addEventListener("click", (e) => {
  console.log(4);
  console.log("Target - ", e.target.dataset.name);
  console.log("CurrentTarget - ", e.currentTarget.dataset.name);
});
