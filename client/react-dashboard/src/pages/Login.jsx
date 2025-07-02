import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = ({setIsLoggedIn}) => {
    const [user,setUser]=useState({
        email:'',
        password:''
    });

    const navigate=useNavigate();

    const handleChange=(e)=>{
        const {value,name}=e.target;
        setUser((preVal=>(
            {...preVal,
                [name]:value
            }
        )))
    }

    const handleSubmit=(e)=>{
        e.preventDefault();

        if(user.password&&user.email){
            setIsLoggedIn(true);
            navigate('/dashboard');
        }

        setUser({
        email:'',
        password:''
        })
    }

  return (
    <div className='flex justify-center items-center w-full min-h-screen'>
    <div className='max-w-md rounded p-6 shadow-md'>
        <h2 className='text-2xl font-semibold mb-4'>Login</h2>
        <form onSubmit={handleSubmit} className='space-y-4'>
            <input type='email' placeholder='Enter Email' value={user.email} onChange={handleChange}
                name='email' className='px-4 py-2 border rounded w-full' required
            />
            <input type='password' placeholder='Enter Password' value={user.password} 
            onChange={handleChange} name='password' className='w-full px-4 py-2 rounded border' required
            />
            <button type='submit' className='py-2 bg-blue-500 text-white w-full rounded hover:bg-blue-600'>Login</button>
        </form>
    </div>
    </div>
  )
}

export default Login
