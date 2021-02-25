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

const UsuariosContainer: NextPage<any> = () => {
  const { data, loading } = useQuery(Auth.getUsuarios);

  const header = (
    <div className="container-fluid my-2">
      <div className="row">
        <div className="col text-left">
          <HrefButton
            href="/auth/usuarios/create"
            label="Agregar"
            icon="pi pi-plus"
          />
        </div>
      </div>
    </div>
  );

  return (
    <PrivateLayout title="Usuarios" loading={loading}>
      <main className="container-fluid">
        <BreadCrumbTitle
          title="Usuarios"
          items={[
            {
              title: 'Usuarios',
              active: true,
            },
          ]}
        />

        <div className="row justify-content-center">
          <div className="col-12">
            <DataTable
              className="p-datatable-gridlines p-datatable-sm shadow-lg"
              value={data?.usuarios}
              rowHover
              paginator
              header={header}
              currentPageReportTemplate="{totalRecords} registros totales"
              paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
              rows={10}
              rowsPerPageOptions={[10, 25, 50]}
              emptyMessage="No se han encontrado resultados"
              autoLayout
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
                header="Persona"
                field="persona.str"
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

export default UsuariosContainer;
