import { Usuario } from '@services/auth.service';
import { useRouter } from 'next/router';
import { Button } from 'primereact/button';
import { Menubar } from 'primereact/menubar';
import { OverlayPanel } from 'primereact/overlaypanel';
import React, { useRef } from 'react';
import { ListGroup } from 'react-bootstrap';

const PrivateNavbar = () => {
  const { push } = useRouter();

  const op = useRef(null);
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
          label: 'Personal',
          command: commandPush('/personas/personal'),
        },
        {
          label: 'Alumnos',
          command: commandPush('/personas/alumnos'),
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
      label: 'Matriculas',
      items: [
        {
          label: 'Matrículas',
          command: commandPush('/matriculas'),
        },
        {
          label: 'Periodos Lectivos',
          command: commandPush('/matriculas/periodos'),
        },
        {
          label: 'Aulas',
          command: commandPush('/matriculas/aulas'),
        },
        {
          label: 'Materias',
          command: commandPush('/matriculas/materias'),
        },
      ],
    },

    {
      label: 'Administracion',
      items: [
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
  ];

  const end = (
    <React.Fragment>
      <Button
        icon="pi pi-user"
        className="p-button-rounded p-button-primary"
        onClick={(e) => op?.current.toggle(e)}
      />

      <OverlayPanel className="nav__user__op" ref={op} style={{ width: '300px' }}>
        <ListGroup>
          <button className="nav__menu__user__item" onClick={commandPush('/perfil')}>
            <i className="pi pi-user" /> Mi Perfil
          </button>
          <button className="nav__menu__user__item" onClick={logOut}>
            <i className="pi pi-fw pi-power-off" /> Salir
          </button>
        </ListGroup>
      </OverlayPanel>
    </React.Fragment>
  );

  return <Menubar className="shadow" model={items} end={(e) => end} />;
};

export default PrivateNavbar;
