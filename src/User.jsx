import React from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
// import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";
function User() {
  const [admin, setadmin] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:9086/createuser/getdata")
      .then((res) => {
        console.log(res.data);
        setadmin(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div className="d-flex justify-content-end ">
        <button className="p-1 m-3 bg-success " id="add-div">
          Add<sup>+</sup>
        </button>
      </div>
      <Table striped="columns" hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Username</th>
            <th>Password</th>
            <th>Mobileno</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {admin.map((r) => (
            <tr key={r.userid}>
              <td>{r.userid}</td>
              <td>{r.firstname}</td>
              <td>{r.username}</td>
              <td>{r.password}</td>
              <td>{r.phonenumber}</td>
              <td>{r.email}</td>
              <td>
                <button className="p-1">View</button>
                <button className="p-1">Edit</button>
                <button className="p-1">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default User;
