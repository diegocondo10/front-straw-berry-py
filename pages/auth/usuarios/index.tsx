import { useQuery } from '@apollo/client';
import BreadCrumbTitle from '@components/BreadCrumbs/titleBreadCrumb';
import { IndexColumn, OptionesColumn } from '@components/table/columns';
import PrivateLayout from '@layouts/privateLayout';
import { Usuario } from '@services/auth.service';
import Link from 'next/link';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React from 'react';
import { GoPlus } from 'react-icons/go';

const UsuariosContainer = ({ items }) => {
  const { data, loading } = useQuery(Usuario.getAll);

  const header = (
    <div className="container-fluid my-2">
      <div className="row">
        <div className="col text-left">
          <Link href="/auth/usuarios/create">
            <a className="btn btn-info btn-sm">
              Agregar <GoPlus />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <PrivateLayout title="IPCA | Usuarios" loading={loading}>
      <main className="container-fluid">
        <BreadCrumbTitle title="Usuarios" items={items} />

        <div className="row justify-content-center">
          <div className="col-md-11 datatable-doc-demo">
            <DataTable
              className="p-datatable-customers shadow-lg"
              value={data?.usuarios}
              rowHover
              paginator
              header={header}
              currentPageReportTemplate="{totalRecords} registros totales"
              paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
              rows={10}
              rowsPerPageOptions={[10, 25, 50]}
              responsive
              emptyMessage="No se han encontrado resultados"
            >
              {IndexColumn()}
              <Column
                header="Nombre de Usuario"
                field="username"
                sortable
                filter
                reorderable
              />
              <Column
                header="# de grupos"
                field="numeroGrupos"
                sortable
                filter
                reorderable
              />
              <Column
                header="# de permisos"
                field="numeroPermisos"
                sortable
                filter
                reorderable
              />
              {OptionesColumn({
                editPath: ({ id }) => `/auth/usuarios/update?id=${id}`,
                detailPath: ({ id }) => `/auth/usuarios/detail?id=${id}`,
              })}
            </DataTable>
          </div>
        </div>
      </main>
    </PrivateLayout>
  );
};

UsuariosContainer.getInitialProps = (props) => {
  return {
    items: [
      {
        title: 'Usuarios',
        active: true,
      },
    ],
  };
};

export default UsuariosContainer;
