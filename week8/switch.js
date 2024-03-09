const paper = "paper";
const scissors = "scissors";
const rock = "rock";

const PlayerOneChoice = rock;
const PlayerTwoChoice = scissors;

switch (true) {
  case PlayerOneChoice == PlayerTwoChoice:
    won = "tie";
    break;

  case PlayerOneChoice == "rock" && PlayerTwoChoice == "paper":
    won = "p2";
    break;

  case PlayerOneChoice == "paper" && PlayerTwoChoice == "scissors":
    won = "p2";
    break;

  case PlayerOneChoice == "scissors" && PlayerTwoChoice == "rock":
    won = "p2";
    break;

  case PlayerOneChoice == "rock" && PlayerTwoChoice == "scissors":
    won = "p1";
    break;

  case PlayerOneChoice == "paper" && PlayerTwoChoice == "rock":
    won = "p1";
    break;

  case PlayerOneChoice == "scissors" && PlayerTwoChoice == "paper":
    won = "p1";
    break;

  default:
    won = "error";
    break;
}

switch (win) {
  case won == "tie":
    console.log("It's a tie!");
    break;
  case won == "p1":
    console.log("Player one won!");
    break;
  case won == "p2":
    console.log("Player two won!");
    break;
  default:
    console.log("Something went wrong");
    break;
}
