import React from "react";
import { Container, Navbar } from "react-bootstrap";

const MyNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">My App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

      </Container>
    </Navbar>
  );
};

export default MyNavbar;
