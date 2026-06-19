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

app.get("/notes",(req,res)=>{
    res.status(200).json({
        notes:notes
    });
})

app.post("/notes",(req,res)=>{

    const {title,description} = req.body;
    
    if(!title || !description){
        res.status(400).json({
            msg:"enter both title and description"
        }) 
    }
    const note = {
        title:title,
        description:description
    }

    console.log(`note:${note}`)
    notes.push(note)
    res.status(200).json({
        msg:"note added",
        note:note
    })
})

app.listen(3000,()=>{
    console.log("running on port 3000")
})