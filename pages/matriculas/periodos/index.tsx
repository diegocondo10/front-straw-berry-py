import { useQuery } from '@apollo/client';
import PeriodosContainer from '@containers/PeriodosLectivos';
import MatriculaQueries from '@graphql/Matriculas/queries.gql';
import React from 'react';
import PrivateLayout from 'src/layouts/privateLayout';

const PeriodosPage = () => {
  const { loading, data } = useQuery(MatriculaQueries.getPeriodosTable);

  return (
    <PrivateLayout title="Periodos Lectivos" loading={loading}>
      <PeriodosContainer data={data} />
    </PrivateLayout>
  );
};

export default PeriodosPage;
