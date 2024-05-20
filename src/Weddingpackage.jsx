import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
// import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";
import "./NavBar.css";
import { useState } from "react";
function Weddingpackage() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
      <Container className="mt-5 fluid ">
        <div className="w-100 d-lg-flex justify-content-center align-items-center ">
          <img src="couplebanner.jpg" className="img-fluid" />
          <div className="p-3 text-center">
            <Button
              as="input"
              type="button"
              value="PreWeddingPhotoshoot"
              onClick={handleShow}
            />
          </div>
        </div>
        <div className="w-100 d-lg-flex justify-content-center align-items-center mt-4  ">
          <img src="couplebanner.jpg" className="img-fluid" />
          <div className="p-3 text-center">
            <Button as="input" type="button" value="PostWeddingPhotoshott" />
          </div>
        </div>

        {/* <Col lg={6}></Col>
        <Col lg={6}>{' '}</Col>
        <Col lg={6} ><img src="couplebanner.jpg" className='img-fluid'/></Col> */}
        {/* <Col lg={6} ><Button as="input" type="button" value="PreWeddingphotoshoot" />{' '}</Col> */}

        {/* </Row> */}
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className=" text-center ">PreWeddingPackage</Modal.Title>
        </Modal.Header>
        <Modal.Body className="model-div">
          <div>
            <p>
              Weddings can be quite stressful for both the newlyweds and all
              those who work with them when it comes to organization. Given that
              the wedding day is one of the most beautiful days in people’s
              lives, everyone wants the tiniest little thing to be flawless.
            </p>
          </div>
          <div>
            <h4>WEDDING PACKAGE #1: PRICE BASED ON THE HOURS OF FOOTAGE</h4>
            <p>
              One wedding package can include full-day coverage and an unlimited
              number of photos taken during the wedding. The number of photos
              can vary as well as the shooting time such as “6-hour coverage” or
              “8-hour coverage”. Based on this, you will also adjust the price.
              This can be your base wedding package.
            </p>{" "}
            <Button variant="primary" onClick={handleShow}>
              Book
            </Button>
          </div>
          <div className="mt-4">
            <h4>
              WEDDING PACKAGE #2: OFFER MORE PHOTOGRAPHERS TO COVER DIFFERENT
              OCCASIONS
            </h4>
            <p>
              In addition to a certain amount of time and number of photos, you
              can offer a package that can include more than one photographer.
              They can be divided into different parts of the hall so they could
              cover the whole event. One photographer should be the main
              photographer as well as the organizer who will arrange the others
              and tell them where they will be situated.
            </p>{" "}
            <Button variant="primary" className="" onClick={handleClose}>
              Book
            </Button>
          </div>
          <div className="mt-4">
            <h4>WEDDING PACKAGE #3: OFFER PERSONALIZED PHOTO ALBUM’S COVERS</h4>
            <p>
              Create a package that will include, for example, 500 photos,
              pre-wedding photo sessions, and photo albums for the newlyweds to
              choose from. Make a selection of multiple photo albums with
              different motifs and dimensions. It is a good idea to allow the
              newlyweds to choose the photo or photos that will be on the cover
              of the album itself. These personalized moments will surely make
              the whole experience even more enjoyable for them.
            </p>
            <Button variant="primary" onClick={handleClose}>
              Book
            </Button>
          </div>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
          {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Weddingpackage;
