//! DOM manipulation
let container = document.querySelector(".container");
//create an element h1
let head1 = document.createElement("h1");
head1.textContent = "Shopping List";
head1.style.color = "Red";
head1.style.textAlign = "center";
container.appendChild(head1);
//create an element h2
let head2 = document.createElement("h2");
head2.textContent = "Enter a new Item: ";
head2.style.textAlign = "center";
container.appendChild(head2);
//creating an input
let inputBox = document.createElement("input");
inputBox.setAttribute("class", "input");
// inputBox.value = "Welcome";
inputBox.setAttribute("placeholder", "Enter your value here");
head2.appendChild(inputBox);

//creating an button
let btn = document.createElement("button");
btn.textContent = "Click here to Add";
container.appendChild(btn);

//functionality
btn.addEventListener("click", () => {
  alert("hello");
});
