/*Here we learned how to use the hasOwnProperty function*/
// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your Code Here
  if (myObj.hasOwnProperty(checkProp)) {
    return myObj[checkProp];
  }
  else {
    return "Not Found"
  }
}

// Test your code by modifying these values
checkObj("gift");
