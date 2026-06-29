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