const p = new Promise((resolve,reject)=>{
    console.log("done");
}).then(()=>{console.log("resolved");
}).catch(()=>{
    console.log("error");
    
})


console.log(p)