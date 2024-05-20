import React from "react";
import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import "./NavBar.css";
import { Outlet } from "react-router-dom";
import { useRef } from 'react';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';

function Nav1() {
  const [overlayShow, setOverlayShow] = useState(false);
  const target = useRef(null);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      {/* <Button variant="primary" className="d-lg-none" onClick={handleShow}>
        Launch
      </Button> */}
      <img
        src="menu.png"
        className="d-lg-none d-block "
        onClick={handleShow}
        width={30}
      />

      {/* <Alert variant="info" className="d-none d-lg-block">
        Resize your browser to show the responsive offcanvas toggle.
      </Alert> */}

      <Offcanvas show={show} onHide={handleClose} responsive="lg" id="menu">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="">
          <div>
            <Nav className="me-auto d-grid d-lg-none  d-block ">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About Us</Nav.Link>
              {/* <Nav.Link href="#link">Service</Nav.Link> */}
              <NavDropdown title="Service" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Wedding Photoshoot
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Prewedding Photoshoot
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Maternity Photoshop
                </NavDropdown.Item>
                {/* <NavDropdown.Divider /> */}
                <NavDropdown.Item href="#action/3.4">
                  Babyphotoshoot
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#link">Contact us</Nav.Link>
            </Nav>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      <Container fluid className="d-none d-lg-block ">
        <Row>
          <Navbar
            expand="lg"
            className="bg-body-tertiary d-flex justify-content-evenly w-100 "
          >
            {/* <Container> */}
            <Col lg={2} className="d-flex justify-content-center ">
              <Navbar.Brand href="#home">Studio</Navbar.Brand>
            </Col>
            {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
            {/* <Navbar.Collapse id="basic-navbar-nav"> */}
            <Col lg={4} className="" id="menubarcontainer">
              <Nav className="d-flex justify-content-evenly ">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">About Us</Nav.Link>
                <NavDropdown title="Services" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/weddingphotoshoot">
                    Wedding Photoshoot
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/Babyshowerphotoshoot">
                    Babyshower Photoshoot
                  </NavDropdown.Item>
                  {/* <NavDropdown.Item href="/"></NavDropdown.Item> */}
                  {/* <NavDropdown.Divider /> */}
                  <NavDropdown.Item href="/Maternityphotoshoot">
                    Maternity Photoshoot
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    Puberty Photoshoot
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#link">Contact us</Nav.Link>
              </Nav>
            </Col>
            {/* </Navbar.Collapse> */}

            <Col lg={3} className="d-flex justify-content-center" id="search">
              <div className="searchContainer">
                <input type="text" placeholder="Search" />
                <img src="Search.png" />
              </div>
            </Col>
            <Col lg={3} className="d-flex justify-content-center ">
        <span ref={target} onClick={() => setOverlayShow(!overlayShow)}>
              <img src="profilephoto.png" width={30} />
      </span>
            </Col>
            {/* </Container> */}
          </Navbar>
        </Row> 
        
      <Overlay target={target.current} show={overlayShow} placement="bottom">
        {(props) => (
          <Tooltip id="overlay-example" {...props}>
            My Tooltip
          </Tooltip>
        )}
      </Overlay>
      </Container>
      <Outlet></Outlet>
      <Container className="mt-5">
        <Row className="">
          <Col lg={2} md={2} sm={12} xs={12} className="text-center">
            <h4>Studio</h4>
          </Col>
          <Col lg={3} md={2} sm={12} xs={12} className="text-center">
            <div>Quick Links</div>
            <div className="">
              <div>Home</div>
              <div>About</div>
              <div>Service</div>
              <div>Contact</div>
            </div>
          </Col>
          {/* http://localhost:9991/createuser/getdata */}

          <Col lg={4} md={2} sm={12} xs={12} className="text-center">
            <Row className="g-5 text-center">
              <Col lg={3} md={3} sm={6} xs={12} className="text-center">
                <div className="text-center">Wedding Photoshoot</div>
              </Col>
              <Col lg={3} md={3} sm={6} xs={12} className="text-center">
                Wedding Photoshoot
              </Col>
              <Col lg={3} md={3} sm={6} xs={12} className="text-center">
                Wedding Photoshoot
              </Col>
              <Col lg={3} md={3} sm={6} xs={12} className="text-center">
                Wedding Photoshoot
              </Col>
            </Row>
            {/* <Col lg={3} md={3} sm={6} xs={12}>Wedding Photoshoot</Col> */}
          </Col>
          <Col lg={3} md={2} sm={12} xs={12} className=" text-center">
            <Row>
              <Col lg={3} md={3} sm={6} xs={6}>
                <img src="twitter.png" width={30}></img>
              </Col>
              <Col lg={3} md={3} sm={6} xs={6}>
                <img src="facebook.png" width={30} />
              </Col>
              <Col lg={3} md={3} sm={6} xs={6}>
                <img src="instagram.png" width={30} />
              </Col>
              <Col lg={3} md={3} sm={6} xs={6}>
                <img src="youtube.png" width={30} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Nav1;
