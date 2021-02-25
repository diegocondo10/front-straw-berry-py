import { useQuery } from '@apollo/client';
import UsuariosContainer from '@containers/Auth/usuarios';
import Auth from '@graphql/Auth/queries.gql';
import { NextPage } from 'next';
import React from 'react';
import PrivateLayout from 'src/layouts/privateLayout';

const UsuariosPage: NextPage<any> = () => {
  const { data, loading } = useQuery(Auth.getUsuarios);

  return (
    <PrivateLayout title="Usuarios" loading={loading}>
      <UsuariosContainer data={data} />
    </PrivateLayout>
  );
};

export default UsuariosPage;
