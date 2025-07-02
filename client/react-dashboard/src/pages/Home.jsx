import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    let navigate=useNavigate();
  return (
    <div className='flex items-center justify-center bg-gray-100 min-h-screen'>
        <div className='shadow-md max-w-md bg-white rounded-lg p-8 text-center'>
            <h1 className='text-gray-800 font-bold text-3xl mb-4 '>Welcome to my website</h1>
            <p className='text-gray-600 mb-6 '>This is a mini authentication dashboard built with React and Tailwind CSS</p>
            <button onClick={()=>navigate('/login')} 
            className='bg-blue-500 hover:bg-blue-600 text-white rounded transition font-medium px-6 py-2 '
            >Go to Login</button>
        </div>
    </div>
  )
}

export default Home
