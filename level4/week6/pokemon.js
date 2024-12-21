function randomNum(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}

function fetchRandomPokemonData(id) {
  return new Promise((resolve, reject) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((response) => response.json())
      .then((pokemon) => {
        resolve({
          name: pokemon.species.name,
          height: pokemon.height,
          weight: pokemon.weight,
        });
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function displayPokemonData() {
  fetchRandomPokemonData(randomNum(1, 1025))
    .then((pokemon) => {
      console.log(`Name: ${pokemon.name}`)
      console.log(`Weight: ${pokemon.weight / 10}kg`)
      console.log(`Height: ${pokemon.height / 10}m`)
    })
    .catch((error) => {
      console.error(error);
    });
}

displayPokemonData()
