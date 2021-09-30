//develop a program that can asked a candidate indivial and different  questions
//! Higher Order Function

const interviewQuestion = (name) => {
  if (name === "Arafat") {
    return function (topics) {
      console.log(`Hi ${name}, What is ${topics}?, Please explain us?`);
    };
  }
  if (name === "Aquib") {
    return function (topics) {
      console.log(`Hi ${name}, What is ${topics}?, Please explain us?`);
    };
  }
  if (name === "Uzma") {
    return function (topics) {
      console.log(`Hi ${name}, What is ${topics}?, Please explain us?`);
    };
  } else {
    return console.log("Who are you?");
  }
};
//! higher order function can be called in two ways
//! 1st way
// interviewQuestion("Arafat")("Ui");
// interviewQuestion("Aquib")("Front END");
// interviewQuestion("Uzma")("Back END");
// interviewQuestion("Arafat")("Data");
// interviewQuestion("Rohan")("Ui");

//! 2nd way
// ask a candidate to multiple questions
const candi1 = interviewQuestion("Arafat");
console.log(typeof candi1);
candi1("Data Structure");
candi1("java");
candi1("javascript");
candi1("Go");
