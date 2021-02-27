// import { Usuario } from '@services/auth.service';
import { useRouter } from 'next/router';
import { Menubar } from 'primereact/menubar';
import { OverlayPanel } from 'primereact/overlaypanel';
import { ProgressSpinner } from 'primereact/progressspinner';
import React, { useMemo, useRef } from 'react';
import { ListGroup } from 'react-bootstrap';
import useUsuario from 'src/_redux/hooks/useUsuario';

const PrivateNavbar = () => {
  const { push } = useRouter();

  const { usuario, setState } = useUsuario();

  const op = useRef(null);

  const logOut = () => {
    push('/login');

    setState(null);
  };

  const commandPush = (path: string) => () => push(path);

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
          label: 'Periodos Lectivos',
          command: commandPush('/matriculas/periodos'),
        },
        {
          label: 'Aulas',
          command: commandPush('/matriculas/aulas'),
        },
        {
          label: 'Matrículas',
          command: commandPush('/matriculas'),
        },
      ],
    },

    {
      label: 'Aporte Académico',
      command: commandPush('/notas'),
    },
    {
      label: 'Administración',
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
        {!usuario && (
          <ProgressSpinner
            style={{ height: '35px' }}
            strokeWidth="3"
            fill="#EEEEEE"
            animationDuration=".5s"
          />
        )}

        {usuario?.persona?.foto && (
          <img
            className="img-fluid cpointer"
            src={usuario?.persona?.foto}
            onClick={(e) => op?.current.toggle(e)}
            style={{ maxHeight: '35px' }}
          />
        )}

        {usuario && !usuario?.persona?.foto && (
          <i
            className="pi pi-user cpointer"
            onClick={(e) => op?.current.toggle(e)}
          />
        )}

        <OverlayPanel ref={op} style={{ width: '300px' }}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 text-center">
                <img
                  className="img-fluid"
                  style={{ maxHeight: '100px' }}
                  src={usuario?.persona?.foto}
                  alt=""
                />
                <h5 className="mt-2">{usuario?.username}</h5>
                <h6 className="mt-2">{usuario?.persona?.str}</h6>
                <p>{usuario?.persona?.correo}</p>
              </div>
            </div>
          </div>
          <ListGroup className="nav__user__menu">
            <button onClick={commandPush('/perfil')}>
              <i className="pi pi-user" /> Mi Perfil
            </button>
            <button onClick={logOut}>
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
