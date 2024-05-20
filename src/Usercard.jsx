import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Usercard() {
    const[user,setuser]=useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/photos")
        .then((res)=>{
           setuser(res.data);
    
        })
    },[])
    
    
    // const fetchuserdata=()=>{
       
    // }
  return (
    <>
    

    {/* <button onClick={fetchuserdata}>submit</button> */}
    {
    user.map((d)=>(
      <div key={d.id}>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={d.thumbnailUrl} />
      <Card.Body>
        <Card.Title>{d.title}</Card.Title>
        <Card.Text>
          {d.thumbnailUrl}
        </Card.Text>
        <Button variant="primary">Add Card</Button>
      </Card.Body>
      </Card>
      </div>
        ))

    }
    </>
   
  )
}

export default Usercard