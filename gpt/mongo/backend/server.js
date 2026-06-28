import express from "express"
import dotenv from "dotenv"
import connectdb from "./db.js";
import Employee from "./models/Employee.js"

const app = express();
app.use(express.json())
dotenv.config()


app.post("/emmployees",async(req,res)=>{
    const data = req.body;
    const employee = new
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