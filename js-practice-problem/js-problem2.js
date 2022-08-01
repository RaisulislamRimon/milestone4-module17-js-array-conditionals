// Write a program to find your and your friends’ grades using if-else.
var myResult = 85;
var tomResult = 66;
var JaneResult = 95;
var peterResult = 56;
var johnResult = 40;

// this program is to find my grades only using if-else
if (myResult >= 80 && myResult <= 100) {
  console.log("Result Grade is : A");
} else if (myResult >= 60 && myResult <= 79) {
  console.log("Result Grade is : B");
} else if (myResult >= 50 && myResult <= 59) {
  console.log("Result Grade is : C");
} else if (myResult >= 40 && myResult <= 49) {
  console.log("Result Grade is : D");
} else if (myResult >= 0 && myResult <= 39) {
  console.log("Result Grade is : F");
}
