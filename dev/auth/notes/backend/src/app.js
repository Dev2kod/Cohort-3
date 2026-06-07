const express = require("express")

const app = express()
app.use(express.json())

app.post("/notes",(req,res)=>{
    // const title = req.body.title;
    // const description = req.body.description;

    console.log(req.body)
    res.send(req.body)
})


module.exports = app