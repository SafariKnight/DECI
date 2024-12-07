const speedMixin = {
  move: function() {
    console.log(`Moving at a speed of ${this.speed}`)
  }
}
const colorMixin = {
  printColors: function() {
    console.log(`R: ${this.red}, B: ${this.blue}, G: ${this.green}`)
  }
}
const soundMixin = {
  makeNoise: function() {
    console.log(this.noise)
  }
}

const car = {
  noise: "Vroom",
  speed: 50,
}
const bird = {
  noise: "Twirp",
  speed: 20,
}
const lamp = {
  red: 243,
  blue: 143,
  green: 42,
}

Object.assign(car, speedMixin, soundMixin)
Object.assign(bird, speedMixin, soundMixin)
Object.assign(lamp, colorMixin)

car.move()
car.makeNoise()

bird.move()
bird.makeNoise()

lamp.printColors()
