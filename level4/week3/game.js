function getRandomModifier() {
    const maxModifier = 100;
    const minModifier = 85;
    return Math.floor(Math.random() * (maxModifier - minModifier) + minModifier) / 100;
}

class Character {
  constructor(name, health, attack, mana) {
    if (mana <= 0) return;
    this.name = name
    this.health = health
    this.maxHealth = health;
    this.attack = attack;
    this.mana = mana;
  }
  decreaseHealth(damage) {
    this.health -= damage;
    this.health = (Math.round(this.health * 10)) / 10
    if (this.health < 0) this.health = 0;
  }
  heal() {
    if (this.mana < 0) return;
    const randomModifier = getRandomModifier();
    const amountToHeal = 0.2 * this.mana * randomModifier; 
    this.health += amountToHeal;
    this.mana -= 0.2 * this.mana;
    this.health = (Math.round(this.health * 10)) / 10
  }
  attackEnemy(enemy) {
    const randomModifier = getRandomModifier();
    enemy.decreaseHealth(this.attack * randomModifier);
  }
}

function turnAction(user, target) {
  const decision = Math.random();
  console.log(`${user.name}'s Turn!`)

  if (decision > 0.6) {
    user.heal();
    console.log(`\t${user.name} Healed!`)
  }
  else {
    user.attackEnemy(target);
    console.log(`\t${user.name} attacked ${target.name}!`)
  };
}

function startFight(player, monster) {
  while (player.health > 0 && monster.health > 0) {
    if (player.health > 0) turnAction(player, monster);
    if (monster.health > 0) turnAction(monster, player);


    console.log("\n")
    console.log(`${player.name} Health: ${player.health}`)
    console.log(`${monster.name} Health: ${monster.health}`)
    console.log("--------------------------------------")
  }

  if (player.health > 0) {
    console.log(`${player.name} won!`)
    return;
  }
  console.log(`${monster.name} won!`)
}

const player = new Character("Player", 100, 15, 100);
const monster = new Character("Monster", 100, 15, 100);

startFight(player, monster);
