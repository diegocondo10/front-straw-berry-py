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

  const { usuario, setState, hasPerm } = useUsuario();

  const op = useRef(null);

  const logOut = () => {
    push('/login');

    setState(null);
  };

  const commandPush = (path: string) => () => push(path);

  const items = useMemo(
    () => [
      {
        label: 'Inicio',
        command: commandPush('/'),
        icon: 'pi pi-home',
      },
      {
        label: 'Personas',
        icon: 'pi pi-users',
        items: [
          {
            label: 'Personas',
            command: commandPush('/personas'),
            icon: 'pi pi-people',
            disabled: !hasPerm('PERSONAS__LISTAR'),
          },
          {
            label: 'Personal',
            command: commandPush('/personas/personal'),
            disabled: !hasPerm('PERSONAL__LISTAR'),
          },
          {
            label: 'Alumnos',
            command: commandPush('/personas/alumnos'),
            disabled: !hasPerm('ALUMNOS__LISTAR'),
          },
          {
            label: 'Discapacidades',
            command: commandPush('/personas/discapacidades'),
            disabled: !hasPerm('DISCAPACIDADES__LISTAR'),
          },
        ],
      },

      {
        label: 'Matrículas',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Periodos Lectivos',
            command: commandPush('/matriculas/periodos'),
            disabled: !hasPerm('PERIODO_LECTIVO__LISTAR'),
          },
          {
            label: 'Aulas',
            command: commandPush('/matriculas/aulas'),
            disabled: !hasPerm('AULAS__LISTAR'),
          },
          {
            label: 'Matrículas',

            command: commandPush('/matriculas'),
            disabled: !hasPerm('MATRICULAS__LISTAR'),
          },
        ],
      },

      {
        label: 'Aporte Académico',
        icon: 'pi pi-pencil',
        command: commandPush('/notas'),
        disabled: !hasPerm('APORTE_ACADEMICO__LISTAR'),
      },
      {
        label: 'Administración',
        icon: 'pi pi-sitemap',
        // disabled: true,
        items: [
          {
            label: 'Permisos',
            command: commandPush('/auth/permisos'),
            disabled: !hasPerm('PERMISOS__LISTAR'),
          },
          {
            label: 'Grupos',
            command: commandPush('/auth/roles'),
            disabled: !hasPerm('GRUPOS__LISTAR'),
          },
          {
            label: 'Usuarios',
            command: commandPush('/auth/usuarios'),
            disabled: !hasPerm('USUARIOS__LISTAR'),
          },
        ],
      },
    ],
    [usuario],
  );

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
            style={{ maxHeight: '35px', border: '1px solid white' }}
          />
        )}

        {usuario && !usuario?.persona?.foto && (
          <i
            className="pi pi-user cpointer text-white"
            onClick={(e) => op?.current.toggle(e)}
          />
        )}

        <OverlayPanel ref={op} style={{ width: '300px' }}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 text-center">
                <img
                  className="img-fluid img-thumbnail"
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
