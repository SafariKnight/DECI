function reverseStrings(stringsToReverse) {
  let result = [];
  for (string of stringsToReverse) {
    let newString = "";
    for (let i = string.length; i > 0; i--) {
      newString = newString + string[i - 1];
    }
    result.push(newString);
  }
  return result;
}

function reverseNames(namesToReverse) {
  let result = [];
  for (let i = namesToReverse.length - 1; i >= 0; i--) {
    let name = namesToReverse[i];
    let nameComponents = name.split(" ");
    let newName = "";
    for (let j = nameComponents.length - 1; j >= 0; j--) {
      newName = newName + nameComponents[j] + " ";
    }
    newName = newName.slice(0, newName.length-1)
    result.push(newName);
  }
  return result;
}

// console.log(reverseStrings(["John Doe", "Tyler Oakley"]))
console.log(reverseNames(["John Doe", "Tyler Oakley"]));
