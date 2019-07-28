/*This was very frustrating... I added const to the front of my code as the lesson showed and coded it correctly... it wouldn't work until I removed const*/
let a = 8, b = 6;
(() => {
  "use strict";
  // change code below this line
 [a,b] = [b,a];

  // change code above this line
})();
console.log(a); // should be 6
console.log(b); // should be 8
