import React, { useState } from 'react'
import LOGINPAGEfrom './LOGINPAGE'
import REGISTERPAGE from './REGISTERPAGE'
import Button from 'react-bootstrap/Button';

function HOMEPAGE1() {
    const[status,setStatus]=useState("Register")
    const[show,setShow]=useState(true)
    const Homepage1=()=>{
    
    if(status=="Register")
    {
        setStatus("Login")
        setShow(!show)
    }
    else{
        setStatus("Register")
        setShow(!show)
    }
}
  return (
    <>
    {
        show?
        <LOGIN/>
        :
        <REGISTER/>
    }
     <br/><Button variant="primary" onClick={Homepage1}>{status}</Button>{' '}
     
   
    
    </>
  )
}

export default HOMEPAGE1