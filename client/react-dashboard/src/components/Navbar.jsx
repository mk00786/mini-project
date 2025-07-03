import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useAuth } from '../components/AuthContext';

const Navbar = () => {
  const navigate=useNavigate();
  const {isAuthenticated,logout,user}=useAuth();

  const handleLogout=()=>{
    logout();
    navigate('/');
  }

  const handleLogin=()=>{
    navigate('/login');
  }

  return (
    <nav className='bg-gray-800 text-white flex justify-between items-center px-6 py-3'>
    <div>
      <Link to='/' className='mr-4 hover:underline'>Home</Link>
      <Link to='/dashboard' className='mr-4 hover:underline'>Dashboard</Link>
    </div>
    <div className='flex items-center space-x-4'>
    {isAuthenticated&&(
      <span className='text-sm text-gray-300'>{user?.email}</span>
    )}
      {isAuthenticated?(
        <button onClick={handleLogout}
         className='bg-red-500 px-4 py-2 rounded hover:bg-red-600' 
        >Logout</button>
      ):(
        <button onClick={handleLogin}
        className='bg-blue-500 px-4 py-2 rounded hover:bg-blue-600'
        >Login</button>
      )}
      </div>
    </nav>
  )
}

export default Navbar
