// ! inline script
<script>
  function name(params) {}
  function name(params) {}
  function name(params) {}
</script>;

// ! 2. Script Tags
<script src="./JSAsync.js"></script>;
<script src="./JSAsync.js"></script>; //console.log(a);
<script src="./JSAsync.js"></script>;
<script src="./JSAsync.js"></script>; //var a;
<script src="./JSAsync.js"></script>;

// ! 3. IIFE (Immediately Invoked Function Expression)
var myApp = {};

(function () {
  myApp.add = function (a, b) {
    return a + b;
  };
})();

//! 4. Browserify
// js1
module.exports = function app(a, b) {
  return a + b;
};
// js2
const myapp = require("./add");

// ! Webpack
export const add = (a, b) => {
  return a + b;
};

export default function sub(a, b) {
  return a - b;
}
// js2
import { add } from "./";
import sub from "./";
