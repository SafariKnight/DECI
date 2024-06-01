// One
let name = "K";
console.log(name);

// Two
const PI = 3.14159;
console.log(PI);

// Three
console.log(`Name: ${name} Age: 15 Profession: Student`);

// Four
const colors = ["red", "green", "blue"];

// Five
for (const color of colors) {
  console.log(color);
}

// Six
const person = {
  name: "Ahmed",
  age: 15,
  profession: "student",
};

// Seven
const { name: userName, age, profession } = person;
console.log(userName)
console.log(age)
console.log(profession)

// Eight
const moreColors = ["orange", "violet", "purple"];

// Nine
const allColors = [...moreColors, ...colors];

// Ten
const square = (num) => num * num;

// Eleven
const squareOfFive = square(5);
console.log(squareOfFive);

// Twelve
const numbers = [1, 2, 3, 4, 6, 7, 9, 19, 8];

// Thirteen
for (const number in numbers) {
  console.log(`Index ${number} is ${numbers[number]}`);
}

// Fourteen
const student = {
  name: "John",
  age: 13,
  grades: [84, 100, 95, 94],
};

const { name: studentName, age: studentAge } = student;

console.log(studentName);
console.log(studentAge);

// Fifteen
// function mergeObjects(obj1, obj2) {
//   return { ...obj1, ...obj2 };
// }

const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });

console.log(mergeObjects(person, student));

// Sixteen
const nums = [10, 53, 68];

function sumNumbers(num1, num2, num3) {
  return num1 + num2 + num3;
}

console.log(sumNumbers(...nums));
