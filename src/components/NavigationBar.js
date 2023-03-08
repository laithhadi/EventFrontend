import Container from 'react-bootstrap/Container';
import { ReactComponent as OurLogo } from './HPCCL_larger.svg';
import  Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink, Route, Routes } from 'react-router-dom';

function NavigationBar() {
  return (
    <>
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
          <NavLink to="/">Home</NavLink>
            <NavLink to="events">Events</NavLink>
            <NavLink to="Contact">Contact</NavLink>
            <NavLink to="register">Register</NavLink>
            <NavLink to="login">Log In</NavLink>
            </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/"  />
        <Route path="/events" />
        <Route path="/contact" />
        <Route path="/login" />
        <Route path="/register" />
      </Routes>
    </>
  )
}

export default NavigationBar