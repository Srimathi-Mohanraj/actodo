
import React, { useState } from 'react'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Landing from './pages/Landing'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


const App = () => {

const[user,setuser] = useState([{
    username:"srimathi",
    password :"77@77"
  }])

  return (
    
    <>
    <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element ={<Login user={user} setuser={setuser}/>}/>
      <Route path='/SignUp' element={<SignUp user={user} setuser={setuser}/>}/>
      <Route path='/Landing' element={<Landing/>}/>
    </Routes>
    </BrowserRouter>
    </div>
    </>
  )
}

export default App