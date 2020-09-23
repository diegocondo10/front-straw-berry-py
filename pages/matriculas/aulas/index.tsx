import TitleBreadCrumb from '@components/BreadCrumbs/titleBreadCrumb';
import { IndexColumn, OptionesColumn } from '@components/table/columns';
import PrivateLayout from '@layouts/privateLayout';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React from 'react';

const AulasContainer = () => {
  const data: any = {};

  return (
    <PrivateLayout title="Aulas">
      <main className="container-fluid">
        <TitleBreadCrumb
          title="Aulas"
          items={[{ title: 'Listado de Aulas', active: true }]}
        />

        <div className="row justify-content-center">
          <div className="col-12">
            <DataTable
              className="p-datatable-customers shadow-lg"
              value={data?.periodosLectivos}
              rowHover
              paginator
              //header={header}
              autoLayout
              rows={10}
              rowsPerPageOptions={[10, 25, 50]}
              emptyMessage="No se han encontrado resultados"
            >
              {IndexColumn()}
              <Column header="Nombre" field="nombre" sortable filter reorderable />
              <Column
                header="Fecha de inicio"
                field="fechaInicio"
                sortable
                filter
                reorderable
              />
              <Column
                header="Fecha de fin"
                field="fechaFin"
                sortable
                filter
                reorderable
              />
              <Column
                header="Fecha de fin de clases"
                field="fechaFinClases"
                sortable
                filter
                reorderable
              />
              <Column header="Estado" field="estado" sortable filter reorderable />
              {OptionesColumn({
                editPath: ({ id }) => `/matriculas/periodos/update?id=${id}`,
                detailPath: ({ id }) => `/matriculas/periodos/detail?id=${id}`,
              })}
            </DataTable>
          </div>
        </div>
      </main>
    </PrivateLayout>
  );
};

export default AulasContainer;
