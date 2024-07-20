let temperature = 30;

while (temperature > 21) {
  console.log(`It's currently ${temperature} degrees celsius`)
  temperature -= 0.5;
  if (temperature == 21) {
    console.log("It's finally exactly 21 degrees celsius")
  }
}

