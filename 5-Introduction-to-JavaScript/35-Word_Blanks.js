/*We learned how to concatinate using variables to form a string*/
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  // Your code below this line
  var result = "The " + myNoun + " wasn't very " + myAdjective + " yet I " + myVerb + " and " + myAdverb + ".";

  // Your code above this line
  return result;
}

// Change the words here to test your function
wordBlanks("dog", "big", "ran", "quickly");
