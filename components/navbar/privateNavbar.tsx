import { Usuario } from '@services/auth.service';
import { useUsuario } from 'contexts/UserProvider';
import { useRouter } from 'next/router';
import { Menubar } from 'primereact/menubar';
import { OverlayPanel } from 'primereact/overlaypanel';
import React, { useMemo, useRef } from 'react';
import { ListGroup } from 'react-bootstrap';

const PrivateNavbar = () => {
  const { push } = useRouter();

  const { usuario, setUsuario } = useUsuario();

  const op = useRef(null);

  const logOut = () => {
    push('/login');
    Usuario.loggout();
    setUsuario(null);
  };

  const commandPush = (path) => () => push(path);

  const items = [
    {
      label: 'Inicio',
      command: commandPush('/'),
      icon: 'pi pi-home',
    },
    {
      label: 'Personas',
      items: [
        {
          label: 'Personas',
          command: commandPush('/personas'),
          icon: 'pi pi-people',
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
      label: 'Notas',
      command: commandPush('/notas'),
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

  const end = useMemo(
    () => (
      <React.Fragment>
        <img
          className="img-fluid p-avatar p-avatar-circle p-avatar-icon cpointer"
          src={usuario?.persona?.foto}
          alt=""
          onClick={(e) => op?.current.toggle(e)}
        />

        <OverlayPanel className="nav__user__op" ref={op} style={{ width: '300px' }}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 text-center">
                <img
                  className="img-fluid p-avatar p-avatar-circle p-avatar-xl"
                  src={usuario?.persona?.foto}
                  alt=""
                />
                <h5 className="mt-2">{usuario?.username}</h5>
                <h6 className="mt-2">{usuario?.persona?.str}</h6>
                <p>{usuario?.persona?.correo}</p>
              </div>
            </div>
          </div>
          <ListGroup>
            <button
              className="nav__menu__user__item"
              onClick={commandPush('/perfil')}
            >
              <i className="pi pi-user" /> Mi Perfil
            </button>
            <button className="nav__menu__user__item" onClick={logOut}>
              <i className="pi pi-fw pi-power-off" /> Salir
            </button>
          </ListGroup>
        </OverlayPanel>
      </React.Fragment>
    ),
    [usuario],
  );

  return <Menubar className="shadow" model={items} end={(e) => end} />;
};

export default PrivateNavbar;
