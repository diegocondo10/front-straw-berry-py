import React from 'react';
import PrivateLayout from '@/layouts/privateLayout';
import BreadCrumb from '@/components/BreadCrumb';
import { DataTable } from 'primereact/datatable';
import { IndexColumn, OptionesColumn } from '@/components/table/columns';
import { Column } from 'primereact/column';
import { Aplicacion } from '@/services/auth.service';
import Link from 'next/link';
import { GoPlus } from 'react-icons/go';

const AplicacionesContainer = ({ breadCrumbItems, aplicaciones }) => {
  const header = (
    <div className="container-fluid my-2">
      <div className="row">
        <div className="col text-left">
          <Link href="/auth/aplicaciones/aplicacion">
            <a className="btn btn-info btn-sm">
              Agregar <GoPlus />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <PrivateLayout title="IPCA | Aplicaciones">
      <main className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12">
            <h1 className="text-center my-5 display-4">Aplicaciones</h1>
          </div>

          <div className="col-md-8">
            <BreadCrumb items={breadCrumbItems} />
          </div>

          <div className="col-md-11 datatable-doc-demo mt-5">
            <DataTable
              className="p-datatable-customers shadow-lg"
              value={aplicaciones}
              rowHover
              paginator
              header={header}
              currentPageReportTemplate="{totalRecords} registros totales"
              paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
              rows={10}
              rowsPerPageOptions={[10, 25, 50]}
              responsive
            >
              {IndexColumn()}
              <Column header="Nombre" field="nombre" sortable filter />
              <Column header="Descripción" field="descripcion" sortable filter />
              {OptionesColumn({
                editPath: ({ _id }) => `/auth/aplicaciones/aplicacion?_id=${_id}`,
                detailPath: ({ _id }) => `/auth/aplicaciones/detail?_id=${_id}`,
              })}
            </DataTable>
          </div>
        </div>
      </main>
    </PrivateLayout>
  );
};

AplicacionesContainer.getInitialProps = async (props) => {
  const res = await Aplicacion.getAll();

  return {
    breadCrumbItems: [
      {
        title: 'Aplicaciones',
        href: '/auth/aplicaciones',
        active: true,
      },
    ],
    aplicaciones: res.data,
  };
};

export default AplicacionesContainer;
