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

const JWT_SECRET = "123456"

app.post("/signin", async (req,res)=>{
    const {email,password} = req.body

    try {

        const user = await userModel.findOne({ email })

        if(!user){
            return res.status(404).json({
                msg:"User does not exist"
            })
        }

        if(user.password !== password){
            return res.status(403).json({
                msg:"Wrong password"
            })
        }

        const token = jwt.sign(
            { id: user._id },
            JWT_SECRET
        )

        res.json({
            msg:"User signed in",
            token: token
        })

    } catch (error) {
        res.status(500).json({
            msg:"Server error"
        })        
    }
})
app.listen(3000,()=>{
    console.log("running on port 3000")
})