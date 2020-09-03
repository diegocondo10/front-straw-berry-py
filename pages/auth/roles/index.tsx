import { useQuery } from '@apollo/client';
import PrivateLayout from '@layouts/privateLayout';
import React from 'react';
import { Rol } from '@services/auth.service';
import { GoPlus } from 'react-icons/go';
import Link from 'next/link';
import BreadCrumbTitle from '@components/BreadCrumbs/titleBreadCrumb';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { IndexColumn, OptionesColumn } from '@components/table/columns';

const RolesContainer = ({ items }) => {
  const { data, loading } = useQuery(Rol.getAll);

  const header = (
    <div className="container-fluid my-2">
      <div className="row">
        <div className="col text-left">
          <Link href="/auth/roles/create">
            <a className="btn btn-info btn-sm">
              Agregar <GoPlus />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <PrivateLayout title="IPCA | Roles de Usuario" loading={loading}>
      <main className="container-fluid">
        <BreadCrumbTitle title="Roles de Usuario" items={items} />

        <div className="row justify-content-center">
          <div className="col-md-11 datatable-doc-demo">
            <DataTable
              className="p-datatable-customers shadow-lg"
              value={data?.grupos}
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
              {OptionesColumn({
                editPath: ({ id }) => `/auth/roles/update?id=${id}`,
                detailPath: ({ id }) => `/auth/roles/detail?id=${id}`,
              })}
            </DataTable>
          </div>
        </div>
      </main>
    </PrivateLayout>
  );
};

RolesContainer.getInitialProps = async (props) => {
  return {
    items: [
      {
        title: 'Roles de Usuario',
        active: true,
      },
    ],
  };
};

export default RolesContainer;
