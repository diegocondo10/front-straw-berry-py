import { useMutation, useQuery } from '@apollo/client';
import HrefButton from '@components/Buttons/HrefButton';
import DynamicDetailTable from '@components/Details/DynamicDetailTable';
import AuthMutations from '@graphql/Auth/mutations.gql';
import AuthQueries from '@graphql/Auth/queries.gql';
import useCustomToast from '@hooks/useCustomToast';
import { useRouter } from 'next/router';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React from 'react';
import PrivateLayout from 'src/layouts/privateLayout';

const DetailRolContainer = ({ id }) => {
  const history = useRouter();

  const { data, loading } = useQuery(AuthQueries.getByIdRol, { variables: { id } });

  const { addWarningToast } = useCustomToast();

  const [deletePermiso, { loading: loadingDelete }] = useMutation(
    AuthMutations.deleteGrupo,
    {
      variables: { id },
    },
  );

  const onClickEliminar = async () => {
    if (data?.grupo?.canDelete) {
      await deletePermiso();

      return history.push('/auth/roles');
    }

    addWarningToast(
      'No se puede elimiar un Grupo que este siendo usado por algun usuario',
    );
  };

  return (
    <PrivateLayout
      loading={loading || loadingDelete}
      title="Grupo"
      breadCrumb={{
        title: 'Grupo',
        items: [
          {
            title: 'Grupos',
            href: '/auth/roles',
          },
          {
            title: data?.grupo.nombre,
            active: true,
          },
        ],
      }}
    >
      <main className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <DynamicDetailTable
              source={data?.grupo}
              diccionario={[
                {
                  label: 'Nombre',
                  path: 'nombre',
                },
                {
                  label: 'Descripción',
                  path: 'descripcion',
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
          <div className="col-md-5 my-1">
            <HrefButton variant="info" href="/auth/roles" block label="Regresar" />
          </div>
          <div className="col-md-5 my-1">
            <HrefButton
              variant="danger"
              href="/auth/roles"
              block
              label="Eliminar"
              onClick={onClickEliminar}
              permiso="GRUPOS__ELIMINAR"
            />
          </div>
        </div>
      </main>
    </PrivateLayout>
  );
};

DetailRolContainer.getInitialProps = ({ query }) => query;

export default DetailRolContainer;
