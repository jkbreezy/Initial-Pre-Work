/*I tried to use Vegetable instead of name in this for a good 20 minutes.....*/
function makeClass() {
  "use strict";
  /* Alter code below this line */
class Vegetable {
  constructor(name){
    this.name = name;
  }
}
  /* Alter code above this line */
  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name); // => should be 'carrot'
