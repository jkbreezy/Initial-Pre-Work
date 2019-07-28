/*This exercise stresses the importance or order in an else/if statement, when running an if or else if block of code, it will only process up to the point where the condition is true, so if your first statement is true the subsequent statements will not process*/
function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

// Change this value to test
orderMyLogic(7);
