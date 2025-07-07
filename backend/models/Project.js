import mongoose from "mongoose";

const projectSchema=new mongoose.Schema({
    name:String,
    status:String,
    createdAt:{
        type:Date,
        default:Date.now,
    },
});

const Project=mongoose.model('Project',projectSchema);

export default Project;