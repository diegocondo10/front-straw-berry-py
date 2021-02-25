import { BtnRegresar } from 'src/components/Buttons/BtnRegresar';
import HrefButton from 'src/components/Buttons/HrefButton';
import DynamicDetailTable from 'src/components/Details/DynamicDetailTable';
import { IndexColumn } from 'src/components/table/columns';
import PrivateLayout from '@layouts/privateLayout';
import { useUsuario } from 'contexts/UserProvider';
import { NextPage } from 'next';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React from 'react';

const PerfilContainer: NextPage<any> = ({ items }) => {
  const { usuario } = useUsuario();
  return (
    <PrivateLayout
      loading={usuario === null}
      title="Perfil"
      breadCrumb={{
        title: 'Mi perfil',
        items: [
          {
            title: 'Mi perfil',
            active: true,
          },
        ],
      }}
    >
      <main className="container-fluid mb-5">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <h4 className="text-underline">Información de la Cuenta</h4>
            <DynamicDetailTable
              source={usuario}
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
                        { label: 'Genero', path: 'genero' },
                        {
                          label: 'Direccion domiciliaria',
                          path: 'direccionDomiciliaria',
                        },
                        { label: 'Telefono', path: 'telefono' },
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
                        {IndexColumn()}
                        <Column header="Nombre" field="nombre" filter sortable />
                      </DataTable>
                    </React.Fragment>
                  ),
                },
              ]}
            />

            <div className="col-12 row justify-content-center">
              <div className="col-md-4 my-1">
                <BtnRegresar variant="outline-info" href="/" block />
              </div>
            </div>
          </div>
        </div>
      </main>
    </PrivateLayout>
  );
};

export default PerfilContainer;
