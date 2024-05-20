import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";

function LOGIN() {
  // const[user,Uservalue]=useState({
  //   username1:'',
  //   Password1:''
  // });
  // const navigate=useNavigate();
  // const Username=(e)=>{
  //   Uservalue({...user,username1:e.target.value})
  // }
  // const Password=(i)=>{
  //   Uservalue({...user,Password1:i.target.value})
  // }
  // const login=()=>{
  // if(user.username1=="sivameena@gmail.com" && user.Password1=='siva')
  // {
  //   navigate("/Register");

  // }
  // else{
  //   console.log("invalid");
  // }

  // }
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const Adddata = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const login = () => {
    axios
      .get(
        `http://localhost:9086/createuser/getdata/${user.username}/${user.password}`
      )
      .then((res) => {
        if (
          user.username == res.data.username &&
          user.password === res.data.password
        ) {
          navigate("/");
          setError("");
        } else {
          setError("please Enter An valid username and password");
        }
      });
  };

  return (
    <>
      <div
        className=" d-flex justify-content-center align-items-center  "
        id="login-div"
      >
        <Form className=" p-5" id="login-form">
          <div className="  ">
            <div className="d-flex justify-content-center ">
              <h5>LOGIN</h5>
            </div>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>UserName</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={Adddata}
                name="username"
                value={user.username}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={Adddata}
                name="password"
                value={user.password}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <div className="d-flex justify-content-center ">
              <Button variant="primary" type="button" onClick={login}>
                Submit
              </Button>
            </div>
            <div>
              <Link to="/Registerform">
                {" "}
                <p className="text-center mt-3">Create an account?</p>
              </Link>
            </div>
          </div>
        </Form>
      </div>
    </>
  );
}

export default LOGIN;
