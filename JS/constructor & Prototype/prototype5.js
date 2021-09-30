function Person(age) {
  this.age = age;
}
var p1 = new Person(8);

console.log(Person.hasOwnProperty("name")); //true !! AB kaise wo math pooch
// ! Reason
/* Person.hasOwnProperty("name");
true;
Person.name;
("Person"); */
