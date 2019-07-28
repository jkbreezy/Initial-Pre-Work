/*I had to watch a turorial video (https://www.youtube.com/watch?v=iLx4ma8ZqvQ) to understand this more. */
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
  "use strict";
  arr2 = [...arr1]; // change this line
})();
console.log(arr2);
