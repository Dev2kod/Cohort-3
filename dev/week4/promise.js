let 
const p = new Promise((resolve,reject)=>{
    console.log("promise") 
 });
p.then(console.log("done hai bahi"))
p.catch(console.log("error")) 

// promisified read file

const readFilePromisified = () =>{
    return new Promise((resolve,reject)=>{
    }).then(console.log("dev"))
}