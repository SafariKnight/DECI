// let userinput = prompt("Enter your input: "); // Doesn't work on node
let userinput = "testingtesting"

let x = userinput;

let result = ""

// Checks the length of input
if (x.length > 10) {
  result = "Long enough"
} else {
  result = "Too short"
}

console.log(result);
