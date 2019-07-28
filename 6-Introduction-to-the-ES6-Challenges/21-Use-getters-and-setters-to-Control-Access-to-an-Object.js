/*We learned getters and setters here, I had to check in with the hints again here because I coded it initially without a getter and setter and it worked exactly as I coded it. */
function makeClass() {
  "use strict";
  /* Alter code below this line */
class Thermostat {
  constructor(F) {
    this.F = F;
  }
  get temperature(){
    return 5/9 * (this.F -32)
  }
  set temperature(C){
    this.F = C * 9.0 / 5 + 32
  }
}
  /* Alter code above this line */
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
