const express = require("express")

const app = express();

app.get("/",(req,res)=>{
    return res.json({msg:"app running"})
})

app.post("signup",(req,res)=>{
    
})

app.listen(3000,()=>{console.log("server running on port 3000")})