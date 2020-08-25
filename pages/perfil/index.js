import React from 'react';
import PrivateLayout from '@layouts/privateLayout';
import BreadCrumbTitle from '@components/BreadCrumbs/titleBreadCrumb';
import { useRouter } from 'next/router';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { IndexColumn } from '@components/table/columns';
import { Button } from 'react-bootstrap';

const PerfilContainer = ({
    items, id }) => {
    const history = useRouter();
    const data = {};

    return (
        <PrivateLayout title="IPCA | Perfil">
            <main className="container-fluid">
                <BreadCrumbTitle title="Perfil" items={items} />
                <div className="row justify-content-center">
                    <div className="col-md-8 breadcrumb datatable-doc-demo">
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
                                responsive
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
                                responsive
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
                    </div>
                </div>
            </main>
        </PrivateLayout>
    );
}

export default PerfilContainer;