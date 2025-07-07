import React, { useState } from 'react'

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

        const res=await fetch('http://localhost:4000/api/projects',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(form)
        });

        if(res.ok){
            onAdd();
            setForm({
                name:'',status:''
            })
        }else{
            alert('Failed to add Project');
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
