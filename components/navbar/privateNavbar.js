import Link from 'next/link';
import React from 'react';
import { Button, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { Usuario } from '@services/auth.service';

const PrivateNavbar = () => {
  const router = useRouter();

  return (
    <Navbar collapseOnSelect expand="sm" bg="primary" variant="dark" sticky="top">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Link href="/">
            <Nav.Link as="a">Inicio</Nav.Link>
          </Link>

          <NavDropdown title="Personas" id="collasible-nav-dropdown">
            <Link href="/personas">
              <NavDropdown.Item as="a">Personas</NavDropdown.Item>
            </Link>

            <Link href="/personas/docentes">
              <NavDropdown.Item as="a">Docentes</NavDropdown.Item>
            </Link>

            <Link href="/personas/estudiantes">
              <NavDropdown.Item as="a">Alumnos</NavDropdown.Item>
            </Link>
          </NavDropdown>

          <NavDropdown title="Auth" id="collasible-nav-dropdown">
            <Link href="/auth/aplicaciones">
              <NavDropdown.Item as="a">Aplicaciones</NavDropdown.Item>
            </Link>

            <Link href="/auth/permisos">
              <NavDropdown.Item as="a">Permisos</NavDropdown.Item>
            </Link>

            <Link href="/auth/roles">
              <NavDropdown.Item as="a">Roles</NavDropdown.Item>
            </Link>

            <Link href="/auth/usuarios">
              <NavDropdown.Item as="a">Usuarios</NavDropdown.Item>
            </Link>
          </NavDropdown>
        </Nav>
        <Nav>
          <Button
            variant="outline-light"
            onClick={() => {
              Usuario.loggout()
              router.push('/login');
            }}
          >
            Cerrar Sesión
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default PrivateNavbar;
