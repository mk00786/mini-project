import mongoose from 'mongoose'

const TaskSchema=new mongoose.Schema({
    completed:{type:Number,required:true},
    total:{type:Number,required:true},
},{timestamps:true});

const Task=mongoose.model('Task',TaskSchema);

export default Task;