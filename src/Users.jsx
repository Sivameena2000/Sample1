import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Users() {
    const[user,setuser]=useState([])
     const navigate =useNavigate()
    useEffect(()=>{
      axios.get("https://dummyjson.com/users")
      .then((res)=>{
        console.log(res.data.users);
        setuser(res.data.users)
      },)
      
    },[])
    const userdetails=(id)=> 
    {
       navigate(`${id}`)
    }
  return (
    <Container>
      <Row className=' g-lg-2  g-md-3 g-sm-4 g-5'>
        {
            user.map((d)=>(
                <Col key={d.id} lg={4} md={6} sm={12}><Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={d.image} onClick={()=>userdetails(d.id)}/>
                <Card.Body>
                  <Card.Title>{d.firstName}</Card.Title>
                  <Card.Text>
                    
                    {d.username}
                  </Card.Text>
                  <Button variant="primary" onClick={()=>userdetails(d.id)}>Go somewhere</Button>
                </Card.Body>
              </Card></Col>
            ))
        }
        
      </Row>  
    
    </Container>
  )
}

export default Users