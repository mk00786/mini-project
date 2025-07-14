import express from "express";
import asyncHandler from "../utils/asyncHandler.js";
import Project from "../models/Project.js";

export const getProject= asyncHandler(async (req,res)=>{
        const projects=await Project.find();
        res.status(200).json({success:true,data:{count:projects.length,projects}});
});

export const createProject=asyncHandler( async (req,res)=>{
        console.log('Received project data:', req.body); 
        const {name,status}=req.body;

        if(!name||!status) return res.status(400).json({success:false,message:'Name and status are required'});

        const project=new Project({name,status});
        await project.save();

        res.status(201).json({success:true,message:'Project created successfully'});
});

