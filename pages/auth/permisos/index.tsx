import { useQuery } from '@apollo/client';
import BreadCrumbTitle from 'src/components/BreadCrumbs/titleBreadCrumb';
import HrefButton from 'src/components/Buttons/HrefButton';
import { IndexColumn, OptionesColumn } from 'src/components/table/columns';
import Auth from '@graphql/Auth/queries.gql';
import PrivateLayout from 'src/layouts/privateLayout';
import { NextPage } from 'next';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React from 'react';

const PermisosContainer: NextPage<any> = ({ breadCrumbItems }) => {
  const { data, loading } = useQuery(Auth.getPermisos);

  const header = (
    <div className="container-fluid my-2">
      <div className="row">
        <div className="col text-left">
          <HrefButton
            href="/auth/permisos/create"
            icon="pi pi-plus"
            label="Agregar"
          />
        </div>
      </div>
    </div>
  );

  return (
    <PrivateLayout title="Permisos" loading={loading}>
      <main className="container-fluid">
        <BreadCrumbTitle title="Permisos" items={breadCrumbItems} />

        <div className="row justify-content-center">
          <div className="col-md-11">
            <DataTable
              className="p-datatable-sm p-datatable-gridlines shadow-lg"
              value={data?.permisos}
              rowHover
              paginator
              header={header}
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
