import React, { createContext, useContext, useState } from 'react'

const AuthContext=createContext();
export const AuthProvider = ({children}) => {

    const [isAuthenticated,setIsAuthenticated]=useState(()=>localStorage.getItem('auth')==='true');
    const [user,setUser]=useState(()=>JSON.parse(localStorage.getItem('user'))||null);

    const login=(email)=>{
        setIsAuthenticated(true);
        setUser({email});
        localStorage.setItem('auth','true');
        localStorage.setItem('user',JSON.stringify({email}));
    }

    const logout=()=>{
        setIsAuthenticated(false);
        setUser(null);
        localStorage.removeItem('auth');
        localStorage.removeItem('user');
    }

  return (
    <AuthContext.Provider value={{isAuthenticated,login,logout,user}}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth=()=>useContext(AuthContext);