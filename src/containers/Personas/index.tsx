import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React from 'react';
import TitleBreadCrumb from 'src/components/BreadCrumbs/titleBreadCrumb';
import HrefButton from 'src/components/Buttons/HrefButton';
import { IndexColumn, OptionesColumn } from 'src/components/table/columns';
import _ from 'lodash';
import useReportes from '@hooks/useReportes';

const PersonasContainer = ({ data }) => {
  const { getReporte } = useReportes();

  const header = (
    <div className="d-flex flex-row justify-content-center justify-content-sm-between mt-1 mb-2 flex-wrap">
      <HrefButton
        href="/personas/create"
        label="Agregar"
        icon="pi pi-plus"
        className="mt-1"
      />

      <Button
        label="Descargar reporte general"
        icon="pi pi-paperclip"
        className="mt-1"
        onClick={_.throttle(async (e) => {
          await getReporte('reporte-general-total-alumnos');
        }, 2000)}
      />
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
