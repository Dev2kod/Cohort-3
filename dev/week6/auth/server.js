const express = require("express")
const jwt = require("jsonwebtoken")

const app = express()

let users = []

app.post("/signup",(req,res)=>{
    const {username,password} = req.body;
    if(users.find(u=>u.username = username)){
        res.json({
            msg: "user already exist"
        })
        return;
    }
    
    users.push({
        username : username,
        password : password
    })

    res.json({
        msg: "signup successful"
    })
})

app.post("/signin",(req,res)=>{
    const {username,password} = req.body;

    let 
})

app.listen(3000,()=>{console.log("port running on port 3000");
})