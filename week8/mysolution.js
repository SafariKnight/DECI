const paper = {
  is: "paper",
  beats: "rock",
};

const rock = {
  is: "rock",
  beats: "scissors",
};

const scissors = {
  is: "scissors",
  beats: "paper",
};

const playerOneChoice = scissors;
const playerTwoChoice = paper;

if (playerOneChoice.is === playerTwoChoice.is) {
  console.log("It's a tie!");
} else if (playerOneChoice.beats === playerTwoChoice.is) {
  console.log("Player one wins!");
} else if (playerOneChoice.is === playerTwoChoice.beats) {
  console.log("Player two wins!");
} else {
  console.log("Error");
}
