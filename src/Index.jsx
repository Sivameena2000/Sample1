import React from "react";
import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
// import Offcanvas from "react-bootstrap/Offcanvas";
import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import "./NavBar.css";
function Home() {
  return (
    <>
      <div className="d-flex justify-content-center ">
        <Container fluid>
          <Row className="d-flex justify-content-center ">
            <Col className="d-flex justify-content-center">
              <img
                src=" couplebanner.jpg
        "
                className=" w-100 "
              />
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="" id="homecontainer">
        <h3 className="mt-5">Our vision</h3>
        <Row className="">
          <Col
            className="fs-4 d-flex justify-content-center align-items-center "
            id="contentcontainer"
          >
            {" "}
            <div className="d-grid">
              <p>"Unveiling Beauty Through the Lens" </p>{" "}
              <span className="fs-6" id="explorecontainer">
                <span id="ExploreUs">ExploreUs</span>
                <span className="sampleborder"></span>
              </span>
            </div>
          </Col>

          <Col className=" " md={6} xs={12}>
            <Row className="g-4">
              {/* <Col><img src="image.jpg" width={50}/></Col> */}

              <Col xs={12} md={6}>
                <div className="image-container">
                  <img
                    src="couple9.jpeg"
                    className=" w-100"
                    id="photoindexpage"
                  />
                </div>
                <div className="image-container1">
                  <img
                    src="sunsetphoto.jpg"
                    // width={}
                    // height={150}
                    className="  w-100"
                    id="photoindexpage"
                  />
                </div>
              </Col>
              <Col lg={6} md={6} xs={12} className="">
                <div className="image-container2">
                  <img
                    src="couple11.jpg"
                    className=" w-100"
                    id="photoindexpage"
                  />
                </div>
              </Col>
              {/* <Col className='ms-4 '><video controls src="video.mp4" width={400} height={400} className='ms-4'/></Col> */}
            </Row>
          </Col>
        </Row>
      </Container>
      <Container className="package-container mt-4 ">
        <h3 className="mt-5 text-center ">Our Packages</h3>

        <Row className=" d-flex justify-content-center mt-3 g-3 ">
          <Col lg={4} md={6} sm={6} xs={6}>
            <div className="package-image">
              <img
                src="couplephootshoot (1).jpg"
                className=" img-fluid "
                id="package-imagecontainer"
              />
            </div>
            <div>
              {" "}
              <p className=" text-center ">Weddding Photoshoot</p>
            </div>
          </Col>

          <Col lg={4} md={6} sm={6} xs={6}>
            <div className="package-image">
              <img
                src="couplephootshoot (1).jpg"
                className=" img-fluid "
                id="package-imagecontainer"
              />
            </div>
            <div>
              {" "}
              <p className=" text-center ">Birthday Photoshoot</p>
            </div>
          </Col>
          <Col lg={4} md={6} sm={6} xs={6}>
            <div className="package-image">
              <img
                src="couplephootshoot (1).jpg"
                className=" img-fluid "
                id="package-imagecontainer"
              />
            </div>
            <div>
              {" "}
              <p className=" text-center ">Prewedding Photoshoot</p>
            </div>
          </Col>
          <Col lg={4} md={6} sm={6} xs={6}>
            <div className="package-image">
              <img
                src="couplephootshoot (1).jpg"
                className=" img-fluid "
                id="package-imagecontainer"
              />
            </div>
            <div>
              {" "}
              <p className=" text-center ">Postwedding Photoshoot</p>
            </div>
          </Col>
          <Col lg={4} md={6} sm={6} xs={6}>
            <div className="package-image">
              <img
                src="couplephootshoot (1).jpg"
                className=" img-fluid "
                id="package-imagecontainer"
              />
            </div>
            <div>
              {" "}
              <p className=" text-center ">Babyshower Photoshoot</p>
            </div>
          </Col>
          <Col lg={4} md={6} sm={6} xs={6}>
            <div className="package-image">
              <img
                src="couplephootshoot (1).jpg"
                className=" img-fluid "
                id="package-imagecontainer"
              />
            </div>
            <div>
              {" "}
              <p className=" text-center ">Maternity Photoshoot</p>
            </div>
          </Col>

          {/* <Col lg={6} md={6} sm={6} xs={6}>
            <img src="couple5.jpeg" className="object-fit-cover" width={400} height={300} />

          </Col>
          <Col lg={6} md={6} sm={6} xs={6}>
            <img src="couple5.jpeg" className="object-fit-cover" width={400} height={300} />
            
          </Col> */}
        </Row>
      </Container>
      <Container className="         ">
        <Row className="fs-4 fw-bold p-4 bg-black ">
          {/* <div className="d-flex justify-content-lg-between justify-content-md-between justify-content-sm-between justify-content-between  bg-black  w-100 p-4 text-center fs-4 fw-bold " id='panelcontainer'> */}
          <Col lg={3} md={3} sm={12} xs={12} className="text-center">
            <div>
              <p className="p-number">
                11<sup>+</sup>
              </p>
              <p className="p-content">Years of Experience</p>
            </div>
          </Col>
          <Col lg={3} md={3} sm={12} xs={12} className="text-center">
            <div>
              <p className="p-number">
                25000<sup>+</sup>
              </p>
              <p className="p-content">Completed Projects </p>
            </div>
          </Col>
          <Col lg={3} md={3} sm={12} xs={12} className="text-center">
            <div>
              <p className="p-number">
                30000<sup>+</sup>
              </p>
              <p className="p-content">Happy Customers</p>
            </div>
          </Col>
          <Col lg={3} md={3} sm={12} xs={12} className="text-center">
            <div>
              <p className="p-number">
                12<sup>+</sup>
              </p>
              <p className="p-content">Districts Photoshoot</p>
            </div>
          </Col>
          {/* </div> */}
        </Row>
      </Container>
      <Container className="ourphotographies mt-4 p-4 ">
        <Row>
          <h3 className="text-center mt-4  ">Our Photography</h3>

          <Col lg={6} md={6} sm={12} xs={12} className="">
            <div className=" mt-3 ">
              <img src="couples.jpg" className=" w-100 " />
              <p className="text-center">Our Indoor Photographies</p>
            </div>
          </Col>

          <Col lg={6} md={6} sm={12} xs={12}>
            <div className="mt-3">
              <img src="couples.jpg" className="w-100" />
              <p className="text-center">Our Outdoor PhotoGraphies</p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="d-lg-block d-none">
        <Row className=" g-3  ">
          <h3 className="text-center" id="ourworks">
            Our Works
          </h3>
          <Col className="">
            <div id="div-work">
              <img
                src="sunsetphoto.jpg"
                className="w-100"
                id="ourwork-imgcontainer"
              />
            </div>
            <div className="mt-4 d-flex justify-content-end " id="div-work">
              <img
                src="sunsetphoto.jpg"
                className="img-fluid"
                id="ourwork-imgcontainer"
              />
            </div>
            <div className="mt-4" id="div-work">
              <img
                src="sunsetphoto.jpg"
                className="w-100"
                id="ourwork-imgcontainer"
              />
            </div>
          </Col>
          <Col>
            <div id="div-work">
              <img
                src="couple3.jpeg"
                className="  "
                height={620}
                id="ourwork-imgcontainer"
              />
            </div>
          </Col>
          <Col>
            <div id="div-work">
              <img
                src="sunsetphoto.jpg"
                className="w-100"
                id="ourwork-imgcontainer"
              />
            </div>
            <div className="mt-4" id="div-work">
              <img
                src="sunsetphoto.jpg"
                className="img-fluid"
                id="ourwork-imgcontainer"
              />
            </div>
            <div className="mt-4" id="div-work">
              <img
                src="sunsetphoto.jpg"
                className="w-100"
                id="ourwork-imgcontainer"
              />
            </div>
          </Col>
        </Row>
        {/* <Row className="  ">
        <Col><img src="couple5.jpeg" className="img-fluid"/></Col>
        <Col ><img src="couple5.jpeg" className="img-fluid"/></Col>
        <Col><img src="couple5.jpeg" className="img-fluid"/></Col>
      </Row> */}
      </Container>
      <Container className="package-container mt-4 d-lg-none d-block ">
        <h3 className="mt-5 text-center ">Our Packages</h3>

        <Row className=" d-flex justify-content-center mt-3 g-3 ">
          <Col lg={4} md={6} sm={6} xs={6}>
            <div className="package-image">
              <img
                src="couplephootshoot (1).jpg"
                className=" img-fluid "
                id="package-imagecontainer"
              />
            </div>
            <div></div>
          </Col>

          <Col lg={4} md={6} sm={6} xs={6}>
            <div className="package-image">
              <img
                src="couplephootshoot (1).jpg"
                className=" img-fluid "
                id="package-imagecontainer"
              />
            </div>
            <div></div>
          </Col>
          <Col lg={4} md={6} sm={6} xs={6}>
            <div className="package-image">
              <img
                src="couplephootshoot (1).jpg"
                className=" img-fluid "
                id="package-imagecontainer"
              />
            </div>
            <div></div>
          </Col>
          <Col lg={4} md={6} sm={6} xs={6}>
            <div className="package-image">
              <img
                src="couplephootshoot (1).jpg"
                className=" img-fluid "
                id="package-imagecontainer"
              />
            </div>
            <div></div>
          </Col>
          <Col lg={4} md={6} sm={6} xs={6}>
            <div className="package-image">
              <img
                src="couplephootshoot (1).jpg"
                className=" img-fluid "
                id="package-imagecontainer"
              />
            </div>
            <div></div>
          </Col>
          <Col lg={4} md={6} sm={6} xs={6}>
            <div className="package-image">
              <img
                src="couplephootshoot (1).jpg"
                className=" img-fluid "
                id="package-imagecontainer"
              />
            </div>
            <div></div>
          </Col>

          {/* <Col lg={6} md={6} sm={6} xs={6}>
            <img src="couple5.jpeg" className="object-fit-cover" width={400} height={300} />

          </Col>
          <Col lg={6} md={6} sm={6} xs={6}>
            <img src="couple5.jpeg" className="object-fit-cover" width={400} height={300} />
            
          </Col> */}
        </Row>
      </Container>
    </>
  );
}

export default Home;
