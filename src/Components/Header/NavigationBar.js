import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from './SiteLogo';

function NavigationBar({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('token');
    navigate('/login', { replace: true });
  };

  return (
    <Navbar expand="md" sticky="top" className="nav-container shadow px-2">
      <Logo />
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse>
        <Nav>
          <NavLink to="/" className="nav-link" exact="true">
            Home
          </NavLink>
          <NavLink to="/events" className="nav-link">
            Events
          </NavLink>
          <NavLink to="/contact" className="nav-link">
            Contact
          </NavLink>
        </Nav>
        <Nav className="ms-auto">
          {isLoggedIn ? (
            <>
              <NavLink to="/admin" className="nav-link">
                Admin
              </NavLink>
              <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
            </>
          ) : (
            <>
              <NavLink to="/register" className="nav-link">
                Register
              </NavLink>
              <NavLink to="/login" className="nav-link">
                Log In
              </NavLink>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;