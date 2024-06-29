document.getElementById("styleButton").addEventListener("click", () => {
  const myPara = document.getElementById("myPara");
  const paraStyle = window.getComputedStyle(myPara);

  console.log(paraStyle.fontSize);

  // Multiple methods of changing the font size //
  
  myPara.style.fontSize = "24px"
  // myPara.className = "alternative-font-size"
  // myPara.classList.add("alternative-font-size")
});
