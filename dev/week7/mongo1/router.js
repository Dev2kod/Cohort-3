const express = require("express")
const {userModel} = require("./schema")

const userRouter = express.Router()

/**
 * 1. get the data from req.body
 * 2. check if user already exists or not
 * 3. if exists send error response
 * 4. if not create the user in db and send success response
 */
userRouter.post("/signup",(req,res)=>{
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    
})


module.exports = {userRouter}