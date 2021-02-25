import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React from 'react';
import TitleBreadCrumb from 'src/components/BreadCrumbs/titleBreadCrumb';
import HrefButton from 'src/components/Buttons/HrefButton';
import { IndexColumn, OptionesColumn } from 'src/components/table/columns';

const AlumnosContainer = ({ data }) => {
  const header = (
    <div className="container-fluid my-2">
      <div className="row">
        <div className="col text-left">
          <HrefButton
            href="/personas/alumnos/create"
            label="Agregar"
            icon="pi pi-plus"
          />
        </div>
      </div>
    </div>
  );
  return (
    <main className="container-fluid">
      <TitleBreadCrumb
        title="Alumnos"
        items={[
          {
            title: 'Alumnos',
            active: true,
          },
        ]}
      />
      <div className="row justify-content-center">
        <div className="col-12 ">
          <DataTable
            value={data?.alumnos}
            className="p-datatable-sm p-datatable-gridlines shadow-lg"
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
              field="personaStr"
              sortable
              filter
              reorderable
            />
            <Column header="Padre" field="padre.str" sortable filter reorderable />
            <Column header="Madre" field="madre.str" sortable filter reorderable />
            <Column
              header="Representante"
              field="representante.nombres"
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
  );
};

export default AlumnosContainer;
