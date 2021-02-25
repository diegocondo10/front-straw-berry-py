import { useQuery } from '@apollo/client';
import NotasContainer from '@containers/Notas';
import { getInitialDataNotasPage } from '@graphql/Notas/queries.gql';
import { NextPage } from 'next';
import React from 'react';
import PrivateLayout from 'src/layouts/privateLayout';

const NotasPageContainer: NextPage = () => {
  const { loading, data } = useQuery(getInitialDataNotasPage);
  return (
    <PrivateLayout
      loading={loading}
      title="Aporte Académico"
      breadCrumb={{
        title: 'Aporte Académico',
        items: [
          {
            title: 'Aporte Académico',
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
