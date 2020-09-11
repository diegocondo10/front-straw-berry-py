import React from 'react';
import Link from 'next/link';
import { GoPlus } from 'react-icons/go';
import PrivateLayout from '@layouts/privateLayout';
import TitleBreadCrumb from '@components/BreadCrumbs/titleBreadCrumb';
import { DataTable } from 'primereact/datatable';
import { IndexColumn, OptionesColumn } from '@components/table/columns';
import { Column } from 'primereact/column';
import { useQuery } from '@apollo/client';
import { Estudiante } from '@services/personas.service';

const EstudiantesContainer = ({ breadCrumbItems }) => {
  const { loading, data } = useQuery(Estudiante.getAll);

  const header = (
    <div className="container-fluid my-2">
      <div className="row">
        <div className="col text-left">
          <Link href="/personas/estudiantes/create">
            <a className="btn btn-info btn-sm">
              Agregar
              <GoPlus />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );

  console.log(data);

  return (
    <PrivateLayout title="IPCA | Estudiantes" loading={loading}>
      <main className="container-fluid">
        <TitleBreadCrumb title="Estudiantes" items={breadCrumbItems} />
        <div className="row justify-content-center">
          <div className="col datatable-doc-demo">
            <DataTable
              value={data?.estudiantes}
              className="p-datatable-customers shadow-lg"
              rowHover
              paginator
              header={header}
              currentPageReportTemplate="{totalRecords} registros totales"
              paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
              rows={10}
              rowsPerPageOptions={[10, 25, 50]}
              autoLayout
            >
              {IndexColumn()}
              <Column header="Persona" field="persona" sortable filter reorderable />
              <Column header="Padre" field="padre" sortable filter reorderable />
              <Column header="Madre" field="madre" sortable filter reorderable />
              <Column
                header="Representante"
                field="representante"
                sortable
                filter
                reorderable
              />
              <Column
                header="Relacion Representante"
                field="relacionRepresentante"
                sortable
                filter
                reorderable
              />
              {OptionesColumn({
                editPath: ({ id }) => `/personas/estudiantes/update?id=${id}`,
                detailPath: ({ id }) =>
                  `/pages/personas/estudiantes/detail?id=${id}`,
              })}
            </DataTable>
          </div>
        </div>
      </main>
    </PrivateLayout>
  );
};

EstudiantesContainer.getInitialProps = async (props) => {
  return {
    breadCrumbItems: [
      {
        title: 'Estudiantes',
        active: true,
      },
    ],
  };
};

export default EstudiantesContainer;
