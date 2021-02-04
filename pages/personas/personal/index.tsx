import { useQuery } from '@apollo/client';
import TitleBreadCrumb from '@components/BreadCrumbs/titleBreadCrumb';
import HrefButton from '@components/Buttons/HrefButton';
import { IndexColumn, OptionesColumn } from '@components/table/columns';
import { getPersonalTable } from '@graphql/Personas/queries.gql';
import PrivateLayout from '@layouts/privateLayout';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React from 'react';

const PersonalContainer = () => {
  const { loading, data } = useQuery(getPersonalTable);

  const header = (
    <div className="container-fluid my-2">
      <div className="row">
        <div className="col text-left">
          <HrefButton
            href="/personas/personal/create"
            icon="pi pi-plus"
            label="Agregar"
          />
        </div>
      </div>
    </div>
  );

  return (
    <PrivateLayout title="Personal" loading={loading}>
      <TitleBreadCrumb
        title="Personal"
        items={[
          {
            title: 'Personal',
            active: true,
          },
        ]}
      />

      <main className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 datatable-doc-demo">
            <DataTable
              value={data?.personalAll || []}
              className="p-datatable-sm shadow-lg p-datatable-gridlines"
              rowHover
              paginator
              header={header}
              currentPageReportTemplate="{totalRecords} registros totales"
              paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
              rows={10}
              rowsPerPageOptions={[10, 25, 50]}
              removableSort
              resizableColumns
              reorderableColumns
              autoLayout
            >
              {IndexColumn()}
              <Column
                header="Informacion"
                field="persona.str"
                sortable
                filter
                reorderable
              />
              <Column
                header="Correo"
                field="persona.correo"
                sortable
                filter
                reorderable
              />
              <Column header="Título" field="titulo" sortable filter reorderable />
              <Column
                header="Tipo de título"
                field="tipoTitulo"
                sortable
                filter
                reorderable
              />
              <Column
                header="Área de trabajo"
                field="areaDeTrabajo"
                sortable
                filter
                reorderable
              />
              <Column
                header="Funcion"
                field="funciones"
                sortable
                filter
                reorderable
                style={{ width: '150px' }}
                body={(rowData) => {
                  return (
                    <ul className="list-group">
                      {rowData?.funciones?.map?.((funcion, index) => (
                        <li key={index}> - {funcion?.nombre}</li>
                      ))}
                    </ul>
                  );
                }}
              />
              {OptionesColumn({
                editPath: ({ id }) => `/personas/personal/update?id=${id}`,
                detailPath: ({ id }) => `/personas/personal/detail?id=${id}`,
              })}
            </DataTable>
          </div>
        </div>
      </main>
    </PrivateLayout>
  );
};

export default PersonalContainer;
