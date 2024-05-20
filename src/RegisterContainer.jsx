import React, { useState ,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
import './Nav.css'
// import axios from './axios';
import axios from 'axios';

function RegisterContainer() {
  
  const[user,SetUser]=useState({
    Firstname:"",
    Lastname:"",
    Password:"",
    Phonenumber:"",
    Email:""
  })
  useEffect(()=>{
    console.log("helloo");
  },[user.Firstname])
  const AddData=(e)=>{
    SetUser({...user,[e.target.name]:e.target.value})
  }
  
  const register=()=>{
  //   axios.post(" ",user)
  //   .then((res)=>{
  //     console.log(res.data);

  //   }
  // )
  }
  return ( 
    <>
    <div className='main'></div>
    <div className='container'>
    <Form className='Register'>
        {/* <label>FirstName</label> */}
        <input type="text" className='Firstname' name = "Firstname" placeholder=" enter Your name" onChange={AddData}/><br/>
        {/* <label>Lastname</label> */}
        <input type="text" className='Lastname' placeholder=" enter Your Lastname" onChange={AddData}/><br/>
        {/* <label>Password</label> */}
        <input type="password" className='Password'placeholder=" enter Your Password" onChange={AddData}/><br/>
        {/* <label>Phonenumber</label> */}
        <input type="Number" className='Phonenumber'placeholder=" enter Your Phonenumber" onChange={AddData}/><br/>
        {/* <label>Email</label> */}
        <input type="email" className='Email'placeholder=" enter Your Email" onChange={AddData}/><br/>
        {/* <input type="dropdown" className='role'/><br/> */}
        <Button type="submit" onClick={register}>Submit</Button>
    </Form>
    </div>
    </>
  )
}

export default RegisterContainer