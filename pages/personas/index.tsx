import { useQuery } from '@apollo/client';
import TitleBreadCrumb from '@components/BreadCrumbs/titleBreadCrumb';
import HrefButton from '@components/Buttons/HrefButton';
import { IndexColumn, OptionesColumn } from '@components/table/columns';
import PersonaQueries from '@graphql/Personas/queries.gql';
import PrivateLayout from '@layouts/privateLayout';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React from 'react';

const PersonasContainer = ({ breadCrumbItems }) => {
  const { data, loading } = useQuery(PersonaQueries.getPersonasTable);
  console.log(data);
  const header = (
    <div className="container-fluid my-2">
      <div className="row">
        <div className="col text-left">
          <HrefButton href="/personas/create" label="Agregar" icon="pi pi-plus" />
        </div>
      </div>
    </div>
  );

  return (
    <PrivateLayout title="IPCA | Personas" loading={loading}>
      <main className="container-fluid">
        <TitleBreadCrumb title="Personas" items={breadCrumbItems} />
        <div className="row justify-content-center">
          <div className="col-12 datatable-doc-demo">
            <DataTable
              className="p-datatable-customers shadow-lg"
              value={data?.personas}
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
              <Column header="Identificación" field="str" sortable filter frozen />
              <Column header="Teléfono" field="telefono" sortable filter />
              <Column header="Correo" field="correo" sortable filter />
              <Column
                header="Direccion"
                field="direccionDomiciliaria"
                sortable
                filter
              />
              {OptionesColumn({
                editPath: ({ id }) => `/personas/update?id=${id}`,
                detailPath: ({ id }) => `/personas/detail?id=${id}`,
              })}
            </DataTable>
          </div>
        </div>
      </main>
    </PrivateLayout>
  );
};

PersonasContainer.getInitialProps = async (props) => {
  return {
    breadCrumbItems: [
      {
        title: 'Personas',
        active: true,
      },
    ],
  };
};

export default PersonasContainer;
