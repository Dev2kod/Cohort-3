import express from "express"
import dotenv from "dotenv"
import connectdb from "./db.js";
import Employee from "./models/Employee.js"

const app = express();
app.use(express.json())
dotenv.config()

app.get("/",(req,res)=>{
    res.json({
        msg:"server running on 3000"
    })
})

app.get("/name",async(req,res)=>{
    try {
        const data = await Employee.find({name:"Devesh"})
        if(data){
        res.status(200).json({
            success:true,
            data:data
        })}
        else{
            res.status(404).json({
                message:"no data found"
            })
        }
    } catch (error) {
        res.json({
            success:false,
            error:error
        })
    }
})

app.get("/employees",async(req,res)=>{
        try {
            const data = await Employee.find()
        
            res.status(200).json({
                success:true,
                employees: data
            })
        } catch (error) {
            res.status(501).json({
                success:false,
                error: error
            })
        }
})


app.post("/employees",async(req,res)=>{
    try {
    
        const data = req.body;
        const employee = new Employee(data)

        await employee.save()
        
        res.status(200).json({
            success:true, 
            message:"employee created"
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}
)


const startServer=async()=>{
    try {
        console.log("starting server")
        await connectdb();
        await app.listen(3000,()=>{console.log("running on port 3000")})
        
    } catch (error) {
        console.log("server did not start")
        console.log(error.message)
    }
}

startServer()