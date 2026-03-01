const express = require("express")
const {apiCount,getCount} = require("./middlewares");
const { get } = require("http");

const app = express();
 
app.use(express.json())
app.use(apiCount)
app.get("/",(req,res)=>{
    res.json({
        msg: "got your req, explore more endpoints"
    })
})

app.get("/count",(req,res)=>{
    const count = getCount();

    res.json({
        apiCount : count
    })
})

app.listen(3000,()=>{
    console.log("running on port 3000")
})