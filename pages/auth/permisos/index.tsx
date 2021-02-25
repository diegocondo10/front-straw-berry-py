import { useQuery } from '@apollo/client';
import PermisosContainer from '@containers/Auth/permisos';
import Auth from '@graphql/Auth/queries.gql';
import { NextPage } from 'next';
import React from 'react';
import PrivateLayout from 'src/layouts/privateLayout';

const PermisosPage: NextPage<any> = () => {
  const { data, loading } = useQuery(Auth.getPermisos);

  return (
    <PrivateLayout title="Permisos" loading={loading}>
      <PermisosContainer data={data} />
    </PrivateLayout>
  );
};

export default PermisosPage;
