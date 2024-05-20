import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

function UserDetails() {
    const {id} = useParams()
    const[user,setuserdetails]=useState({})
    useEffect(()=>{
     getuserdata();
    },[])
    const getuserdata=()=>{
        axios.get(`https://dummyjson.com/users/${id}`)
        .then((res)=>{
            console.log(`https://dummyjson.com/users/${id}`);
            console.log(res.data);
            setuserdetails(res.data);
        }) 
    }
    
    

  return (
    <>
     <Card style={{ width: '18rem' }}>
      {/* <Card.Img variant="top" src={user.image} /> */}
      <img src={user.image}/>
      <Card.Body>
        <Card.Title>{user.id}</Card.Title>
        <Card.Text>
          {user.userName}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </>
  )
}

export default UserDetails