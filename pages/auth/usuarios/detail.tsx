import { useMutation, useQuery } from '@apollo/client';
import HrefButton from '@components/Buttons/HrefButton';
import DynamicDetailTable from '@components/Details/DynamicDetailTable';
import Hreft from '@components/utils/Link';
import AuthMutations from '@graphql/Auth/mutations.gql';
import AuthQueries from '@graphql/Auth/queries.gql';
import useCustomToast from '@hooks/useCustomToast';
import { useRouter } from 'next/router';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React from 'react';
import PrivateLayout from 'src/layouts/privateLayout';

const UsuarioDetailContainer = ({ id }) => {
  const { loading, data } = useQuery(AuthQueries.getUsuarioById, {
    variables: { id },
  });

  const { addWarningToast } = useCustomToast();
  const [deleteUsuario] = useMutation(AuthMutations.delete);

  const router = useRouter();

  const usuario = data?.usuario;

  const onClickEliminar = async () => {
    if (usuario?.canDelete) {
      await deleteUsuario({ variables: { id } });
      return router.replace('/auth/usuarios');
    }
    return addWarningToast(
      'No se puede eliminar un usuario relacionado con una persona',
    );
  };

  return (
    <PrivateLayout
      loading={loading}
      title="Usuario"
      breadCrumb={{
        title: 'Información del usuario',
        items: [
          {
            title: 'Usuarios',
            href: '/auth/usuarios',
          },
          {
            title: usuario?.username,
            active: true,
          },
        ],
      }}
    >
      <main className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <DynamicDetailTable
              source={usuario}
              diccionario={[
                {
                  label: 'Nombre de usuario:',
                  path: 'username',
                },
                {
                  label: 'Datos personales',
                  body: ({ persona }) => (
                    <React.Fragment>
                      {!persona?.str && (
                        <h6 className="font-weight-bold">No registra</h6>
                      )}
                      {persona?.str && (
                        <Hreft href={`/personas/detail?id=${persona.id}`}>
                          {persona.str}
                        </Hreft>
                      )}
                    </React.Fragment>
                  ),
                },
                {
                  label: 'Grupos',
                  body: ({ grupos }) => (
                    <React.Fragment>
                      <DataTable
                        value={grupos}
                        className="p-datatable-sm p-datatable-gridlines pagination-sm"
                        autoLayout
                        rows={10}
                        paginator
                      >
                        <Column
                          header="Nombre"
                          field="nombre"
                          filter
                          sortable
                          filterHeaderClassName="p-inputtext-sm"
                        />
                      </DataTable>
                    </React.Fragment>
                  ),
                },
                {
                  label: 'Permisos',
                  body: ({ permisos }) => (
                    <React.Fragment>
                      <DataTable
                        value={permisos}
                        className="p-datatable-sm p-datatable-gridlines"
                        autoLayout
                        rows={10}
                        paginator
                      >
                        <Column
                          header="Nombre"
                          field="nombre"
                          filter
                          sortable
                          filterHeaderClassName="p-inputtext-sm"
                        />
                      </DataTable>
                    </React.Fragment>
                  ),
                },
              ]}
            />
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-4 my-1 order-md-1">
            <HrefButton
              variant="danger"
              block
              onClick={onClickEliminar}
              permiso="GRUPOS__ELIMINAR"
              label="Eliminar"
            />
          </div>
          <div className="col-md-4 my-1">
            <HrefButton
              variant="info"
              block
              href="/auth/usuarios"
              label="Regresar"
            />
          </div>
        </div>
      </main>
    </PrivateLayout>
  );
};

UsuarioDetailContainer.getInitialProps = ({ query }) => query;

export default UsuarioDetailContainer;
