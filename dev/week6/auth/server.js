const express = require("express");
const jwt = require("jsonwebtoken");
const jwt_secret = "8329616635"
const {auth} = require("./middleware")

const app = express();
app.use(express.json());

let users = [];

// SIGNUP
app.post("/signup", (req, res) => {
    const { username, password } = req.body;

    const userExists = users.find(
        u => u.username === username
    );

    if (userExists) {
        return res.json({
            msg: "user already exist"
        });
    }

    users.push({ username, password });

    res.json({
        msg: "signup successful"
    });
});

app.post("/signin",(req,res)=>{
    const token = req.headers.authorization;
 
    if(!token){
        res.status(403).send({
            msg : "unauthorized, token not found"
        })
    }

    if(token){
        jwt.verify(token,jwt_secret,(err,decoded)=>{
            if(err){
                res.status(403).json({
                    msg: "unauthorised, token verification failed"
                })
            }else{
                req.user = decoded;
                next()
            }

        })
    }

})


app.get("/me",auth,(req,res)=>{

    const user= req.user;

    if(user){
        res.status(200).send({
            username: user.username
        })
    }else{
        res.status(401).send({
            msg: "unauthorized"
        })
    }
})


app.listen(3000, () => {
    console.log("port running on port 3000");
});