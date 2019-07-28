/*The && Operator simplifies code by comparing two condition statements for a value rather than requiring seperate if statements for comparing values*/
function testLogicalAnd(val) {
  // Only change code below this line

  if (val <= 50 && val >= 25) {
  return "Yes"
  }

  // Only change code above this line
  return "No";
}

// Change this value to test
testLogicalAnd(10);
