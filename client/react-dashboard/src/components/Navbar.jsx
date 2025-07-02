import React from 'react'
import { Link,useNavigate } from 'react-router-dom'

const Navbar = ({isLoggedIn,setIsLoggedIn}) => {
  const navigate=useNavigate();

  const handleLogout=()=>{
    setIsLoggedIn(false);
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
    <div>
      {isLoggedIn?(
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
