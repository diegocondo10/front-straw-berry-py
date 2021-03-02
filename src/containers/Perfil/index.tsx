import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React from 'react';
import HrefButton from 'src/components/Buttons/HrefButton';
import DynamicDetailTable from 'src/components/Details/DynamicDetailTable';

const PerfilContainer = ({ data }) => {
  return (
    <main className="container-fluid mb-5">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <h4 className="text-underline">Información de la Cuenta</h4>
          <DynamicDetailTable
            source={data?.usuario}
            diccionario={[
              {
                label: 'Usuario',
                path: 'username',
              },
              {
                label: 'Opciones',
                body: () => (
                  <React.Fragment>
                    <HrefButton
                      className="btn-block"
                      label="Cambiar Contraseña"
                      href="/perfil/changePassword"
                    />
                  </React.Fragment>
                ),
              },
              {
                label: 'Información personal',
                body: (value) => (
                  <DynamicDetailTable
                    source={value?.persona}
                    diccionario={[
                      { label: 'Nombres completos', path: 'str' },
                      { label: 'Género', path: 'genero' },
                      {
                        label: 'Dirección domiciliaria',
                        path: 'direccionDomiciliaria',
                      },
                      { label: 'Teléfono', path: 'telefono' },
                      { label: 'Celular', path: 'celularUno' },
                      { label: 'Correo', path: 'correo' },
                    ]}
                  />
                ),
              },
              {
                label: 'Permisos',
                body: ({ permisos }) => (
                  <React.Fragment>
                    <DataTable
                      className="p-datatable-sm p-datatable-gridlines"
                      autoLayout
                      value={permisos}
                      rows={5}
                      paginator
                    >
                      <Column header="Nombre" field="nombre" filter sortable />
                    </DataTable>
                  </React.Fragment>
                ),
              },
            ]}
          />

          <div className="col-12 row justify-content-center">
            <div className="col-md-4 my-1">
              <HrefButton
                className="p-button-info w-100"
                href="/"
                label="Regresar"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PerfilContainer;
