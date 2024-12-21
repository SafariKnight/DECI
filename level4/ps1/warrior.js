function WarriorRoom1(name, health, weapon = { name: 'None', damage: 0, durability: Infinity}) {
  this.name = name;
  this.health = health;
  this.weapon = weapon;
  this.attack = function (target) {

    target.takeDamage(this.weapon.damage);
    // takeDamage(target, this.weapon.damage)
  };
  this.takeDamage = function (hp) {
    this.health -= hp;
  };
  this.changeWeapon = function (newWeapon) {
    if (this.weapon.name !== "None")
      this.weapon = newWeapon;
  };
  this.assignWeapon = function (newWeapon) {
    if (this.weapon.name === "None") {
      this.weapon = newWeapon
    }
  };
}

const weapon = {
  name: "Sword",
  damage: 10,
  durability: 200,
}

const player = new WarriorRoom1("Kareem", 100);
const enemy = new WarriorRoom1("Ahmed", 100);

player.assignWeapon(weapon);

player.attack(enemy)

console.log(enemy.health)
