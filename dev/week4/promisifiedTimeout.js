const { resolve } = require("path")

const p = (func,time) => {
    return new Promise((resolve,reject)=>{
        setTimeout(func, time);
    })
}

p.then