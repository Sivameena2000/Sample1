import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Loginpage.css'
import { Link } from 'react-router-dom';
function Loginpage() {
  return (
    <>
    <div className=' container position-absolute  ' id="container-div">
        <div className='row'>
        <div id="image-container" className=' col-6 d-none d-lg-block  '>
            <img src="image.jpg" className='img-fluid'/>
        </div>
        <div className='col-6' id='form-container'>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <div className=' text-center '>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <br/>
      <Link to='/Register'>Sign up</Link>
      </div>
    </Form>
    </div>
    </div>
    </div>
    </>
  )
}

export default Loginpage