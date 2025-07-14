import express from 'express';
import cors from 'cors'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import errorHandler from './middlewares/errorHandler.js';
import morgan from 'morgan';
import projectRoutes from './routes/projectRoutes.js'
import taskRoutes from './routes/taskRoutes.js'

dotenv.config();
const app=express();

app.use(cors());
app.use(express.json())
app.use(morgan('dev'));

//Routes
app.use('/api/projects',projectRoutes);
app.use('/api/tasks',taskRoutes);
app.get('/api/messages',(req,res)=>res.json({unread:5}));
app.get('/api/notifications',(req,res)=>res.json({new:2}));

//Error handler
app.use(errorHandler);

//MongoDB connection
mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log('Connected to MongoDB'))
.catch(err=>console.log('MongoDB connection failed:',err));

//Start server
const port=process.env.PORT||4000;
app.listen(port,()=>{
    console.log(`Server running at port ${port}`);
})