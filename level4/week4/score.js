const makePlayer = function(name) {
  return {
    name: name,
    score: 0,
  }
}

const gameScoreTracker = (function() {
  const players = [];
  let currentPlayer = null;

  function startGame(playerName) {
    const player = makePlayer(playerName);
    if (!players.includes(player)) {
      players.push(player);
    }
    currentPlayer = player;
  }
  function updateScore(addedScore) {
    currentPlayer.score += addedScore;
  }
  function endGame() {
    for(let i = 0; i < players.length; i++) {
      if (players[i].name === currentPlayer.name) { 
        players[i] = null;
      }
    }
    currentPlayer = null;
  }
  function getScore(name) {
    try {

      for(let i = 0; i < players.length; i++) {
        if (players[i].name === name) { 
          return players[i].score 
        }
      }
    } catch (e) {}
    return 0;
  }
  return {
    startGame,
    updateScore,
    endGame,
    getScore,
  }
}())


// console.log(gameScoreTracker.getScore("Kareem"))
gameScoreTracker.startGame("Kareem");
// console.log(gameScoreTracker.getScore("Kareem"))
gameScoreTracker.updateScore(200);
// console.log(gameScoreTracker.getScore("Kareem"))
gameScoreTracker.endGame()
// console.log(gameScoreTracker.getScore("Kareem"))
