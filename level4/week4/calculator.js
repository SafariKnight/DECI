const calculator = (function() {
  
  const secret = 10;
  const squarePower = 2;
  const cubePower = 3;

  return {
    add: function(x, y) {
      return x + y;
    },
    addSecret: function(x) {
      return x + secret;
    },
    subtract: function(x, y) {
      return x - y;
    },
    subtractSecret: function(x) {
      return x - secret;
    },
    multiply: function(x, y) {
      return x * y;
    },
    divide: function(x, y) {
      return x / y;
    },
    power: function(x, y) {
      return Math.pow(x, y);
    },
    square: function(x) {
      return Math.pow(x, squarePower);
    },
    cube: function(x) {
      return Math.pow(x, cubePower);
    },
    root: function(x) {
      return Math.sqrt(x)
    },
  }
})()


console.log(calculator.multiply(8, 3))
