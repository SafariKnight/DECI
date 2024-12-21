function randomNum(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}

function rollDice() {
  return new Promise((resolve) => {
    setTimeout(
      () => {
        resolve(randomNum(1, 6));
      },
      randomNum(1000, 3000),
    );
  });
}

function playGame(targetNumber) {
  return new Promise((resolve, reject) => {
    rollDice()
      .then((roll) => targetNumber === roll)
      .then((guess) => {
        console.log(guess);
        if (guess === true) {
          resolve("You Won!");
        } else {
          reject("You Lost!");
        }
      });
  });
}

for (let i = 3; i > 0; i--) {
  playGame(4)
    .then((message) => {
      console.log(message);
    })
    .catch((error) => {
      console.log(error);
    });
}
