import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import { Link } from 'react-router-dom';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className=" ">
            
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#Login">Login</Nav.Link>
            <Nav.Link href="/Registerform">Register</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      </>
  );
}

export default ColorSchemesExample;
// import React from 'react'

// function Navcontainer() {
//   return (
//     <>
//     <Navbar bg="dark" data-bs-theme="dark">
//      <Container>
//         <Navbar.Brand href="#home">Navbar</Navbar.Brand>
//          <Nav className=" ">
            
//           <Nav.Link href="#home">Home</Nav.Link>
//            <Nav.Link href="#Login">Login</Nav.Link>
//             <Nav.Link href="#Register">Register</Nav.Link>
//        </Nav>
//       </Container>
//        </Navbar>
//     </>
//   );
// }

// export default Navcontainer