/*This exercise showed us further use of chaining if/else if statements*/
function testSize(num) {
  // Only change code below this line
  if (num < 5) {
    return "Tiny";
  }
  else if (num < 10) {
    return "Small";
  }
  else if (num < 15) {
    return "Medium";
  }
  else if (num < 20) {
    return "Large";
  }
  else (num >= 20)
    return "Huge";


  return "Change Me";
  // Only change code above this line
}

// Change this value to test
testSize(7);
