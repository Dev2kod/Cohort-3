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

app.post("/signup",async(req,res)=>{
    const {name,email,password} = req.body

    const userExist = userModel.findOne({email:email},);
    await userModel.insert({
        email:email,
        name:name,
        password:password  
    })

})

app.post("/signin",(req,res)=>{
    const {email,password} = req.body

    userModel.findOne({email:email},(err,user)=>{
        if(err){
            res.send("email not found") 
        } else if(user){
            if(user.password === password){
                res.send("signin successful")
            } else {
                res.send("invalid password")
            }
        }
    })
})
app.get("/todos",(req,res)=>{
})

app.post("/todo",(req,res)=>{
    
})

console.log(process.env.MONGOOSE_STRING)


app.listen(3000,()=>{
    console.log("running on port 3000")
})