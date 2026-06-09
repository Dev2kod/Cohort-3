const express = require("express")

const notes = [];

const app = express()
app.use(express.json())

app.post("/notes",(req,res)=>{
    const title = req.body.title;
    const description = req.body.description;

    notes.push({
        title:title,
        description:description
    })

})

app.get("/notes",(req,res)=>{
    res.json({
        notes:notes
    }).status(200)
})


module.exports = app