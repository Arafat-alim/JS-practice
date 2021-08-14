//callback function solving with arrow function best way
const person = {
  name: "Arafat",
  courses: ["HTML", "CSS", "JS"],
  showCourse() {
    this.courses.forEach((course) => {
      console.log(this, course);
    }); //here no need to add this keyword or any other method, arrow function auto call to the reference obje
  },
};

person.showCourse();
