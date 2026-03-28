const express = require("express")
const {connectdb} = require("./db")
const {userModel,todoModel} = require("./schema")
const dotenv = require("dotenv")
dotenv.config()

const app = express()

connectdb();

app.get("/", (req, res) => {
    res.send("Hello World")
})

//signup
/*
1. get the data from req.body
2. check if user already exists or not
3. if exists send error response
4. if not create the user in db and send success response
const name = req.body.name  
const email = req.body.email
const password = req.body.password
userModel.findOne({email:email},(err,user)=>{
    if(err){
        res.send("something went wrong")
    } else if(user){
        res.send("user already exists")
    } else {
        const newUser = new userModel({name,email,password})
        newUser.save()
        res.send("user created successfully")
    }
})
*/

app.post("/signup",(req,res)=>{
})

app.post("/signin",(req,res)=>{
})
app.get("/todos",(req,res)=>{
})

app.post("/todo",(req,res)=>{
})
app.get("/getAllTodos",(req,res)=>{

})

app.post("/edittodos",(req,res)=>{
    
})


app.listen(3000,()=>{
    console.log("running on port 3000")
})