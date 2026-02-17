const fs = require("fs")

console.log("1")
fs.readFile("a.txt","utf-8",(error,content)=>{
    console.log(content)
})

console.log("hello");
