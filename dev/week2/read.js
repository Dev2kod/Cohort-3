// const fs = require("fs")

// let data = fs.readFileSync("a.txt","utf-8")
// console.log(data);

// console.log("hi")

// data = fs.readFileSync("b.txt","utf-8")
// console.log(data);

// console.log("done")


const fs = require("fs")

let data = fs.readFile("a.txt","utf-8")
console.log(data);

console.log("hi")

data = fs.readFile("b.txt","utf-8")
console.log(data);

console.log("done")