/*
Schema

name
email
age
dept
salary
position
isActive
*/

import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true
  },
});


const Employee = mongoose.model("Employee",employeeSchema)

export default Employee;