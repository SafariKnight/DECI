for (let i = 2; i <= 200; i++) {
  let response = "";
  for (let j = 2; j <= 10; j++) {
    if (i === j) continue;
    else if (i % j === 0) {

      response = `${i} is not prime`;
      break;

    } else response = `${i} is prime`;
  }
  console.log(response);
}
