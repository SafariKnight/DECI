document.getElementById("jsonButton").addEventListener("click", () => {
  const obj = {
    name: "John",
    age: 28,
    city: "Manhatten",
  };

  const objAsJson = JSON.stringify(obj);
  alert(objAsJson);

  const newObj = JSON.parse(objAsJson);

  console.log(newObj.name);
  console.log(newObj.age);
  console.log(newObj.city);
});
