import { useQuery } from '@apollo/client';
import AulasContainer from '@containers/Aulas';
import MatriculaQueries from '@graphql/Matriculas/queries.gql';
import React from 'react';
import PrivateLayout from 'src/layouts/privateLayout';

const AulasPage = () => {
  const { loading, data } = useQuery(MatriculaQueries.getAulasTable);

  return (
    <PrivateLayout title="Aulas" loading={loading}>
      <AulasContainer data={data} />
    </PrivateLayout>
  );
};

export default AulasPage;
