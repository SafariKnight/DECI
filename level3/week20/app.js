const passwordInput = document.querySelector(".password__input");
const strengthMeter = document.querySelector(".password__strength");

const checkPasswordStrength = () => {
  const password = passwordInput.value;
  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  if (passwordRegex.test(password)) {
    strengthMeter.style.backgroundColor = "green";
    console.log("good")
  } else {
    strengthMeter.style.backgroundColor = "red";
    console.log("bad")
  }
};

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  checkPasswordStrength();
});
