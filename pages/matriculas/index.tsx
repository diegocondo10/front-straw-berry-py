import { useQuery } from '@apollo/client';
import MatriculasContainer from '@containers/Matriculas';
import MatriculaQueries from '@graphql/Matriculas/queries.gql';
import React from 'react';
import PrivateLayout from 'src/layouts/privateLayout';

const MatriculasPage = () => {
  const { loading, data } = useQuery(MatriculaQueries.getMatriculasTable, {
    onError: (errors) => {
      console.log('ERROR', errors?.graphQLErrors[0]?.extensions);
    },
  });

  return (
    <PrivateLayout title="Matrículas" loading={loading}>
      <MatriculasContainer data={data} />
    </PrivateLayout>
  );
};

export default MatriculasPage;
