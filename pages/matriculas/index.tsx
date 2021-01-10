import { useQuery } from '@apollo/client';
import TitleBreadCrumb from '@components/BreadCrumbs/titleBreadCrumb';
import HrefButton from '@components/Buttons/HrefButton';
import { IndexColumn, OptionesColumn } from '@components/table/columns';
import PrivateLayout from '@layouts/privateLayout';
import auth from '@services/auth/auth.graphql';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React from 'react';
import MatriculaQueries from '@graphql/Matriculas/queries.gql';
import MatriculaMutations from '@graphql/Matriculas/mutations.gql';

const MatriculasContainer = () => {
  const { loading, data } = useQuery(MatriculaQueries.getMatriculasTable, {
    onError: (errors) => {
      console.log('ERROR', errors?.graphQLErrors[0]?.extensions);
    },
  });

  const header = (
    <div className="container-fluid my-2">
      <div className="row">
        <div className="col text-left">
          <HrefButton label="Agregar" icon="pi pi-plus" href="/matriculas/create" />
        </div>
      </div>
    </div>
  );

  return (
    <PrivateLayout title="Matrículas" loading={loading}>
      <main className="container-fluid">
        <TitleBreadCrumb
          title="Matrículas"
          items={[{ title: 'Listado de Matrículas', active: true }]}
        />

        <div className="row justify-content-center">
          <div className="col-12">
            <DataTable
              className="p-datatable-gridlines p-datatable-sm shadow-lg"
              value={data?.matriculas}
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

              <Column header="Alumno" sortable filter field="alumno.personaStr" />

              <Column header="Aula" field="aula.nombre" sortable filter />

              <Column
                header="Periodo Lectivo"
                field="aula.periodo.nombre"
                sortable
                filter
              />

              <Column
                header="Número de Matrícula"
                field="numeroMatricula"
                sortable
                filter
              />

              <Column
                header="Estado"
                field="estadoMatricula"
                sortable
                filter
              />

              <Column
                header="Aporte Voluntario"
                field="aporteVoluntario"
                sortable
                filter
              />

              {OptionesColumn({
                editPath: ({ id }) => `/matriculas/update?id=${id}`,
                detailPath: ({ id }) => `/matriculas/detail?id=${id}`,
              })}
            </DataTable>
          </div>
        </div>
      </main>
    </PrivateLayout>
  );
};

export default MatriculasContainer;
