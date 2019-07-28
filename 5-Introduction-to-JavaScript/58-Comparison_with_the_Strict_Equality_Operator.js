/*We learned the difference between equal (==) and strict equal (===) in that equal will attempt to translate data from one type to another (string to num) whereas strict equal will do no such thing and simply compare values for true/false*/
// Setup
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testStrict(10);
