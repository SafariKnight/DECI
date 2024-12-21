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

const player = new WarriorRoom1("Help", 100);
console.log(player.name)
