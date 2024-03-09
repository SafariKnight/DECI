var fav_food = "pizza";
fav_food = "chicken"; // Can be updated
console.log(fav_food);

function test() {
  console.log(fav_food) // Global Scope
}

test()

let fav_drink = "cola";
fav_drink = "banan juice"; // Can be updated
console.log(fav_drink); // Local Scope only

const fav_car = "BMW";
// fav_car = "jeep"; // Can't be updated
console.log(fav_car);
