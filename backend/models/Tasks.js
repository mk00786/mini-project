import mongoose from 'mongoose'

const TaskSchema=new mongoose.Schema({
    completed:{
        type:Number,
        required:true,
        min:0
    },
    total:{
        type:Number,
        required:true,
        min:0
    }
},{timestamps:true});

const Task=mongoose.model('Task',TaskSchema);

export default Task;