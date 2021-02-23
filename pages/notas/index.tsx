import { useQuery } from '@apollo/client';
import NotasContainer from '@components/pages/notas';
import { getInitialDataNotasPage } from '@graphql/Notas/queries.gql';
import PrivateLayout from '@layouts/privateLayout';
import { NextPage } from 'next';
import React from 'react';

const NotasPageContainer: NextPage = () => {
  const { loading, data } = useQuery(getInitialDataNotasPage);
  return (
    <PrivateLayout
      loading={loading}
      title="Notas"
      breadCrumb={{
        title: 'Notas',
        items: [
          {
            title: 'Notas',
            active: true,
          },
        ],
      }}
    >
      <NotasContainer data={data} />
    </PrivateLayout>
  );
};

export default NotasPageContainer;
