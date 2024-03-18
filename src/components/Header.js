import { Link } from 'react-router-dom';
import { Container, Navbar, Nav, FormControl } from 'react-bootstrap';

const Header = ({ cart, handleAuthenticate  }) => {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src="./images/logo.jpeg"
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
          />
          DreamHome Reality
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link><Nav.Link as={Link} to="/users">
              Users
            </Nav.Link>
            <Nav.Link as={Link} to="/properties">
              Properties
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/cart">
            <img
            src="./images/cart.jpg"
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
          /> {cart.length}
            </Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;