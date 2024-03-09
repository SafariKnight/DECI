function determineGrade(score) {
  if (score >= 90 && score <= 100) {
    return "A";
  } else if (score >= 80 && score < 90) {
    return "B";
  } else if (score >= 70 && score < 80) {
    return "C";
  } else if (score >= 60 && score < 70) {
    return "D";
  } else if (score >= 0 && score < 60) {
    return "F";
  } else {
    return "Invalid score, please enter a score between 0 and 100.";
  }
}

// Get input from the user
// let inputScore = prompt("Enter the numeric score:"); // Doesn't work on node
let inputScore = "92" 

// Convert input to a number
let score = parseFloat(inputScore);

// Check if the input is a valid number
if (!isNaN(score) && score >= 0 && score <= 100) {
  let grade = determineGrade(score);
  console.log(`The grade for the score ${score} is: ${grade}`);
} else {
  console.log("Invalid score, please enter a score between 0 and 100.");
}
