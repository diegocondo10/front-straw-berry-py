import { useQuery } from '@apollo/client';
import BreadCrumbTitle from '@components/BreadCrumb/BreadCumbTitle';
import { IndexColumn, OptionesColumn } from '@components/table/columns';
import PrivateLayout from '@layouts/privateLayout';
import { GET_PERMISOS } from '@services/auth/auth.queries';
import Link from 'next/link';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React from 'react';
import { GoPlus } from 'react-icons/go';

const PermisosContainer = ({ breadCrumbItems }) => {
  const { data, loading } = useQuery(GET_PERMISOS);

  const header = (
    <div className="container-fluid my-2">
      <div className="row">
        <div className="col text-left">
          <Link href="/auth/permisos/create">
            <a className="btn btn-info btn-sm">
              Agregar <GoPlus />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <PrivateLayout title="IPCA | Permisos" loading={loading}>
      <main className="container-fluid">
        <BreadCrumbTitle title="Permisos" items={breadCrumbItems} />

        <div className="row justify-content-center">
          <div className="col-md-11 datatable-doc-demo">
            <DataTable
              className="p-datatable-customers shadow-lg"
              value={data?.permisos}
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
              <Column header="Nombre" field="nombre" sortable filter reorderable />
              <Column
                header="Descripción"
                field="descripcion"
                sortable
                filter
                reorderable
              />
              <Column
                header="Aplicación"
                field="aplicacion.nombre"
                sortable
                filter
                reorderable
              />
              {OptionesColumn({
                editPath: ({ id }) => `/auth/permisos/update?id=${id}`,
                detailPath: ({ id }) => `/auth/permisos/detail?id=${id}`,
              })}
            </DataTable>
          </div>
        </div>
      </main>
    
    </PrivateLayout>
  );
};

PermisosContainer.getInitialProps = async (props) => {
  return {
    breadCrumbItems: [
      {
        title: 'Permisos',
        active: true,
      },
    ],
  };
};

export default PermisosContainer;
