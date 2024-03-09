// Global scope variable
var globalVariable = "I am a global variable";
function exampleFunction() {
  // Local scope variable
  var localVariable = "I am a local variable";

  // Accessing global variable inside the function
  console.log("Inside function - Global variable:", globalVariable);

  // Accessing local variable inside the function
  console.log("Inside function - Local variable:", localVariable);
}

// Call the function
exampleFunction();

// Try to access local variable outside the function (will result in an error)
// console.log("Outside function - Local variable:", localVariable);

// Access global variable outside the function
console.log("Outside function - Global variable:", globalVariable);
