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
   const {username,password} = req.body;
   
   const user = users.find(u=>u.username == username && u.password==password)

   if(user){
    const token = jwt.sign({
        username : user.username
    },jwt_secret)
    user.token = token; 
    res.send({
        token
    });
    console.log(users);
}else{
    res.json({
        msg: "invalid Credentials"
    }).status(403)
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