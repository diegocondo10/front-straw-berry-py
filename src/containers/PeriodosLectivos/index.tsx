import HrefButton from '@components/Buttons/HrefButton';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React from 'react';
import TitleBreadCrumb from 'src/components/BreadCrumbs/titleBreadCrumb';
import { IndexColumn, OptionesColumn } from 'src/components/table/columns';

const PeriodosContainer = ({ data }) => {
  const header = (
    <div className="container-fluid my-2">
      <div className="row">
        <div className="col text-left">
          <HrefButton
            label="Agregar"
            icon="pi pi-plus"
            href="/matriculas/periodos/create"
          />
        </div>
      </div>
    </div>
  );

  return (
    <main className="container-fluid">
      <TitleBreadCrumb
        title="Periodos Lectivos"
        items={[{ title: 'Periodos Lectivos', active: true }]}
      />

      <div className="row justify-content-center">
        <div className="col-md-12 datatable-doc-demo">
          <DataTable
            className="p-datatable-gridlines shadow-lg p-datatable-sm"
            value={data?.periodosLectivos}
            rowHover
            paginator
            header={header}
            autoLayout
            rows={10}
            rowsPerPageOptions={[10, 25, 50]}
            emptyMessage="No se han encontrado resultados"
          >
            {IndexColumn()}
            <Column
              className="text-center"
              header="Nombre"
              field="nombre"
              sortable
              filter
              reorderable
              style={{ width: '350px' }}
            />
            <Column
              className="text-center"
              header="Fecha de inicio"
              field="fechaInicio"
              sortable
              filter
              reorderable
              style={{ width: '200px' }}
            />
            <Column
              className="text-center"
              header="Fecha de fin"
              field="fechaFin"
              sortable
              filter
              reorderable
              style={{ width: '200px' }}
            />
            <Column
              className="text-center"
              header="Fecha de fin de clases"
              field="fechaFinClases"
              sortable
              filter
              reorderable
              style={{ width: '220px' }}
            />
            <Column
              className="text-center"
              header="Coodinador/a"
              field="coordinador.personaStr"
              sortable
              filter
              reorderable
              style={{ width: '220px' }}
            />
            <Column
              className="text-center"
              header="Sub coordinador/a"
              field="subCoordinador.personaStr"
              sortable
              filter
              reorderable
              style={{ width: '220px' }}
            />
            <Column
              className="text-center"
              header="Director/a"
              field="director.personaStr"
              sortable
              filter
              reorderable
              style={{ width: '220px' }}
            />
            <Column
              className="text-center"
              header="Estado"
              field="estado"
              sortable
              filter
              reorderable
              style={{ width: '150px' }}
            />
            {OptionesColumn({
              editPath: ({ id }) => `/matriculas/periodos/update?id=${id}`,
              detailPath: ({ id }) => `/matriculas/periodos/detail?id=${id}`,
            })}
          </DataTable>
        </div>
      </div>
    </main>
  );
};

export default PeriodosContainer;
