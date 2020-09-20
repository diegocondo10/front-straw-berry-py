import { Usuario } from '@services/auth.service';
import { useRouter } from 'next/router';
import { Menubar } from 'primereact/menubar';
import React from 'react';

const PrivateNavbar = () => {
  const { push } = useRouter();

  const logOut = () => {
    console.log('SALIR...');
    Usuario.loggout();
    push('/login');
  };

  const commandPush = (path) => () => push(path);

  const items = [
    {
      label: 'Inicio',
      command: commandPush('/'),
    },
    {
      label: 'Personas',
      items: [
        {
          label: 'Personas',
          command: commandPush('/personas'),
        },
        {
          label: 'Docentes',
          command: commandPush('/personas/docentes'),
        },
        {
          label: 'Alumnos',
          command: commandPush('/personas/estudiantes'),
        },

        {
          separator: true,
        },

        {
          label: 'Discapacidades',
          command: commandPush('/personas/discapacidades'),
        },
      ],
    },

    {
      label: 'Administracion',
      items: [
        {
          label: 'Aplicaciones',
          command: commandPush('/auth/aplicaciones'),
        },
        {
          label: 'Permisos',
          command: commandPush('/auth/permisos'),
        },
        {
          label: 'Grupos',
          command: commandPush('/auth/roles'),
        },
        {
          label: 'Usuarios',
          command: commandPush('/auth/usuarios'),
        },
      ],
    },

    {
      label: 'Mi Perfil',
      command: commandPush('/perfil'),
    },

    {
      label: 'Salir',
      icon: 'pi pi-fw pi-power-off',
      command: logOut,
    },
  ];

  return <Menubar className="shadow border-bottom border-secondary" model={items} />;
};

export default PrivateNavbar;

/*
  <Navbar collapseOnSelect expand="sm" bg="primary" variant="dark" sticky="top">
      <Navbar.Toggle aria-controls="-navbar-nav" />
      <Navbar.Collapse id="-navbar-nav">
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

            <Link href="/perfil/">
              <NavDropdown.Item as="a">Perfil</NavDropdown.Item>
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
  
*/
