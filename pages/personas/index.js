import React from 'react'
import { GoPlus } from 'react-icons/go';
import PrivateLayout from '@layouts/privateLayout';
import BreadCrumbTitle from '@components/BreadCrumb/breadCumbTitle';
import { DataTable } from 'primereact/datatable';
import Link from 'next/link';
import { IndexColumn, OptionesColumn } from '@components/table/columns';
import { Column } from 'primereact/column';

const PersonasContainer = ({ breadCrumbItems }) => {
    const header = (
        <div className="container-fluid my-2">
            <div className="row">
                <div className="col text-left">
                    <Link href="/pages/personas/create.js">
                        <a className="btn btn-info btn-sm">
                            Agregar<GoPlus />
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );

    return (
        <PrivateLayout title="IPCA | Personas">
            <main className="container-fluid">
                <BreadCrumbTitle title="Personas" items={breadCrumbItems} />
                <div className="row justify-content-center">
                    <div className="col-md-11 datatable-doc-demo">
                        <DataTable className="p-datatable-customers shadow-lg"
                            //value=[]
                            rowHover
                            paginator
                            header={header}
                            currentPageReportTemplate="{totalRecords} registros totales"
                            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                            rows={10}
                            rowsPerPageOptions={[10, 25, 50]}
                            responsive
                        >
                            {IndexColumn()}
                            <Column header="Identificación"
                                field="identificacion"
                                sortable
                                filter
                                reorderable
                            />
                            <Column header="Primer Apellido"
                                field="priApellido"
                                sortable
                                filter
                                reorderable
                            />
                            <Column header="Segundo Apellido"
                                field="segApellido"
                                sortable
                                filter
                                reorderable
                            />
                            <Column header="Primer Nombre"
                                field="priNombre"
                                sortable
                                filter
                                reorderable
                            />
                            <Column header="Segundo Nombre"
                                field="segNombre"
                                sortable
                                filter
                                reorderable
                            />
                            <Column header="Calle Principal"
                                field="principal"
                                sortable
                                filter
                                reorderable
                            />
                            <Column header="Calle Secundaria"
                                field="secundaria"
                                sortable
                                filter
                                reorderable
                            />
                            <Column header="Teléfono"
                                field="telefono"
                                sortable
                                filter
                                reorderable
                            />
                            <Column header="Celular"
                                field="celular"
                                sortable
                                filter
                                reorderable
                            />
                            <Column header="Correo"
                                field="correo"
                                sortable
                                filter
                                reorderable
                            />
                            <Column header="Ocupación"
                                field="ocupacion"
                                sortable
                                filter
                                reorderable
                            />
                            <Column header="Discapacidad"
                                field="discapacidad"
                                sortable
                                filter
                                reorderable
                            />
                            <Column header="Carnet CONADIS"
                                field="conadis"
                                sortable
                                filter
                                reorderable
                            />
                            {OptionesColumn({
                                editPath: ({ id }) => `/pages/personas/update?id=${id}`,
                                detailPath: ({ id }) => `/pages/personas/detail?id=${id}`,
                            })}
                        </DataTable>
                    </div>
                </div>
            </main>

        </PrivateLayout>
    );
}

PersonasContainer.getInitialProps = async (props) => {
    return {
        breadCrumbItems: [
            {
                title: 'Personas',
                active: true,
            },
        ],
    };
};

export default PersonasContainer;