import { useQuery } from '@apollo/client';
import GruposContainer from '@containers/Auth/roles';
import Auth from '@graphql/Auth/queries.gql';
import React from 'react';
import PrivateLayout from 'src/layouts/privateLayout';

const GruposPage = () => {
  const { data, loading } = useQuery(Auth.getRoles);

  return (
    <PrivateLayout title="Roles de Usuario" loading={loading}>
      <GruposContainer data={data} />
    </PrivateLayout>
  );
};

export default GruposPage;
