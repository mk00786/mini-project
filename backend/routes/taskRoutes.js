import express from "express";
import { createTask,getTask,getAllTasks } from "../controllers/taskController.js";

const router=express.Router();

router.post('/',createTask);
router.get('/',getTask);
router.get('/all',getAllTasks);

export default router;