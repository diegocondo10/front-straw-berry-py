import { useQuery } from '@apollo/client';
import PerfilContainer from '@containers/Perfil';
import { me } from '@graphql/Auth/queries.gql';
import { NextPage } from 'next';
import React from 'react';
import PrivateLayout from 'src/layouts/privateLayout';

const PerfilPage: NextPage<any> = () => {
  const { loading, data } = useQuery(me);

  return (
    <PrivateLayout
      title="Perfil"
      loading={loading}
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
      <PerfilContainer data={data} />
    </PrivateLayout>
  );
};

export default PerfilPage;
