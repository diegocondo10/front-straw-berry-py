import { useQuery } from '@apollo/client';
import TitleBreadCrumb from '@components/BreadCrumbs/titleBreadCrumb';
import HrefButton from '@components/Buttons/HrefButton';
import { IndexColumn, OptionesColumn } from '@components/table/columns';
import PrivateLayout from '@layouts/privateLayout';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React from 'react';
import MatriculaQueries from '@graphql/Matriculas/queries.gql';

const MateriasContainer = ({ breadCrumbItems }) => {
  const { data, loading } = useQuery(MatriculaQueries.getAllMateria);

  const header = (
    <div className="container-fluid my-2">
      <div className="row">
        <div className="col text-left">
          <HrefButton
            label="Agregar"
            icon="pi pi-plus"
            href="/matriculas/materias/create"
          />
        </div>
      </div>
    </div>
  );

  const materia = {};
  return (
    <PrivateLayout title="IPCA | Materias" loading={loading}>
      <main className="container-fluid">
        <TitleBreadCrumb title="Materias" items={breadCrumbItems} />
        <div className="row justify-content-center">
          <div className="col-12 datatable-doc-demo">
            <DataTable
              className="p-datatable-customers shadow-lg"
              value={data?.materias}
              rowHover
              paginator
              header={header}
              currentPageReportTemplate="{totalRecords} registros totales"
              paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
              rows={10}
              rowsPerPageOptions={[10, 25, 50]}
              autoLayout
              reorderableColumns
              resizableColumns
              removableSort
            >
              {IndexColumn()}
              <Column header="Nombre" field="nombre" sortable filter frozen />
              <Column header="Código" field="codigo" sortable filter />
              <Column header="Grado" field="grado" sortable filter />
              <Column
                header="Horas Presenciales"
                field="horasPresencial"
                sortable
                filter
              />
              <Column header="Descripción" field="descripcion" sortable filter />
              <Column header="Objetivo" field="objetivo" sortable filter />
              <Column
                header="Objetivo Específico"
                field="objetivoEspecifico"
                sortable
                filter
              />
              {OptionesColumn({
                editPath: ({ id }) => `/matriculas/materias/update?id=${id}`,
                detailPath: ({ id }) => `/matriculas/materias/detail?id=${id}`,
              })}
            </DataTable>
          </div>
        </div>
      </main>
    </PrivateLayout>
  );
};

MateriasContainer.getInitialProps = async (props) => {
  return {
    breadCrumbItems: [
      {
        title: 'Materias',
        active: true,
      },
    ],
  };
};

export default MateriasContainer;
