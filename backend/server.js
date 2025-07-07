import express from 'express';
import cors from 'cors'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Task from './models/Tasks.js';
import Project from './models/Project.js';

const app=express();
const port=4000;

app.use(cors());
app.use(express.json())
dotenv.config();

app.post('/api/projects',async (req,res)=>{
    try{
        const {name,status}=req.body;
        const project=new Project({name,status});
        await project.save();
        res.status(201).json({message:'Project created successfully'});
    }catch(err){
        console.log(err);
        res.status(500).json({error:'Failed to add project'});
    }
})


app.get('/api/projects',async (req,res)=>{
    try{
        const projects=await Project.find();
        res.json({count:projects.length,projects});
    }catch(err){
        console.log(err);
        res.status(500).json({error:'Failed to fetch projects'});
    }
})

app.get('/api/messages',(req,res)=>{
    res.json({unread:5});
})

app.post('/api/task', async(req,res)=>{
    try{
        const {completed,total}=req.body;
        const task=new Task({completed,total});
        await task.save();
        res.status(201).json({message:'Task saved successfully'});
    }catch(err){
        console.log(err);
        res.status(500).json({error:'Failed to add task'});
    }
})

app.get('/api/tasks',async (req,res)=>{
    try{
        const latest=await Task.findOne().sort({createdAt:-1});
        res.json(latest||{completed:0,total:0});
    }catch(err){
        console.error(err);
        res.status(500).json({error:'Failed to fetch task'});
    }
})

app.get('/api/notifications',(req,res)=>{
    res.json({new:2});
})

app.get('/api/all-tasks',async (req,res)=>{
    try{
        let allTasks=await Task.find().sort({createdAt:-1});
        res.json(allTasks);
    }catch(err){
        console.log(err);
        res.status(500).json({error:'Unable to fetch all tasks'});
    }
})

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log('Connected to MongoDB'))
.catch(err=>console.log('MongoDB connection failed:',err));


app.listen(port,()=>{
    console.log(`Server running at port ${port}`);
})