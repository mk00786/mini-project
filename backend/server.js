import express from 'express';
import cors from 'cors'

const app=express();
const port=4000;
let tasks=[{completed:'7',total:'10'}];

app.use(cors());
app.use(express.json())

app.get('/api/projects',(req,res)=>{
    res.json({count:3});
})

app.get('/api/messages',(req,res)=>{
    res.json({unread:5});
})

app.post('/api/task',(req,res)=>{
    const {completed,total}=req.body;
    tasks.push({completed,total});
    res.status(201).json({message:'Task added successfully'});
})

app.get('/api/tasks',(req,res)=>{
    res.json(tasks[tasks.length-1]);
})

app.get('/api/notifications',(req,res)=>{
    res.json({new:2});
})


app.listen(port,()=>{
    console.log(`Server running at port ${port}`);
})