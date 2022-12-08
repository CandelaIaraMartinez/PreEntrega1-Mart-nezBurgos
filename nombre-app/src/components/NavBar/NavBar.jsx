import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = ({menus, categorias}) =>{
  return (
    <>
    <Navbar bg="dark" variant="dark">
        <Container>
          <NavBar.Brand>Cinefilos</NavBar.Brand>
    {
      menus.map((menu)=>{
      return (
        <Nav className="me-auto">
      <Nav.Link href= {menu.href}>{menu.name}</Nav.Link>
      </Nav>
      )
    })}
    </Container>
          {
          categorias.map((categoria) =>{
            return <Nav.Link to={`/category/${categoria.id}`}>
            {categoria.name}</Nav.Link>
          })
          }
      </Navbar>
    </>
  );
}

export default NavBar;