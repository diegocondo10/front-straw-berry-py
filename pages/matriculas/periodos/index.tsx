import { useQuery } from '@apollo/client';
import TitleBreadCrumb from '@components/BreadCrumbs/titleBreadCrumb';
import HrefButton from '@components/Buttons/HrefButton';
import { IndexColumn, OptionesColumn } from '@components/table/columns';
import PrivateLayout from '@layouts/privateLayout';
import { PeriodoLectivo } from '@services/matriculas.service';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React from 'react';

const PeriodosLectivosContainer = () => {
  const { loading, data } = useQuery(PeriodoLectivo.getAll);

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

  console.log(data);

  return (
    <PrivateLayout title="Periodos Lectivos" loading={loading}>
      <main className="container-fluid">
        <TitleBreadCrumb
          title="Periodos Lectivos"
          items={[{ title: 'Periodos Lectivos', active: true }]}
        />

        <div className="row justify-content-center">
          <div className="col-md-12 datatable-doc-demo">
            <DataTable
              className="p-datatable-customers shadow-lg"
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

export default PeriodosLectivosContainer;
