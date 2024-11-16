const selectedTheme = localStorage.getItem("selectedTheme");
if (selectedTheme) {
  document
    .querySelector(".theme-style")
    .setAttribute("href", "assets/" + selectedTheme + "-theme.css");
}
let displayValue = "";

function appendValue(val) {
  displayValue += val;
  document.getElementById("display").value = displayValue;
}

function clearDisplay() {
  displayValue = "";
  document.getElementById("display").value = displayValue;
}

function calculate() {
  try {
    displayValue = eval(displayValue).toString();

    if (displayValue == "NaN") {
      document.getElementById("display").value = "Error";
      return;
    }

    document.getElementById("display").value = displayValue;
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}
