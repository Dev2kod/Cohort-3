import express from "express";
import dotenv from "dotenv";
import connectdb from "./config/db.js";
import Employee from "./models/Employee.js";
import { createEmployee } from "./controllers/employeeController.js";
import {router as EmployeeRouter} from "./routes/employeeRoutes.js"

const app = express();
app.use(express.json());
dotenv.config();
app.use("/employees",EmployeeRouter )

app.get("/", (req, res) => {
  res.json({
    msg: "server running on 3000",
  });
});

app.get("/name", async (req, res) => {
  try {
    const data = await Employee.find({ name: "Devesh" }).select(
      "name department",
    );

    console.log(data);
    res.json({
      success: true,
      data: data,
    });
  } catch (error) {
    res.json({
      success: false,
      error: error.message,
    });
  }
});

app.get("/employees", async (req, res) => {
  try {
    const data = await Employee.find();

    res.status(200).json({
      success: true,
      employees: data,
    });
  } catch (error) {
    res.status(501).json({
      success: false,
      error: error,
    });
  }
});

app.post("/employees", createEmployee);

app.put("/employees/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const newData = req.body;

    const updateEmp = await Employee.findByIdAndUpdate(id, newData, {
      updated: true,
    });
    res.status(200).json({
      success: true,
      message: "Employee updated successfully",
      employee: newData
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      error: error,
    });
  }
});

app.get("/employees/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const emp = await Employee.findById(id);
  res.status(200).json({
    success: true,
    emp: emp,
  });
});


app.delete("/employees/:id",async(req,res)=>{
    try {
        const id = req.params.id;

        const deleteEmployee = await Employee.findByIdAndDelete(id)
        res.status(200).json({
            success:true,
            deleted: id
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            error:error
        })
    }
    
})

try {
    console.log("starting server");
    await connectdb();
    await app.listen(3000, () => {
      console.log("running on port 3000");
    });
  } catch (error) {
    console.log("server did not start");
    console.log(error.message);
  }