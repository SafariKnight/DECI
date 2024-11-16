// One
const fruits = ["orange", "banana", "apple", "watermelon", "grapes"]

// Two
console.log(`Second Fruit: ${fruits[2]}`)

// Three
fruits.push("strawberry")

// Four
fruits.pop()

// Five
const person = {
  name: "Ahmed",
  age: 32,
  profession: "programmer",
}

// Helper function for creating future person objects
const createPerson = (name, age, profession) => {
  return {
    name: name,
    age: age,
    profession: profession
  }
}

// Six
console.log(`Age: ${person.age}`)

// Seven
person.profession = "teacher"

// Eight
console.log("My list of fruits:")
fruits.forEach((fruit) => console.log(fruit))

// Nine
Object.keys(person).forEach((key) => console.log(`${key}: ${person[key]}`))

// Ten
const removeFruitByIndex = (index) => {
  fruits.slice(index, 1)
}
removeFruitByIndex(3)
console.log(fruits)

// Eleven
const updatePersonProperty = (property, value) => {
  person[property] = value
}

updatePersonProperty("age", 33) // Happy Birthday

// Twelve
const matrix = [
  [1, 3, 8],
  [2, 9, 10]
]

// Thirteen
console.log(`Second Row, Third Column: ${matrix[1][2]}`)

// Fourteen
matrix[0].splice(1, 1)

// Fifteen
const printMatrix = (matrix) => {
  matrix.forEach((row) => console.log(row))
}

console.log("My matrix:")
printMatrix(matrix)

// Sixteen
const fruitLengths = fruits.map((fruit) => fruit.length)
console.log("Length of fruit names:")
console.log(fruitLengths)

// Seventeen
const calculateAverageAge = (people) => {
  const ages = []
  people.forEach((person) => ages.push(person.age))

  const sum = ages.reduce((accumulator, currentAge) => currentAge + accumulator);
  return (sum / people.length).toFixed(2)
}

console.log(`Average Age: ${calculateAverageAge([
  createPerson("Basmala", 15, "student"),
  createPerson("Fares", 23, "programmer"),
  createPerson("Omar", 55, "engineer")
])}`)

