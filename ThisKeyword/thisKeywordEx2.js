//callback function solving with forEach
const person = {
  name: "Arafat",
  courses: ["HTML", "CSS", "JS"],
  showCourse() {
    this.courses.forEach(function (course) {
      console.log(this, course);
    }, this); //here forEach(1st,2nd) 2nd arugement me pass krnge this toh humhra person object ko point karega
  },
};

person.showCourse();
