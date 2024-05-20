import React, { useState } from 'react'
import LOGIN from './LOGIN'
import REGISTER from './REGISTER'
import './HOMEPAGE.css'
// import Button from 'react-bootstrap/Button';

function HOME1() {
    // const[status,setStatus]=useState("Register")
    // const[show,setShow]=useState(true)
    // const Homepage1=()=>{
    
    // if(status=="Register")
    // {
    //     setStatus("Login")
    //     setShow(!show)
    // }
    // else{
    //     setStatus("Register")
    //     setShow(!show)
    // }
    const[status,setStatus]=useState("Create an Account");
    const[show,setShow]=useState(true)
    const change=()=>{
      if(show==true)
      {
        setShow(!show)
        setStatus("Already Have an Account!")
      }
      else{
        setShow(!show)
        setStatus("Create an Account")
      }
    }

  return (
    <>
    <div className='d-flex justify-content-center align-items-center  ' style={{height:'100vh'}} id="Home">
    <div className=' m-3 p-4 border-5 rounded-3 ' >
    {
        show?
        <LOGIN/>
        :
        <REGISTER/>
    }
     {/* <br/><Button variant="primary" onClick={Homepage1}>{status}</Button>{' '} */}
     <a onClick={change}style={{cursor:'pointer', display:'flex',justifyContent:'center'}} id='show'>{status}</a>
     </div>
   </div>
    </>
  )
  }

export default HOME1