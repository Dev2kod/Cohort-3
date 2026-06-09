const express = require("express")

const notes = [];

const app = express()
app.use(express.json())

app.post("/notes",(req,res)=>{
    const title = req.body.title;
    const description = req.body.description;
    const note ={
        title:title,
        description:description
    }
    notes.push(note)
    res.json({
        message:"success! note pushed"
    })
})

app.get("/notes",(req,res)=>{
    res.json({
        notes:notes
    }).status(200)
})

app.delete("/notes/:id",(req,res)=>{
    const id = req.params.id;
    console.log(id)
   
    notes.splice(id,1)
   
    res.json({
        msg:"note deleted"
    })
})

module.exports = app