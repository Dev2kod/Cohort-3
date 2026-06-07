const app = require("./src/app")

const notes = []


app.post("/notes",(req,res)=>{
    // const title = req.body.title;
    // const description = req.body.description;

    console.log(req.body)
})

app.listen(3000,()=>{
    console.log("server running on port 3000")
})