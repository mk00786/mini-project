import { Outlet,Navigate } from 'react-router-dom'
import { useAuth } from './AuthContext';
import { useEffect, useState } from 'react';

const ProtectedRoute = () => {
    const {isAuthenticated}=useAuth();
    const [loading,setLoading]=useState(true);
    
    useEffect(()=>{
        const timer=setTimeout(()=>{
            setLoading(false);
        },200);

        return ()=>clearTimeout(timer);
    },[]);

    if(loading) return <div className='mt-20 text-center'>Loading...</div>;
  return isAuthenticated?<Outlet/>:<Navigate to='/login'/>;
}

export default ProtectedRoute
