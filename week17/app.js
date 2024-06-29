document.getElementById("styleButton").addEventListener("click", () => {
  const myPara = document.getElementById("myPara");
  const paraStyle = window.getComputedStyle(myPara);

  console.log(paraStyle.fontSize);

  // Multiple methods of changing the font size //
  
  // // Manual changes {{{
  // (myPara).style.fontSize = "24px"
  // (myPara).style.color = "red"
  // (myPara).style.fontFamily = "system-ui"
  // (myPara).style.border = "3px solid black"
  // (myPara).style.paddingInline = "1rem"
  // (myPara).style.background = "lightgray"
  // // }}}

  // myPara.className = "alternative-paragraph"
  myPara.classList.add("alternative-paragraph")
});
