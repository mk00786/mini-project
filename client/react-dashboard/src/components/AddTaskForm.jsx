import React from 'react'
import { useState } from 'react'

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

        const response=await fetch('http://localhost:5000/api/tasks',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({completed:Number(task.completed),total:Number(task.total)})
        })

        if(response.ok){
            onAdd();
            setTask({
                completed:'',
                total:''
            });
        }else{
            alert('Failed to add Task');
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
