import React from 'react';
import { useQuery } from '@apollo/client';
import { Discapacidad } from '@services/personas.service';
import { GoPlus } from 'react-icons/go';
import Link from 'next/link';
import PrivateLayout from '@layouts/privateLayout';
import { IndexColumn, OptionesColumn } from '@components/table/columns';
import BreadCrumbTitle from '@components/BreadCrumbs/titleBreadCrumb';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';

const DiscapacidadesContainer = ({ breadCrumbItems }) => {
    const { data, loading } = useQuery(Discapacidad.getAll);

    const header = (
        <div className="container-fluid my-2">
            <div className="row">
                <div className="col text-left">
                    <Link href="/personas/discapacidades/create">
                        <a className="btn btn-info btn-sm">
                            Agregar <GoPlus />
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
    return (
        <PrivateLayout title="IPCA | Discapacidades" loading={loading}>
            {data && (
                <main className="container-fluid">
                    <BreadCrumbTitle title="Discapacidades" items={breadCrumbItems} />

                    <div className="row justify-content-center">
                        <div className="col-md-11 datatable-doc-demo">
                            <DataTable
                                className="p-datatable-customers shadow-lg"
                                value={data.discapacidades || []}
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
                                <Column header="Nombre" field="nombre" sortable filter />
                                <Column header="Descripción" field="descripcion" sortable filter />
                                {OptionesColumn({
                                    editPath: ({ id }) => `/personas/discapacidades/update?id=${id}`,
                                    detailPath: ({ id }) => `/personas/discapacidades/detail?id=${id}`,
                                })}
                            </DataTable>
                        </div>
                    </div>
                </main>
            )}
        </PrivateLayout>
    );
};

DiscapacidadesContainer.getInitialProps = async (props) => {
    return {
        breadCrumbItems: [
            {
                title: 'Discapacidades',
                href: '/personas/discapacidades',
                active: true,
            },
        ],
    };
};

export default DiscapacidadesContainer;