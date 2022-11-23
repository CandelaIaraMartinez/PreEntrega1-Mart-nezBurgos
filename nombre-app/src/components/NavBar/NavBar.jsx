import React from 'react';
import CartWidgets from '../CartWidgets/CartWidgets';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {AiOutlineShoppingCart} from "react-icons/ai";

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Libreria Constelaciones</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#">Libros populares</Nav.Link>
            <Nav.Link href="#">Reseñas</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Búsqueda</Button>
          </Form>
        </Container>
          <CartWidgets />
      </Navbar>
      <br />
    </>
  );
}

export default NavBar;