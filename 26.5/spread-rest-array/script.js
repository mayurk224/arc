let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let [a, b, c, ...rest] = arr;

console.log(a, b, c, rest)

let obj = { name: "john", age: 30, status: "active" }

let { name, status } = obj;

console.log(name, status);
