import { Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';

const Header = ({ cart }) => {
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
          DreamHome Realty
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
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