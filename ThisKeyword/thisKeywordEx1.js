//introduction
// normal function -> window or global
// method -> object

//1) Method
const person = {
  name: "Arafat",
  run() {
    console.log(this); //this point to person object
  },
};

person.run();

//2) Normal Function
function walk() {
  console.log(this); //point to window object
}

walk();

//3) constructor => point to new object
function Eat(msg) {
  this.eat = msg;
  console.log(this);
}

const pie = new Eat("i am doing nothing"); //constructor

//callback function point to window
const human = {
  name: "Aquib",
  courses: ["HTML", "CSS", "JS"],
  blow() {
    console.log(this);
  },
  showCourses() {
    this.courses.forEach(function (course) {
      console.log(this, course); //point to window
    });
  },
};

human.showCourses();

// there are few methods which can help us to point to the human object
//call(), apply(), bind() ,arrow function
//see thisKeywordEx2 for more clarification
