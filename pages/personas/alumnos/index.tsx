import React from 'react';
import Link from 'next/link';
import { GoPlus } from 'react-icons/go';
import PrivateLayout from '@layouts/privateLayout';
import TitleBreadCrumb from '@components/BreadCrumbs/titleBreadCrumb';
import { DataTable } from 'primereact/datatable';
import { IndexColumn, OptionesColumn } from '@components/table/columns';
import { Column } from 'primereact/column';
import { useQuery } from '@apollo/client';
import { Alumno } from '@services/personas.service';

const AlumnosContainer = ({ breadCrumbItems }) => {
  const { loading, data } = useQuery(Alumno.getAll);

  const header = (
    <div className="container-fluid my-2">
      <div className="row">
        <div className="col text-left">
          <Link href="/personas/alumnos/create">
            <a className="btn btn-info btn-sm">
              Agregar
              <GoPlus />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <PrivateLayout title="IPCA | Alumnos" loading={loading}>
      <main className="container-fluid">
        <TitleBreadCrumb title="Alumnos" items={breadCrumbItems} />
        <div className="row justify-content-center">
          <div className="col datatable-doc-demo">
            <DataTable
              value={data?.alumnos}
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
              <Column
                header="Persona"
                field="persona.str"
                sortable
                filter
                reorderable
              />
              <Column header="Padre" field="padre.str" sortable filter reorderable />
              <Column header="Madre" field="madre.str" sortable filter reorderable />
              <Column
                header="Representante"
                field="representante.str"
                sortable
                filter
                reorderable
              />

              {OptionesColumn({
                editPath: ({ id }) => `/personas/alumnos/update?id=${id}`,
                detailPath: ({ id }) => `/personas/alumnos/detail?id=${id}`,
              })}
            </DataTable>
          </div>
        </div>
      </main>
    </PrivateLayout>
  );
};

AlumnosContainer.getInitialProps = async (props) => {
  return {
    breadCrumbItems: [
      {
        title: 'Alumnos',
        active: true,
      },
    ],
  };
};

export default AlumnosContainer;
