import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';

function Conditional() {
    const[show,setShow]=useState(true)
    const change=()=>{
        setShow(!show)
    // if(show==true)
    // {
    //     setShow(false)
    // }
    // else{
    //     setShow(true)
    // }
    
    }
  return (
    <>
    {
        show?
        <h1>im true</h1>
        :
        <h1>im false</h1>
        

    }
    <button onClick={change}>Submit</button>
i    <Button variant="success">Success</Button>{' '}

    </>
  )
}

export default Conditional