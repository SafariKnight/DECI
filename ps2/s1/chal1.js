// Challenge 1
let programmingLanguage = "javascript"


console.log(`My favourite language is ${programmingLanguage}`) // Concatination

programmingLanguage = programmingLanguage.slice(0,4) // Slices

console.log(`My favourite language is ${programmingLanguage}`)

console.log(programmingLanguage.repeat(10)) // Repeats

console.log(programmingLanguage.replace("va", "aa")) // Replace



let celsius = 3

const fahrenheit = (9/5 * celsius) + 32; // Order of operatiosn
const fahrenheit_rounded = fahrenheit.toFixed(2) // Accuracy

console.log(fahrenheit_rounded)


let learnJavascript = true
let hasComputer = true

console.log(learnJavascript && hasComputer)



let languages = ["English", "Arabic", "French", "German"]

console.log(`I speak ${languages[0]}`) // Accessing by index
console.log(`I speak ${languages[1]}`)

languages[2] = "Spanish" // Replacing a value in an index

console.log(`I speak ${languages[2]}`) 
