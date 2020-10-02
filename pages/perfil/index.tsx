import BreadCrumbTitle from '@components/BreadCrumbs/titleBreadCrumb';
import { BtnRegresar } from '@components/Buttons/BtnRegresar';
import DetailItem from '@components/DetailItem';
import { IndexColumn } from '@components/table/columns';
import PrivateLayout from '@layouts/privateLayout';
import { Usuario } from '@services/auth.service';
import { useRouter } from 'next/router';
import { Button } from 'primereact/button';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const PerfilContainer = ({ items, id }) => {
  const history = useRouter();
  const [usuario, setUsuario] = useState<any>({});

  useEffect(() => {
    console.log(Usuario.getDataUsuarioLoggedIn());
    setUsuario(Usuario.getDataUsuarioLoggedIn());
  }, []);

  const loading = false;
  const data: any = {};

  console.log(usuario);
  return (
    <PrivateLayout loading={loading} title="IPCA | Perfil">
      <main className="container-fluid">
        <BreadCrumbTitle title="Mi Perfil" items={items} />

        <div className="row justify-content-center">
          <div className="col-md-8 breadcrumb">
            <h4 className="text-underline">Información de la Cuenta</h4>
            <ul className="w-100">
              <DetailItem label="Usuario:" value={usuario?.username} />
            </ul>
            <ul className="w-100">
              <div className="col-md-3 mt-1 my-1">
                <Button className="btn-block" label="Cambiar Contraseña" />
              </div>
            </ul>

            <h4 className="text-underline">Información Personal</h4>
            <ul className="w-100">
              <DetailItem
                label="Primer Nombre:"
                value={usuario?.persona?.primerNombre}
              />
              <DetailItem
                label="Segundo Nombre:"
                value={usuario?.persona?.segundoNombre}
              />
              <DetailItem
                label="Primer Apellido:"
                value={usuario?.persona?.primerApellido}
              />
              <DetailItem
                label="Segundo Apellido:"
                value={usuario?.persona?.segundoApellido}
              />
              <DetailItem label="Género:" value={usuario?.persona?.genero} />
              <DetailItem label="Sexo:" value={usuario?.persona?.sexo} />
              <DetailItem
                label="Calle Principal:"
                value={usuario?.persona?.callePrincipal}
              />
              <DetailItem
                label="Calle Secundaria:"
                value={usuario?.persona?.calleSecundaria}
              />
            </ul>

            <h4 className="text-underline">Contacto</h4>
            <ul className="w-100">
              <DetailItem label="Teléfono:" value={usuario?.persona?.telefono} />
              <DetailItem label="Celular:" value={usuario?.persona?.celular} />
              <DetailItem
                label="Correo Electrónico:"
                value={usuario?.persona?.correo}
              />
            </ul>

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
            <div className="row justify-content-center">
              <div className="col-md-4 my-1">
                <BtnRegresar variant="outline-info" href="/personas" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </PrivateLayout>
  );
};

export default PerfilContainer;
