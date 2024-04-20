const test = {
  name: "whatever",
  id: 10
}

const test1 = {
  name: "something",
  a: 3
}

const merged = { ...test, ...test1}

console.log(merged)
