import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React from 'react';
import TitleBreadCrumb from 'src/components/BreadCrumbs/titleBreadCrumb';
import HrefButton from 'src/components/Buttons/HrefButton';
import { IndexColumn, OptionesColumn } from 'src/components/table/columns';

const PersonasContainer = ({ data }) => {
  const header = (
    <div className="container-fluid my-2">
      <div className="row">
        <div className="col text-left">
          <HrefButton href="/personas/create" label="Agregar" icon="pi pi-plus" />
        </div>

        <div className="col text-right">
          <Button label="Reportes" icon="pi pi-paperclip" />
        </div>
      </div>
    </div>
  );
  return (
    <React.Fragment>
      <TitleBreadCrumb
        title="Personas"
        items={[
          {
            title: 'Personas',
            active: true,
          },
        ]}
      />
      <main className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12">
            <DataTable
              className="p-datatable-gridlines p-datatable-sm shadow-lg"
              value={data?.personas}
              header={header}
              paginator
              rowHover
              currentPageReportTemplate="{totalRecords} registros totales"
              paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
              rows={10}
              rowsPerPageOptions={[10, 25, 50]}
              autoLayout
              reorderableColumns
              resizableColumns
              removableSort
              stateStorage="local"
              stateKey="dt-personas"
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
    </React.Fragment>
  );
};

export default PersonasContainer;
