import { useQuery } from '@apollo/client';
import TitleBreadCrumb from 'src/components/BreadCrumbs/titleBreadCrumb';
import HrefButton from 'src/components/Buttons/HrefButton';
import { IndexColumn, OptionesColumn } from 'src/components/table/columns';
import MatriculaQueries from '@graphql/Matriculas/queries.gql';
import PrivateLayout from 'src/layouts/privateLayout';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React from 'react';

const AulasContainer = () => {
  const { loading, data } = useQuery(MatriculaQueries.getAulasTable);

  const header = (
    <div className="container-fluid my-2">
      <div className="row">
        <div className="col text-left">
          <HrefButton
            label="Agregar"
            icon="pi pi-plus"
            href="/matriculas/aulas/create"
          />
        </div>
      </div>
    </div>
  );

  return (
    <PrivateLayout title="Aulas" loading={loading}>
      <main className="container-fluid">
        <TitleBreadCrumb
          title="Aulas"
          items={[{ title: 'Listado de Aulas', active: true }]}
        />

        <div className="row justify-content-center">
          <div className="col-12">
            <DataTable
              className="p-datatable-sm p-datatable-gridlines shadow-lg"
              value={data?.aulas}
              rowHover
              paginator
              header={header}
              autoLayout
              rows={10}
              rowsPerPageOptions={[10, 25, 50]}
              emptyMessage="No se han encontrado resultados"
              reorderableColumns
            >
              {IndexColumn()}
              <Column
                header="Nombre"
                field="nombre"
                sortable
                filter
                bodyClassName="text-center"
                style={{ width: '300px' }}
              />

              <Column
                header="Periodo lectivo"
                field="periodo.nombre"
                sortable
                filter
                bodyClassName="text-center"
                style={{ width: '300px' }}
              />

              <Column
                header="Docentes"
                sortable
                filter
                // bodyStyle={{ padding: '0.5rem 0 0 0' }}
                body={(rowData) => {
                  return (
                    <ul style={{ listStyle: 'none' }}>
                      {rowData?.docentes?.map((docente, key) => (
                        <li key={key} className="w-100 ml-n4">
                          {docente?.persona?.str}
                        </li>
                      ))}
                    </ul>
                  );
                }}
              />
              <Column
                header="Grado"
                field="grado"
                sortable
                style={{ width: '90px' }}
                bodyClassName="text-center"
              />
              <Column
                header="Capacidad"
                field="capacidad"
                sortable
                style={{ width: '130px' }}
                bodyClassName="text-center"
              />

              {OptionesColumn({
                editPath: ({ id }) => `/matriculas/aulas/update?id=${id}`,
                detailPath: ({ id }) => `/matriculas/aulas/detail?id=${id}`,
              })}
            </DataTable>
          </div>
        </div>
      </main>
    </PrivateLayout>
  );
};

export default AulasContainer;
