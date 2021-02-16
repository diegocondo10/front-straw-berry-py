/*global test*/

import { IndexColumn } from '@components/table/columns';
import PrivateLayout from '@layouts/privateLayout';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React from 'react';

const NotasPageContainer = () => {
  return (
    <PrivateLayout
      title="Notas"
      breadCrumb={{
        title: 'Notas',
        items: [
          {
            title: 'Notas',
            active: true,
          },
        ],
      }}
    >
      <main className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12">
            <DataTable>
              {IndexColumn()}
              <Column header="Alumno" field="alumno.personaStr" />
            </DataTable>
          </div>
        </div>
      </main>
    </PrivateLayout>
  );
};

export default NotasPageContainer;
