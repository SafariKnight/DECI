// Activity {{{
const newParagraph = document.createElement("p");
newParagraph.textContent = "This is only in the javascript";
document.body.appendChild(newParagraph);

document.querySelectorAll("p").forEach((paragraph) => {
  paragraph.style.color = "Green";
});

// }}}

// Bonus 1 {{{
const button = document.querySelector("#btn");
// const button = document.getElementById("btn")

button.style.color = "Aqua";
button.style.backgroundColor = "Black";
button.style.borderColor = "Yellow";
// }}}

// Bonus 2 {{{
const paragraphToRemove = document.querySelector("#remove");
paragraphToRemove.remove();
// paragraphToRemove.parentElement.removeChild(paragraphToRemove)
// }}}
