import React from 'react'
import { useState } from 'react'
import api from '../../utils/api';

const AddTaskForm = ({onAdd}) => {
    const [task,setTask]=useState({
        completed:'',
        total:''
    });

    const handleChange=(e)=>{
        const {name,value}=e.target;

        setTask((preVal)=>({...preVal,[name]:value}));
    }

    const handleSubmit=async (e)=>{
        e.preventDefault();

        try{
            const response=await api.post('/api/tasks',{completed:Number(task.completed),total:Number(task.total)});
            if(response.status===201){
            onAdd();
            setTask({
                completed:'',
                total:''
            });
        }else{
            alert('Failed to add Task');
        }
        }catch(err){
            console.error('Failed to add task',err.message);
            alert('Something went wrong');
        }
    };

  return (
      <form onSubmit={handleSubmit} className='bg-white p-4 mb-6 rounded shadow space-y-3'>
        <div>
            <input type='number' placeholder='Completed tasks' onChange={handleChange} value={task.completed}
            name='completed' className='border px-3 py-2 rounded w-full' required/>
        </div>
        <div>
            <input type='number' placeholder='Total tasks' onChange={handleChange} value={task.total}
            name='total' className='border px-3 py-2 rounded w-full' required />
        </div>
        <button type='submit' 
        className='bg-green-500 rounded py-2 px-4 cursor-pointer text-white  hover:bg-green-600'
        >Add Task</button>
      </form>
  )
}

export default AddTaskForm
