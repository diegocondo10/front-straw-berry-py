import { useQuery } from '@apollo/client';
import PersonasContainer from '@containers/Personas';
import PersonaQueries from '@graphql/Personas/queries.gql';
import React from 'react';
import PrivateLayout from 'src/layouts/privateLayout';

const PersonasPage = () => {
  const { data, loading } = useQuery(PersonaQueries.getPersonasTable);

  return (
    <PrivateLayout title="Personas" loading={loading}>
      <PersonasContainer data={data} />
    </PrivateLayout>
  );
};

export default PersonasPage;
