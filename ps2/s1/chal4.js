let languages = ["English", "Arabic", "French", "German"]


languages[2] = "Spanish"
let newLength = languages.push("French") // Push adds an element and returns the new length of the array

console.log(`I speak ${newLength} languages they are: `)
languages.forEach((i) => { // For loop
  console.log(i)
})


