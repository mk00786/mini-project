import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import NotFound from './pages/NotFound'
import { useState } from 'react'

function App() {
  const [isLoggedIn,setIsLoggedIn]=useState(false);

  return (
    <BrowserRouter>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path='/dashboard' element={<Dashboard isLoggedIn={isLoggedIn}/>} />
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
