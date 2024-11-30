function createGame(min, max) {

  let secret = min + Math.floor(Math.random() * (max + 1));   

  function guessNumber(guess) {
    switch (true) {
      case guess > secret:
        return { message: "Too High!", correct: false };
      case guess < secret:
        return { message: "Too Low!", correct: false };
      case guess === secret:
        return { message: "Correct!", correct: true };
      default:
        return { message: "Invalid Input!", correct: false };
    }
  }
  return guessNumber;
}

const guessNumber = createGame(1, 10);

let won = false;
let message = "Guess a Number";
while (!won){
  ({ message: message, correct: won } = guessNumber(parseInt(prompt(message))));
}
