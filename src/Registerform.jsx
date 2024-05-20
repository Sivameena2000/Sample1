import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function FormExample() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className='Container'>
    <Form noValidate validated={validated} onSubmit={handleSubmit} className="">
      
        <Form.Group controlId="validationCustom01">
          
          <Form.Control
            required
            type="text"
            placeholder=" Enter First name" className="w-50"
            
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <br/>
        <Form.Group controlId="validationCustom02">
          
          <Form.Control
            required
            type="text"
            placeholder=" Enter Password" className="w-50"
            
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group><br/>
        <Form.Group controlId="validationCustomUsername">
          
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control 
              type="text"
              placeholder=" Enter Username" 
              aria-describedby="inputGroupPrepend"
              required
             
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group><br/>
      
      
        <Form.Group controlId="validationCustom03">
          
          <Form.Control type="Number" placeholder="Enter Phonenumber" required  className="w-50"/>
          <Form.Control.Feedback type="invalid">
            Please provide a valid PhoneNumber.
          </Form.Control.Feedback>
        </Form.Group><br/>
        <Form.Group controlId="validationCustom04">
          
          <Form.Control type="Email" placeholder=" Enter Email" required className="w-50"/>
          <Form.Control.Feedback type="invalid">
            Please provide a valid Email.
          </Form.Control.Feedback>
        </Form.Group>
       
      
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit">Submit form</Button>
    </Form>
    </div>
  );
}

export default FormExample;