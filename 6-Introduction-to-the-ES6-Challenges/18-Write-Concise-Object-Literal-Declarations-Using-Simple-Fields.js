/*This was a bit easier to understand but again it took me a moment to follow*/
const createPerson = (name, age, gender) => {
  "use strict";
  // change code below this line
  return ({ name, age, gender});
  // change code above this line
};
console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object

^^^^^^^^^ This is my solution and below is the original code.

const createPerson = (name, age, gender) => {
  "use strict";
  // change code below this line
  return {
    name: name,
    age: age,
    gender: gender
  };
  // change code above this line
};
console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object
