import React from 'react'
import Container from 'react-bootstrap/Container';
import { ReactComponent as OurLogo } from './HPCCL_larger.svg';
import  Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'

function Navigation() {
  return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
          </Navbar.Brand>
          <Nav className="me-auto">
          <OurLogo
              alt=""
              src="/HPCCL_larger.svg"
              width="150"
              height="50"
              className="d-inline-block align-top"
            />
          <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#events">Events</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
            <Nav.Link href="#register">Register</Nav.Link>
            <Nav.Link href="#login">Log In</Nav.Link>
            </Nav>
        </Container>
      </Navbar>
    
  )
}

export default Navigation