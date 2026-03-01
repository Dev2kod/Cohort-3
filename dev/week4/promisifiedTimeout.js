const writeName = (name) => {
    console.log(name);
}

const promiseTimeout = (func, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            func();
            resolve();
        }, delay);
    }).then(() => {
        console.log("resolved");
    });
}

promiseTimeout(() => writeName("Devesh"), 1000);



// promisified readfile 

// const fs = require("fs");

// const readFilePromise = (filePath) => {
//     return new Promise((resolve, reject) => {
//         fs.readFile(filePath, "utf-8", (err, data) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(data);
//             }
//         });
//     });
// };

// readFilePromise("a.txt")
//     .then(data => {
//         console.log(data);
//         console.log("resolved");
//     })
//     .catch(err => console.log(err));