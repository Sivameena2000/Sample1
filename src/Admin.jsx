import React, { useEffect, useState } from "react";
import axios from "axios";
// import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { Link, Outlet, useLocation } from "react-router-dom";

import "./Admin.css";
function Admin() {
  const location = useLocation();
  return (
    <>
      <Container fluid className="container-div">
        <Row className="">
          <Col
            lg={2}
            className="panel-container d-flex justify-content-center border p-3  "
          >
            <ul>
              <Link to="/admin" className="Panel-Link-div">
                <li>
                  <h2>Studio</h2>
                </li>
              </Link>
              <Link to="dashboard" className="Panel-Link-div">
                <li
                  className={`py-2 ${
                    location.pathname === "/admin/dashboard" ||
                    location.pathname === "/admin"
                      ? "side"
                      : ""
                  }`}
                >
                  <div>Home</div>
                </li>
              </Link>
              <Link to="user" className="Panel-Link-div">
                <li
                  className={`py-2 ${
                    location.pathname === "/admin/user" ? "side" : ""
                  }`}
                >
                  <div>User</div>
                </li>
              </Link>
              <Link to="package" className="Panel-Link-div">
                <li
                  className={`py-2 ${
                    location.pathname === "/admin/package" ? "side" : ""
                  }`}
                >
                  <div>Package</div>
                </li>
              </Link>
              <Link to="Settings" className="Panel-Link-div">
                <li
                  className={`py-2 ${
                    location.pathname === "/admin/Settings" ? "side" : ""
                  }`}
                >
                  <div>Settings</div>
                </li>
              </Link>
            </ul>
          </Col>
          <Col lg={10} className="col-outlet-div">
            <Outlet></Outlet>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Admin;
