import { useQuery } from '@apollo/client';
import BreadCrumbTitle from 'src/components/BreadCrumbs/titleBreadCrumb';
import HrefButton from 'src/components/Buttons/HrefButton';
import { IndexColumn, OptionesColumn } from 'src/components/table/columns';
import { getDiscapacidadesTable } from '@graphql/Personas/queries.gql';
import PrivateLayout from '@layouts/privateLayout';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React from 'react';

const DiscapacidadesContainer = ({ breadCrumbItems }) => {
  const { data, loading } = useQuery(getDiscapacidadesTable);

  const header = (
    <div className="container-fluid my-2">
      <div className="row">
        <div className="col text-left">
          <HrefButton
            href="/personas/discapacidades/create"
            label="Agregar"
            icon="pi pi-plus"
          />
        </div>
      </div>
    </div>
  );
  return (
    <PrivateLayout title="Discapacidades" loading={loading}>
      {data && (
        <main className="container-fluid">
          <BreadCrumbTitle title="Discapacidades" items={breadCrumbItems} />

          <div className="row justify-content-center">
            <div className="col-md-11 datatable-doc-demo">
              <DataTable
                className="p-datatable-sm p-datatable-gridlines shadow-lg"
                value={data.discapacidades || []}
                rowHover
                paginator
                header={header}
                currentPageReportTemplate="{totalRecords} registros totales"
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                rows={10}
                rowsPerPageOptions={[10, 25, 50]}
              >
                {IndexColumn()}
                <Column header="Nombre" field="nombre" sortable filter />
                <Column header="Descripción" field="descripcion" sortable filter />
                {OptionesColumn({
                  editPath: ({ id }) => `/personas/discapacidades/update?id=${id}`,
                  detailPath: ({ id }) => `/personas/discapacidades/detail?id=${id}`,
                })}
              </DataTable>
            </div>
          </div>
        </main>
      )}
    </PrivateLayout>
  );
};

DiscapacidadesContainer.getInitialProps = async (props) => {
  return {
    breadCrumbItems: [
      {
        title: 'Discapacidades',
        href: '/personas/discapacidades',
        active: true,
      },
    ],
  };
};

export default DiscapacidadesContainer;
