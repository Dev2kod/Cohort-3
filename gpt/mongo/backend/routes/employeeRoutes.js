import { Router } from "express";
import { createEmployee } from "../controllers/employeeController.js";

export const router = Router();

router.post("/",createEmployee)

