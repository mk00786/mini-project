import express from "express";
import { getProject,createProject } from "../controllers/projectController.js";

const router=express.Router();

router.get('/',getProject);
router.post('/',createProject);

export default router;