// const fs = require("fs")

// let data = fs.readFileSync("a.txt","utf-8")
// console.log(data);

// console.log("hi")

// data = fs.readFileSync("b.txt","utf-8")
// console.log(data);

// console.log("done")


const fs = require("fs")


console.log("hi")

fs.readFile("b.txt","utf-8",(err,data)=>{
    console.log(data);
    
})

let num = 0;
for (let index = 0; index < 10000000; index++) {
    num = num+index;    
}
console.log(num)

