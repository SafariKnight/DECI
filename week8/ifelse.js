const PlayerOneChoice = "paper";
const PlayerTwoChoice = "rock";

let won = "";

if (PlayerOneChoice == PlayerTwoChoice) {
  won = "tie";
} else if (PlayerOneChoice == "rock" && PlayerTwoChoice == "paper") {
  won = "p2";
} else if (PlayerOneChoice == "paper" && PlayerTwoChoice == "scissors") {
  won = "p2";
} else if (PlayerOneChoice == "scissors" && PlayerTwoChoice == "rock") {
  won = "p2";
} else if (PlayerOneChoice == "rock" && PlayerTwoChoice == "scissors") {
  won = "p1";
} else if (PlayerOneChoice == "paper" && PlayerTwoChoice == "rock") {
  won = "p1";
} else if (PlayerOneChoice == "scissors" && PlayerTwoChoice == "paper") {
  won = "p1";
}

if (won == "tie") console.log("It's a tie!")
else if (won == "p2") console.log("Player two won!")
else if (won == "p1") console.log("Player one won!")
