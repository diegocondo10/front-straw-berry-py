import React from 'react';
import PrivateLayout from '@layouts/privateLayout';
import TitleBreadCrumb from '@components/BreadCrumbs/titleBreadCrumb';
import { DataTable } from 'primereact/datatable';
import { IndexColumn, OptionesColumn } from '@components/table/columns';
import Link from 'next/link';
import { Column } from 'primereact/column';
import { GoPlus } from 'react-icons/go';
import { useQuery } from '@apollo/client';
import { Docente } from '@services/personas.service';

const DocentesContainer = ({ breadCrumbItems }) => {
  const { loading, data } = useQuery(Docente.getAll);

  const header = (
    <div className="container-fluid my-2">
      <div className="row">
        <div className="col text-left">
          <Link href="/personas/docentes/create">
            <a className=" btn btn-info btn-sm">
              Agregar
              <GoPlus />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <PrivateLayout title="IPCA | Docentes" loading={loading}>
      <TitleBreadCrumb title="Docentes" items={breadCrumbItems} />
      <main className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 datatable-doc-demo">
            <DataTable
              value={data?.docentes || []}
              className="p-datatable-customers shadow-lg"
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
              <Column header="Título" field="titulo" sortable filter reorderable />
              <Column
                header="Nivel de Formación"
                field="nivelFormacion"
                sortable
                filter
                reorderable
              />
              {OptionesColumn({
                editPath: ({ id }) => `/personas/docentes/update?id=${id}`,
                detailPath: ({ id }) => `/personas/docentes/detail?id=${id}`,
              })}
            </DataTable>
          </div>
        </div>
      </main>
    </PrivateLayout>
  );
};

DocentesContainer.getInitialProps = async (props) => {
  return {
    breadCrumbItems: [
      {
        title: 'Docentes',
        active: true,
      },
    ],
  };
};

export default DocentesContainer;
