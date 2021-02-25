import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React from 'react';
import BreadCrumbTitle from 'src/components/BreadCrumbs/titleBreadCrumb';
import HrefButton from 'src/components/Buttons/HrefButton';
import { IndexColumn, OptionesColumn } from 'src/components/table/columns';

const GruposContainer = ({ data }) => {
  const header = (
    <div className="container-fluid my-2">
      <div className="row">
        <div className="col text-left">
          <HrefButton href="/auth/roles/create" icon="pi pi-plus" label="Agregar" />
        </div>
      </div>
    </div>
  );
  return (
    <main className="container-fluid">
      <BreadCrumbTitle
        title="Roles de Usuario"
        items={[
          {
            title: 'Roles de Usuario',
            active: true,
          },
        ]}
      />

      <div className="row justify-content-center">
        <div className="col-md-11">
          <DataTable
            className="p-datatable-sm p-datatable-gridlines shadow-lg"
            value={data?.grupos}
            rowHover
            paginator
            header={header}
            currentPageReportTemplate="{totalRecords} registros totales"
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            rows={10}
            rowsPerPageOptions={[10, 25, 50]}
          >
            {IndexColumn()}
            <Column header="Nombre" field="nombre" sortable filter reorderable />
            <Column
              header="Descripción"
              field="descripcion"
              sortable
              filter
              reorderable
            />
            {OptionesColumn({
              editPath: ({ id }) => `/auth/roles/update?id=${id}`,
              detailPath: ({ id }) => `/auth/roles/detail?id=${id}`,
            })}
          </DataTable>
        </div>
      </div>
    </main>
  );
};

export default GruposContainer;
