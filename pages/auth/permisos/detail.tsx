import { useQuery } from '@apollo/client';
import HrefButton from '@components/Buttons/HrefButton';
import DynamicDetailTable from '@components/Details/DynamicDetailTable';
import AuthQueries from '@graphql/Auth/queries.gql';
import React from 'react';
import PrivateLayout from 'src/layouts/privateLayout';

const DetailPermisoContainer = ({ items, id }) => {
  const { data, loading } = useQuery(AuthQueries.getPermisoById, {
    variables: { id },
  });

  return (
    <PrivateLayout
      loading={loading}
      breadCrumb={{
        title: 'Permiso',
        items: [
          { title: 'Permisos', href: '/auth/permisos' },
          { title: id, active: true },
        ],
      }}
      title="Permiso"
    >
      <main className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <DynamicDetailTable
              source={data?.permiso}
              diccionario={[
                {
                  label: 'ID',
                  path: 'id',
                },
                {
                  label: 'Nombre',
                  path: 'nombre',
                },
                {
                  label: 'Descripción',
                  path: 'descripcion',
                },
              ]}
            />
          </div>
          <div className="col-md-6 mt-5">
            <HrefButton
              variant="info"
              block
              href="/auth/permisos"
              label="Regresar"
            />
          </div>
        </div>
      </main>
    </PrivateLayout>
  );
};

DetailPermisoContainer.getInitialProps = async ({ query }) => {
  return {
    items: [
      { title: 'Permisos', href: '/auth/permisos' },
      { title: query.id, href: `/auth/permisos/update/?id=${query.id}` },
    ],
    id: query.id,
  };
};

export default DetailPermisoContainer;
