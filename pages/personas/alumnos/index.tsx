import { useQuery } from '@apollo/client';
import AlumnosContainer from '@containers/Alumnos';
import { getAlumnosTable } from '@graphql/Personas/queries.gql';
import React from 'react';
import PrivateLayout from 'src/layouts/privateLayout';

const AlumnosPage = () => {
  const { loading, data } = useQuery(getAlumnosTable);

  return (
    <PrivateLayout title="Alumnos" loading={loading}>
      <AlumnosContainer data={data} />
    </PrivateLayout>
  );
};

export default AlumnosPage;
