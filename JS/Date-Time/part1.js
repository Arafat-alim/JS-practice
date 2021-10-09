const dt = new Date();
console.log(dt);
//! Date Fri Oct 08 2021 00:16:54 GMT+0530 (India Standard Time)

//3rd syntax

const d2 = new Date(1633790296520);
console.log(d2);

//4th syntax
const d3 = new Date("2021-9-9T24:32:00Z");
//T and Z time and zone
//the format shown here is the ISO-8601 extended format "YYYY-MM-DDTHH:mm:ss:sssZ"
console.log(d3); //Date Thu Sep 09 2021 05:30:00 GMT+0530 (India Standard Time)
