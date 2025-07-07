import React, { useEffect, useState } from 'react'

const TaskList = () => {
    const [allTasks,setAllTasks]=useState([]);

    useEffect(()=>{
        const fetchAllTasks=async ()=>{
            try{
                let res=await fetch('http://localhost:4000/api/all-tasks');
                let data=await res.json();
                setAllTasks(data);
            }catch(err){
                console.log(err);
            }
        }

        fetchAllTasks();

    },[]);
  return (
    <div className='bg-white p-4 rounded shadow mt-6'>
      <h3 className='text-lg font-semibold mb-4'>Task History</h3>
      <table className='w-full text-left border'>
        <thead>
            <tr className='border-b'>
                <th className='py-2'>#</th>
                <th>Completed</th>
                <th>Total</th>
                <th>Date</th>
            </tr>
        </thead>
        <tbody>

            {allTasks.length===0&&<tr><td className='text-center py-2 text-gray-500' colSpan='4'>
            No task added yet</td></tr>}

            {allTasks.map((task,idx)=>(
                <tr key={task._id} className='border-t'>
                    <td className='py-2'>{idx+1}</td>
                    <td>{task.completed}</td>
                    <td>{task.total}</td>
                    <td>{new Date(task.createdAt).toLocaleString()}</td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default TaskList
