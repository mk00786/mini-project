import Task from "../models/Tasks.js";
import asyncHandler from "../utils/asyncHandler.js";

export const createTask=asyncHandler( async(req,res)=>{
    const {completed,total}=req.body;

    if(typeof completed!=='number'||typeof total!=='number'){
        return res.status(400).json({message:'Invalid task data'});
    }

    const task=new Task({completed,total});
    await task.save();
    res.status(201).json({success:true,message:'Task saved successfully'});
});

export const getTask=asyncHandler(async (req,res)=>{
    const latest=await Task.findOne().sort({createdAt:-1});
    res.status(200).json({success:true,data:latest||{completed:0,total:0}});
});

export const getAllTasks=asyncHandler( async (req,res)=>{
    let allTasks=await Task.find().sort({createdAt:-1});
    res.status(200).json({success:true,data:allTasks});
})