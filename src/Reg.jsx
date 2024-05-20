// import { Axios } from 'axios';
// import React, { useEffect } from 'react'
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
function Reg() {
  const navigate = useNavigate();
  const [user, SetUser] = useState({
    firstname: "",
    password: "",
    username: "",
    phonenumber: "",
    email: "",
  });
  const [firstnamevalid, setfirstnamevalid] = useState(false);
  const [usernamevalid, setusernamevalid] = useState(false);
  const [phonenumbervalid, setphonenumbervalid] = useState(false);
  const [emailvalid, setemailvalid] = useState(false);
  const [passwordvalid, setpasswordvalid] = useState(false);

  const [usernameerror, setusernameerror] = useState("");
  const [phonenumbererror, setphonenumbererror] = useState("");
  const [emailerror, setemailerror] = useState("");
  const [passworderror, setpassworderror] = useState("");
  const [firstnameerror, setfirstnameerror] = useState("");

  const AddData = (e) => {
    SetUser({ ...user, [e.target.name]: e.target.value });
  };
  const submitted = (event) => {
    event.preventDefault();
    console.log(user);
    //username validation
    if (!user.username == "") {
      if (user.username.length >= 3) {
        setusernamevalid(true);
        setusernameerror("");
      } else {
        setusernameerror("please Enter Minimum 3 characters");
      }
    } else {
      setusernameerror("please Enter Username");
    }
    //firstname validation
    if (!user.firstname == "") {
      if (user.firstname.length >= 3) {
        setfirstnamevalid(true);
        setfirstnameerror("");
      } else {
        setfirstnameerror("please Enter Minimum 3 characters");
      }
    } else {
      setfirstnameerror("please Enter Firstname");
    }
    //phonenumber validation
    if (!user.phonenumber == "") {
      if (user.phonenumber.length == 10) {
        setphonenumbervalid(true);
        setphonenumbererror("");
      } else {
        setphonenumbererror("Please Enter 10 Numbers");
      }
    } else {
      setphonenumbererror("Please Enter Your Phonenumber");
    }
    //email validation
    const emailpattern = /^[^\.\s][\w\-]+(\.[\w\-]+)*@([\w-]+\.)+[\w-]{2,}$/;
    if (!user.email == "") {
      const isemail = user.email.match(emailpattern);
      if (isemail) {
        setemailvalid(true);
        setemailerror("");
      } else {
        setemailerror("please Enter an Valid Email Address");
      }
    } else {
      setemailerror("please Enter Your Email Address");
    }
    //password validation
    const passwordpattern =
      /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!user.password == "") {
      const ispass = user.password.match(passwordpattern);
      if (ispass) {
        setpasswordvalid(true);
        setpassworderror("");
      } else {
        setpassworderror(
          "password must have 8 digit and one small letter, one captial letter,one special character,one number"
        );
      }
    } else {
      setpassworderror("please Enter Your Password");
    }
    if (
      firstnamevalid == true &&
      usernamevalid == true &&
      passwordvalid == true &&
      emailvalid == true &&
      phonenumbervalid == true
    ) {
      axios
        .post("http://localhost:9086/createuser/user", user)
        .then((res) => {
          navigate("/LOGIN");
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      SetUser({
        ...user,
        // firstname:"",
        username: "",
        firstname: "",
        phonenumber: "",
        password: "",
        email: "",
      });
    }
  };
  const [validated, setValidated] = useState(false); //use state is used to update variable whevever it presents and display it on UI

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault(); //Form have default things that block some user action refresh the page event.preventdefault used to perform user action and then refresh
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <>
      <div
        className=" d-flex justify-content-center align-items-center  "
        id="registerform-div"
      >
        <Form className=" w-75  p-3" id="registerform" onSubmit={submitted}>
          <Row className="mb-3">
            <Form.Group as={Col} md="6 " controlId="validationCustom01">
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="text"
                name="firstname"
                placeholder="First name"
                onChange={AddData}
              />
              <span className="text-danger">{firstnameerror}</span>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom02">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Enter Password"
                onChange={AddData}
              />
              <span className="text-danger">{passworderror}</span>

              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6 " controlId="validationCustomUsername">
              <Form.Label>Username</Form.Label>

              <Form.Control
                type="text"
                placeholder="Enter Username"
                onChange={AddData}
                name="username"
              />
              <span className="text-danger">{usernameerror}</span>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom03">
              <Form.Label>PhoneNumber</Form.Label>
              <Form.Control
                type="Number"
                placeholder="Enter PhoneNumber"
                name="phonenumber"
                onChange={AddData}
              />
              <span className="text-danger">{phonenumbererror}</span>
              <Form.Control.Feedback type="invalid">
                Please provide a valid Phonenumber.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom04">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Email"
                name="email"
                onChange={AddData}
              />
              <span className="text-danger">{emailerror}</span>
              <Form.Control.Feedback type="invalid">
                Please provide a valid Email.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <div className="d-grid justify-content-center align-items-center mt-4">
            <Form.Group className="mb-3">
              <Form.Check
                label="Agree to terms and conditions"
                feedback="You must agree before submitting."
                feedbackType="invalid"
              />
            </Form.Group>
            <Button type="submit">Register</Button>
          </div>
          <div>
            <Link to="/LOGIN">
              {" "}
              <p className="text-center mt-3">Already have an account?</p>
            </Link>
          </div>
        </Form>
      </div>
    </>
  );
}

export default Reg;
