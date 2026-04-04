const express = require("express")
const {connectdb} = require("./db")
const {userModel,todoModel} = require("./schema")
const dotenv = require("dotenv")
 dotenv.config()

const app = express()
app.use(express.json())
connectdb();

app.get("/",(req,res)=>{
    res.json({
        msg:"server running"
    })
})

app.post("/signup",async(req,res)=>{
    const {name,email,password} = req.body;
    
    const userExist = await userModel.findOne({
        email: email
    })

    if(userExist){
        res.status(400).json({
            msg: "user already exists"
        })
        return;
    }

    await userModel.create({
        name: name,
        email: email,
        password: password
    })

    res.json({
        msg: "user signed up"
    })
})
const jwt = require("jsonwebtoken")
const { authMiddleware } = require("./authmiddleware")

const JWT_SECRET = "123456"

app.post("/signin", async (req,res)=>{
    const {email,password} = req.body

    const user = userModel.findone({email})

    if(!user){
        return res.status(404).json({
            msg: "user does not exist"
        })
    }

    if(user.password !== password){
        return res.status(403).json({
            msg:"wrong password,enter a correct one"
        })
    }
    const token = jwt.sign({userId:user._id},JWT_SECRET)
    res.json({
        message:"user signed in",
        token: token
    })
})

app.get("/todos",authMiddleware,(req,res)=>{
    const userId = req.userId
    const todos = todoModel.find({userId:userId})
    res.json({
        todos: todos
    })
})



app.listen(3000,()=>{
    console.log("running on port 3000")
})