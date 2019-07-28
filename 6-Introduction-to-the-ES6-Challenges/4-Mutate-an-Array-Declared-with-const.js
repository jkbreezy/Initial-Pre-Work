/*We learned that we can still manipulate objects that are declared with a const, we are just not allowed to modify the value of the declaration*/
const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  // change code below this line
s.pop();
s.pop();
s.pop();
s.push(2,5,7)
  // s = [2, 5, 7]; <- this is invalid

  // change code above this line
}
editInPlace();
