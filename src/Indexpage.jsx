import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './Loginpage.css'
import Loginpage from './Loginpage'
import Reg from './Reg'
function Indexpage() {
  return (
    <div className='d-flex justify-content-center align-items-center bg-success  position-relative' id="main-container">
    <Routes>
        <Route path='/' element={<Loginpage/>}> </Route>
        <Route path='/Register' element={<Reg/>}></Route>
            
         
         
       
    </Routes>
    </div>
  )
}

export default Indexpage