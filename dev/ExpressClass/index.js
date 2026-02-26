const express = require("express")

const app = express();
app.use(express.json())

const users = [{
    name:"dev",
    kidney:[{
        healthy: false
    },{
        healthy:false
    }]
}];


app.get("/",(req,res)=>{
    const johnkidneys = users[0].kidney;
    const numberofkidney = johnkidneys.length  
    res.json({
        "numberofkidney":numberofkidney
    })
})

app.post("/add",(req,res)=>{
    const data = req.body.healthy;
    users[0].kidney.push({
        healthy: data
    })
    res.json(users)})

app.put("/treat",(req,res)=>{
    for(let i=0;i<users[0].kidney.length;i++){
        if(users[0].kidney[i].healthy===false){
    users[0].kidney[i].healthy = true;
            console.log("kidney repaired");
        }
        else{console.log("kidney healthy");}
    }
    res.json({
        msg:"checked and repaired",
        kidney: users[0].kidney,
    })
})

app.post("/addData",(req,res)=>{
    
})

app.listen(3000,()=>{console.log("running on 3000");
})