import React from 'react';
import PrivateLayout from '@layouts/privateLayout';
import TitleBreadCrumb from '@components/BreadCrumb/titleBreadCrumb';
import { DataTable } from 'primereact/datatable';
import { IndexColumn, OptionesColumn } from '@components/table/columns';
import Link from 'next/link';
import { Column } from 'primereact/column';
import { GoPlus } from 'react-icons/go';

const DocentesContainer = ({ breadCrumbItems }) => {
    const header = (
        <div className="container-fluid my-2">
            <div className="row">
                <div className="col text-left">
                    <Link href="/personas/docentes/create">
                        <a className=" btn btn-info btn-sm">
                            Agregar
                            <GoPlus />
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );

    return (
        <PrivateLayout title="IPCA | Docentes">
            <main className="container-fluid">
                <TitleBreadCrumb
                    title="Docentes"
                    items={breadCrumbItems}
                />
                <div className="row justify-content-center">
                    <div className="col-md-11 datatable-doc-demo">
                        <DataTable className="p-datatable-customers shadow-lg"
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
                            <Column
                                header="Persona"
                                field="persona"
                                sortable
                                filter
                                reorderable
                            />
                            <Column
                                header="Tipo de Título"
                                field="tipoTitulo"
                                sortable
                                filter
                                reorderable
                            />
                            <Column
                                header="Nivel de Formación"
                                field="nivelFormacion"
                                sortable
                                filter
                                reorderable
                            />
                            {OptionesColumn({
                                editPath: ({ id }) => `/personas/docentes/update?id=${id}`,
                                detailPath: ({ id }) => `/pages/personas/docentes/detail?id=${id}`,
                            })}
                        </DataTable>
                    </div>
                </div>
            </main>
        </PrivateLayout>
    );
};

DocentesContainer.getInitialProps = async (props) => {
    return {
        breadCrumbItems: [
            {
                title: 'Docentes',
                active: true,
            },
        ],
    };
};

export default DocentesContainer;