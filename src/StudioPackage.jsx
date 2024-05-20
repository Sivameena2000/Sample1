import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
function StudioPackage() {
  const [userpackage, setpackage] = useState({
    packageName: "",
    packageAmount: "",
    packageplace: "",
  });
  //valid
  const [packagenamevalid, setpackagenamevalid] = useState(false);
  const [packageamountvalid, setpackageamountvalid] = useState(false);
  const [packageplacevalid, setpackageplacevalid] = useState(false);
  //error
  const [packagenameerror, setpackagenameerror] = useState("");
  const [packageamounterror, setpackageamounterror] = useState("");
  const [packageplaceerror, setpackageplaceerror] = useState("");

  const AddData = (e) => {
    setpackage({ ...userpackage, [e.target.name]: e.target.value });
    console.log(e.target.name);
    console.log(e.target.value);
    console.log(userpackage);
  };
  const Availed = (event) => {
    event.preventDefault();
    if (!userpackage.packageName == "") {
      setpackagenamevalid(true);
      setpackagenameerror("");
    } else {
      setpackagenameerror("please select your Package Name");
    }
    if (!userpackage.packageAmount == " ") {
      setpackageamountvalid(true);
      setpackageamounterror("");
    } else {
      setpackageamounterror("please enter the package amount");
    }
    if (!userpackage.packageplace == " ") {
      setpackageplacevalid(true);
      setpackageplaceerror("");
    } else {
      setpackageplaceerror("please select packageplace");
    }
  };
  if (
    packagenamevalid == true &&
    packageamountvalid == true &&
    packageplacevalid == true
  ) {
    axios
      .post("http://localhost:9086/createuser/user", userpackage)
      .then((res) => {
        // navigate("/LOGIN");
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    Setpackage({
      ...userpackage,
      // firstname:"",
      packageName: "",
      packageAmount: "",
      packageplace: "",
    });
  }

  return (
    <>
      <Form className=" w-75  p-3" id="registerform" onSubmit={Availed}>
        <Form.Label>PackageName</Form.Label>
        <Form.Select
          aria-label="Default select example"
          onChange={AddData}
          name="packageName"
          value={userpackage.packageName}
        >
          <option>Open this select menu</option>
          <option value="Package 1">Package 1</option>
          <option value="Package 2">Package 2</option>
          <option value="Package 3">Package 3</option>
        </Form.Select>
        <span className="text-danger">{packagenameerror}</span>
        <br></br>
        <Form.Label>PackageAmount</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter Username"
          onChange={AddData}
          name="packageAmount"
          value={userpackage.packageAmount}
        />

        <span className="text-danger">{packageamounterror}</span>

        <Form.Group as={Col} md="6 " controlId="validationCustomUsername">
          <Form.Label>PackageDate</Form.Label>

          <Form.Select
            aria-label="Default select example"
            onChange={AddData}
            name="packageplace"
            value={userpackage.packageplace}
          >
            {/* <option>Open this select menu</option> */}
            <option value="1">Package 1</option>
            <option value="2">Package 2</option>
            <option value="3">Package 3</option>
          </Form.Select>
          <span className="text-danger">{packageplaceerror}</span>
        </Form.Group>

        <div className="d-grid justify-content-center align-items-center mt-4">
          <Form.Group className="mb-3">
            <Form.Check
              label="Agree to terms and conditions"
              feedback="You must agree before submitting."
              feedbackType="invalid"
            />
          </Form.Group>
          <Button type="submit">Avail</Button>
        </div>
        {/* <div>
            <Link to="/LOGIN">
              {" "}
              <p className="text-center mt-3">Already have an account?</p>
            </Link>
          </div> */}
      </Form>
    </>
  );
}

export default StudioPackage;
