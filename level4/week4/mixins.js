// const speedMixin = {
//   move: function() {
//     console.log(`Moving at a speed of ${this.speed}`)
//   }
// }
// const colorMixin = {
//   printColors: function() {
//     console.log(`R: ${this.red}, B: ${this.blue}, G: ${this.green}`)
//   }
// }
// const soundMixin = {
//   makeNoise: function() {
//     console.log(this.noise)
//   }
// }
//
// const car = {
//   noise: "Vroom",
//   speed: 50,
// }
// const bird = {
//   noise: "Twirp",
//   speed: 20,
// }
// const lamp = {
//   red: 243,
//   blue: 143,
//   green: 42,
// }
//
// Object.assign(car, speedMixin, soundMixin)
// Object.assign(bird, speedMixin, soundMixin)
// Object.assign(lamp, colorMixin)
//
// car.move()
// car.makeNoise()
//
// bird.move()
// bird.makeNoise()
//
// lamp.printColors()

const speedMixin = function(target) {
  target.prototype.move = function() {
    console.log(`Moving at a speed of ${this.speed}`);
  };
};

const colorMixin = function(target) {
  target.prototype.printColors = function() {
    console.log(`R: ${this.red}, B: ${this.blue}, G: ${this.green}`);
  };
};

const soundMixin = function(target) {
  target.prototype.makeNoise = function() {
    console.log(this.noise);
  };
};


function Car() {
  this.noise = "Vroom vroom";
  this.speed = 50;
}

function Bird() {
  this.noise = "sew sew";
  this.speed = 20;
}

function Lamp() {
  this.red = 243;
  this.blue = 143;
  this.green = 42;
}
speedMixin(Car);
soundMixin(Car);
speedMixin(Bird);
soundMixin(Bird);
colorMixin(Lamp);

const car = new Car();
const bird = new Bird();
const lamp = new Lamp();

car.move();
car.makeNoise();
bird.move();
bird.makeNoise();
lamp.printColors();
