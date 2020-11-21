import { useQuery } from '@apollo/client';
import BreadCrumbTitle from '@components/BreadCrumbs/titleBreadCrumb';
import { IndexColumn, OptionesColumn } from '@components/table/columns';
import Auth from '@graphql/Auth/queries.gql';
import PrivateLayout from '@layouts/privateLayout';
import Link from 'next/link';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React from 'react';
import { GoPlus } from 'react-icons/go';

const AplicacionesContainer = ({ breadCrumbItems }) => {
  const { data, loading } = useQuery(Auth.getApps);

  const header = (
    <div className="container-fluid my-2">
      <div className="row">
        <div className="col text-left">
          <Link href="/auth/aplicaciones/create">
            <a className="btn btn-info btn-sm">
              Agregar <GoPlus />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <PrivateLayout title="IPCA | Aplicaciones" loading={loading}>
      {data && (
        <main className="container-fluid">
          <BreadCrumbTitle title="Aplicaciones" items={breadCrumbItems} />

          <div className="row justify-content-center">
            <div className="col-md-11 datatable-doc-demo">
              <DataTable
                className="p-datatable-customers shadow-lg"
                value={data.aplicaciones || []}
                rowHover
                paginator
                header={header}
                currentPageReportTemplate="{totalRecords} registros totales"
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                rows={10}
                rowsPerPageOptions={[10, 25, 50]}
              >
                {IndexColumn()}
                <Column header="Nombre" field="nombre" sortable filter />
                <Column header="Descripción" field="descripcion" sortable filter />
                {OptionesColumn({
                  editPath: ({ id }) => `/auth/aplicaciones/update?id=${id}`,
                  detailPath: ({ id }) => `/auth/aplicaciones/detail?id=${id}`,
                })}
              </DataTable>
            </div>
          </div>
        </main>
      )}
    </PrivateLayout>
  );
};

AplicacionesContainer.getInitialProps = async (props) => {
  return {
    breadCrumbItems: [
      {
        title: 'Aplicaciones',
        href: '/auth/aplicaciones',
        active: true,
      },
    ],
  };
};

export default AplicacionesContainer;
