import { useQuery } from '@apollo/client';
import BreadCrumbTitle from '@components/BreadCrumbs/titleBreadCrumb';
import DetailItem from '@components/DetailItem';
import { IndexColumn } from '@components/table/columns';
import PrivateLayout from '@layouts/privateLayout';
import { Usuario } from '@services/auth.service';
import { useRouter } from 'next/router';
import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
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

            {data?.permiso?.nombre ===
              'SI' && (
                <React.Fragment>
                  <Table className="w-75 mx-auto" hover striped bordered size="sm">
                    <thead className="thead-dark">
                      <tr>
                        <th>
                          Nombre
                      </th>
                        <th>
                          Descripción
                      </th>
                      </tr>
                    </thead>
                    <tbody>
                      {data?.permiso?.nombre?.map((e) => (
                        <tr className="bg-white" key={e.id}>
                          <td>{e.nombre}</td>
                          <td>{e.descripcion}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </React.Fragment>
              )}

            {/* <h4 className="text-underline">Permisos</h4>
            <DataTable
              className="p-datatable-customers shadow-lg"
              rowHover
              paginator
              currentPageReportTemplate="{totalRecords} registros totales"
              paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
              rows={10}
              rowsPerPageOptions={[10, 25, 50]}
            >
              {IndexColumn()}
              <Column header="Nombre" field="nombre" sortable filter reorderable />
              <Column
                header="Descripción"
                field="descripcion"
                sortable
                filter
                reorderable
              />
            </DataTable> */}

            <h4 className="text-underline">Grupos</h4>
            <DataTable
              className="p-datatable-customers shadow-lg"
              rowHover
              paginator
              currentPageReportTemplate="{totalRecords} registros totales"
              paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
              rows={10}
              rowsPerPageOptions={[10, 25, 50]}
            >
              {IndexColumn()}
              <Column header="Nombre" field="nombre" sortable filter reorderable />
              <Column
                header="Descripción"
                field="descripcion"
                sortable
                filter
                reorderable
              />
            </DataTable>
            <div className="col-md-5 mt-3 my-1">
              <Button className="btn-block" label="Cambiar Contraseña" />
            </div>
          </div>
        </div>
      </main>
    </PrivateLayout>
  );
};
{
  /* <div className="col-md-8 breadcrumb datatable-doc-demo">
                        <div className="col-md-6">
                            <p>
                                <strong>Usuario: </strong> {data?.usuario || 'María80'}
                            </p>
                        </div>
                        <div className="col-md-6">
                            <p>
                                <strong>Primer Nombre: </strong> {data?.primerNombre || 'María'}
                            </p>
                        </div>
                        <div className="col-md-6">
                            <p>
                                <strong>Segundo Nombre: </strong> {data?.segundoNombre || 'Soledad'}
                            </p>
                        </div>
                        <div className="col-md-6">
                            <p>
                                <strong>Primer Apellido: </strong> {data?.primerApellido || 'Guerrero'}
                            </p>
                        </div>
                        <div className="col-md-6">
                            <p>
                                <strong>Segundo Apellido: </strong> {data?.segundoApellido || 'Fuentes'}
                            </p>
                        </div>
                        <div className="col-md-6">
                            <p>
                                <strong>Género: </strong> {data?.genero || 'Femenino - Masculino'}
                            </p>
                        </div>
                        <div className="col-md-6">
                            <p>
                                <strong>Sexo: </strong> {data?.sexo || 'Femenino - Masculino'}
                            </p>
                        </div>
                        <div className="col-md-6">
                            <p>
                                <strong>Calle Principal: </strong> {data?.callePrincipal || 'Av. Américas'}
                            </p>
                        </div>
                        <div className="col-md-6">
                            <p>
                                <strong>Calle Secundaria: </strong> {data?.calleSecundaria || 'Francisco Trelles'}
                            </p>
                        </div>
                        <div className="col-md-6">
                            <p>
                                <strong>Teléfono: </strong> {data?.telefono || '4257896'}
                            </p>
                        </div>
                        <div className="col-md-6">
                            <p>
                                <strong>Celular: </strong> {data?.celular || '098546231'}
                            </p>
                        </div>
                        <div className="col-md-6">
                            <p>
                                <strong>Discapacidad: </strong> {data?.discapacidad || 'Parálisis Cerebral'}
                            </p>
                        </div>
                        <div className="col-md-6">
                            <p>
                                <strong>Carnet CONADIS: </strong> {data?.conadis || '123654789'}
                            </p>
                        </div>
                        <div className="col-md-6">
                            <p>
                                <strong>Email: </strong> {data?.correo || 'maria@gmail.com'}
                            </p>
                        </div>
                        <div>
                            <strong className="mb-5">Permisos</strong>

                            <DataTable className="p-datatable-customers shadow-lg"
                                rowHover
                                paginator
                                currentPageReportTemplate="{totalRecords} registros totales"
                                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                                rows={10}
                                rowsPerPageOptions={[10, 25, 50]}
                                
                            >
                                {IndexColumn()}
                                <Column
                                    header="Nombre"
                                    field="nombre"
                                    sortable
                                    filter
                                    reorderable
                                />
                                <Column
                                    header="Descripción"
                                    field="descripcion"
                                    sortable
                                    filter
                                    reorderable
                                />
                            </DataTable>
                        </div>

                        <div>
                            <strong className="mb-5">Grupo</strong>

                            <DataTable className="p-datatable-customers shadow-lg"
                                rowHover
                                paginator
                                currentPageReportTemplate="{totalRecords} registros totales"
                                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                                rows={10}
                                rowsPerPageOptions={[10, 25, 50]}
                                
                            >
                                {IndexColumn()}
                                <Column
                                    header="Nombre"
                                    field="nombre"
                                    sortable
                                    filter
                                    reorderable
                                />
                                <Column
                                    header="Descripción"
                                    field="descripcion"
                                    sortable
                                    filter
                                    reorderable
                                />
                            </DataTable>
                        </div>
                        <div className="col-md-5 mt-3 my-1">
                            <Button variant="outline-primary" block type="submit">
                                Cambiar Contraseña
                            </Button>
                        </div>
                    </div> */
}

export default PerfilContainer;
