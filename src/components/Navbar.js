import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="primary" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          MyShop
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink exact activeClassName="active" to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink activeClassName="active" to="/products" className="nav-link">
              Products
            </NavLink>
            <NavLink activeClassName="active" to="/about" className="nav-link">
              About
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
