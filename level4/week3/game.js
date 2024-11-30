class Character {
  constructor(name, health, attack) {
    this.name = name
    this.health = health
    this.attack = attack
  }
  decreaseHealth(damage) {
    this.health -= damage;
    this.health = (Math.round(this.health * 10)) / 10
  }
  attackEnemy(enemy) {
    const maxModifier = 100;
    const minModifier = 85;
    const randomModifier = Math.floor(Math.random() * (maxModifier - minModifier) + minModifier)
    enemy.decreaseHealth((this.attack * (randomModifier / 100)));
  }
}

function startFight(player, monster) {
  while (player.health > 0 && monster.health > 0) {
    if (player.health > 0) {
      player.attackEnemy(monster)
      console.log(`Monster Health: ${monster.health}`)
    }
    if (monster.health > 0) {
      monster.attackEnemy(player)
      console.log(`Player Health: ${player.health}`)
    }
  }

  if (player.health > 0) {
    console.log(`${player.name} won!`)
    return;
  }
  console.log(`${monster.name} won!`)
}

const player = new Character("Player", 100, 10);
const monster = new Character("Monster", 100, 15);

startFight(player, monster);

console.log(monster.health);
