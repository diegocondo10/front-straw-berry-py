import Link from "next/link";
import React from "react";
import { Button, Nav, Navbar, NavDropdown } from "react-bootstrap";

const PrivateNavbar = () => {
  return (
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark' sticky='top'>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='mr-auto'>
          <Link href='/'>
            <Nav.Link as='a'>Inicio</Nav.Link>
          </Link>

          <NavDropdown title='Personas' id='collasible-nav-dropdown'>
            <Link href='/personas'>
              <NavDropdown.Item as='a'>Personas</NavDropdown.Item>
            </Link>

            <Link href='/docentes'>
              <NavDropdown.Item as='a'>Docentes</NavDropdown.Item>
            </Link>

            <Link href='/paginas/inicio'>
              <NavDropdown.Item as='a'>Alumnos</NavDropdown.Item>
            </Link>
          </NavDropdown>
        </Nav>
        <Nav>
          <Button variant='outline-info'>Cerrar Sesión</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default PrivateNavbar;
