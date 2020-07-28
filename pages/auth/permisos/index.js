import BreadCrumb from '@/components/BreadCrumb';
import { IndexColumn, OptionesColumn } from '@/components/table/columns';
import PrivateLayout from '@/layouts/privateLayout';
import { Permiso } from '@/services/auth.service';
import Link from 'next/link';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useEffect, useState } from 'react';
import { GoPlus } from 'react-icons/go';
import BreadCrumbTitle from '@/components/BreadCrumb/BreadCumbTitle';

const PermisosContainer = ({ breadCrumbItems }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Permiso.getAll()
      .then(({ data }) => {
        setData(data);
        setLoading(false);
      })
      .catch(({ data }) => {
        console.log(data);
      });
  }, []);

  const header = (
    <div className="container-fluid my-2">
      <div className="row">
        <div className="col text-left">
          <Link href="/auth/permisos/form">
            <a className="btn btn-info btn-sm">
              Agregar <GoPlus />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <PrivateLayout title="IPCA | Permisos" loading={loading}>
      <main className="container-fluid">
        <BreadCrumbTitle title="Permisos" items={breadCrumbItems} />

        <div className="row justify-content-center">
          <div className="col-md-11 datatable-doc-demo">
            <DataTable
              className="p-datatable-customers shadow-lg"
              value={data}
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
              <Column header="Nombre" field="nombre" sortable filter reorderable />
              <Column
                header="Descripción"
                field="descripcion"
                sortable
                filter
                reorderable
              />
              <Column
                header="Aplicación"
                field="aplicacion.nombre"
                sortable
                filter
                reorderable
              />
              {OptionesColumn({
                editPath: ({ _id }) => `/auth/permisos/form?_id=${_id}`,
                detailPath: ({ _id }) => `/auth/permisos/detail?_id=${_id}`,
              })}
            </DataTable>
          </div>
        </div>
      </main>
    </PrivateLayout>
  );
};

PermisosContainer.getInitialProps = async (props) => {
  return {
    breadCrumbItems: [
      {
        title: 'Permisos',
        active: true,
      },
    ],
  };
};

export default PermisosContainer;
