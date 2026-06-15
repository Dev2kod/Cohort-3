const express = require("express")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors())

const notes = []

app.get("/",(req,res)=>{
    res.json({
        msg:"server running healthy"
    })
})

app.get("/notes",()=>{
    res.json(notes);
})

app.post("/notes",(req,res)=>{

    const {title,description} = req.body;
    
})

app.listen(3000,()=>{
    console.log("running on port 3000")
})