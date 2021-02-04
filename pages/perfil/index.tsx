import BreadCrumbTitle from '@components/BreadCrumbs/titleBreadCrumb';
import { BtnRegresar } from '@components/Buttons/BtnRegresar';
import HrefButton from '@components/Buttons/HrefButton';
import DetailItem from '@components/DetailItem';
import DynamicDetailTable from '@components/Details/DynamicDetailTable';
import PrivateLayout from '@layouts/privateLayout';
import { useUsuario } from 'contexts/UserProvider';
import React from 'react';
import { Table } from 'react-bootstrap';

const PerfilContainer = ({ items }) => {
  const { usuario } = useUsuario();

  return (
    <PrivateLayout loading={false} title="Perfil">
      <main className="container-fluid mb-5">
        <BreadCrumbTitle title="Mi Perfil" items={items} />

        <div className="row justify-content-center">
          <div className="col-md-8">
            <h4 className="text-underline">Información de la Cuenta</h4>

            <DynamicDetailTable
              source={usuario}
              diccionario={[
                {
                  label: 'Usuario',
                  path: 'username',
                },
                {
                  label: 'Opciones',
                  body: () => (
                    <React.Fragment>
                      <HrefButton
                        className="btn-block"
                        label="Cambiar Contraseña"
                        href="/perfil/changePassword"
                      />
                    </React.Fragment>
                  ),
                },

                {
                  label: 'Información personal',
                  listen: [usuario],
                  body: (value) => (
                    <DynamicDetailTable
                      source={value?.persona}
                      diccionario={[
                        { label: 'Nombres completos', path: 'str' },
                        { label: 'Genero', path: 'genero' },
                        {
                          label: 'Direccion domiciliaria',
                          path: 'direccionDomiciliaria',
                        },
                        { label: 'Telefono', path: 'telefono' },
                        { label: 'Celular', path: 'celularUno' },
                        { label: 'Correo', path: 'correo' },
                      ]}
                    />
                  ),
                },
              ]}
            />

            <h4 className="text-underline">Discapacidad</h4>
            <ul className="w-100">
              <DetailItem
                label="Discapacidad:"
                value={usuario?.persona?.discapacidades?.discapacidad}
              />
              <DetailItem
                label="Carnet CONADIS:"
                value={usuario?.persona?.discapacidades?.conadis}
              />
            </ul>

            <h4 className="text-underline">Permisos</h4>
            <ul className="w-100">
              {usuario?.permisos?.length > 0 && (
                <React.Fragment>
                  <Table className="w-75 mx-auto" hover striped bordered size="sm">
                    <thead className="thead-dark">
                      <tr>
                        <th>Nombre</th>
                        <th>Descripción</th>
                      </tr>
                    </thead>
                    <tbody>
                      {usuario?.permisos?.map((e) => (
                        <tr className="bg-white" key={e.id}>
                          <td>{e.nombre}</td>
                          <td>{e.descripcion}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </React.Fragment>
              )}
            </ul>

            <h4 className="text-underline">Grupos</h4>
            <ul className="w-100">
              {usuario?.grupos?.length > 0 && (
                <React.Fragment>
                  <Table className="w-75 mx-auto" hover striped bordered size="sm">
                    <thead className="thead-dark">
                      <tr>
                        <th>Nombre</th>
                        <th>Descripción</th>
                      </tr>
                    </thead>
                    <tbody>
                      {usuario?.grupos?.map((e) => (
                        <tr className="bg-white" key={e.id}>
                          <td>{e.nombre}</td>
                          <td>{e.descripcion}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </React.Fragment>
              )}
            </ul>
            <div className="col-12 row justify-content-center">
              <div className="col-md-4 my-1">
                <BtnRegresar variant="outline-info" href="/" block />
              </div>
            </div>
          </div>
        </div>
      </main>
    </PrivateLayout>
  );
};

export default PerfilContainer;
