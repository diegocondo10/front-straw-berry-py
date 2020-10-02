import { useQuery } from '@apollo/client';
import TitleBreadCrumb from '@components/BreadCrumbs/titleBreadCrumb';
import HrefButton from '@components/Buttons/HrefButton';
import { IndexColumn, OptionesColumn } from '@components/table/columns';
import PrivateLayout from '@layouts/privateLayout';
import { Aula } from '@services/matriculas.service';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React from 'react';

const AulasContainer = () => {
  const { loading, data } = useQuery(Aula.getAll);
  console.log(data);

  const header = (
    <div className="container-fluid my-2">
      <div className="row">
        <div className="col text-left">
          <HrefButton
            label="Agregar"
            icon="pi pi-plus"
            href="/matriculas/aulas/create"
          />
        </div>
      </div>
    </div>
  );

  return (
    <PrivateLayout title="Aulas" loading={loading}>
      <main className="container-fluid">
        <TitleBreadCrumb
          title="Aulas"
          items={[{ title: 'Listado de Aulas', active: true }]}
        />

        <div className="row justify-content-center">
          <div className="col-12">
            <DataTable
              className="p-datatable-customers shadow-lg"
              value={data?.aulas}
              rowHover
              paginator
              header={header}
              autoLayout
              rows={10}
              rowsPerPageOptions={[10, 25, 50]}
              emptyMessage="No se han encontrado resultados"
              reorderableColumns
            >
              {IndexColumn()}
              <Column header="Nombre" field="nombre" sortable filter />
              <Column header="Capacidad" field="capacidad" sortable filter />
              <Column header="Docentes" field="docentes" sortable filter />
              <Column header="Estado" field="estado" sortable filter />
              {OptionesColumn({
                editPath: ({ id }) => `/matriculas/aulas/update?id=${id}`,
                detailPath: ({ id }) => `/matriculas/aulas/detail?id=${id}`,
              })}
            </DataTable>
          </div>
        </div>
      </main>
    </PrivateLayout>
  );
};

export default AulasContainer;
