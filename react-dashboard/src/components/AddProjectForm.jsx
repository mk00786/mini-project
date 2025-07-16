import React, { useState } from 'react'
import api from '../../utils/api';

const AddProjectForm = ({onAdd}) => {
    const [form,setForm]=useState({
        name:'',
        status:''
    });

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setForm((preVal)=>(
            {...preVal,[name]:value}
        ))
    }

    const handleSubmit= async(e)=>{
        e.preventDefault();
        try{
        const res=await api.post('/api/projects',form);

        if(res.data.success){
            onAdd();
            setForm({
                name:'',status:''
            })
        }else{
            alert('Failed to add Project');
        }
        }catch(err){
            console.error(err);
            alert('Something went wrong');
        }
    };
    
  return (
    <form onSubmit={handleSubmit} className='bg-white p-4 mb-6 shadow rounded space-y-3'>
      <input type='text' name='name' value={form.name} placeholder='Enter name' onChange={handleChange} 
      required className='border px-3 py-2 rounded w-full'/>
      <input type='text' name='status' value={form.status} placeholder='Enter Status' 
      onChange={handleChange} required className='border px-3 py-2 rounded w-full'/>
      <button type='submit' className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'>Add Project</button>
    </form>
  )
}

export default AddProjectForm
