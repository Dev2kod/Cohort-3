import { Router } from "express";
import { createEmployee } from "../controllers/employeeController";

const router = Router();

router.post("/",createEmployee)

