// Activity
const newParagraph = document.createElement("p")
newParagraph.textContent = "This is only in the javascript"
document.body.appendChild(newParagraph)


const paragraphs = document.querySelectorAll("p")

for (const paragraph of paragraphs) {
  paragraph.style.color = "Red"
}


// Bonus 1
const button = document.querySelector("#btn")
// const button = document.getElementById("btn")

button.style.color = "Aqua"
button.style.backgroundColor = "Black"
button.style.borderColor = "Yellow"

// Bonus 2
const paragraphToRemove = document.querySelector("#remove")
paragraphToRemove.remove()
// paragraphToRemove.parentElement.removeChild(paragraphToRemove)
