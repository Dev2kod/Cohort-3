import Employee from "../models/Employee.js";

export const createEmployee=async(req,res)=>{
    try {
        const data = req.body;
        const employee = new Employee(data);
    
        await employee.save();
    
        res.status(200).json({
          success: true,
          message: "employee created",
        });
      } catch (error) {
        res.status(500).json({
          error: error.message,
        });
      }
}
