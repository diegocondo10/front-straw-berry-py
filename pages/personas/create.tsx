import { useMutation, useQuery } from '@apollo/client';
import PersonaFormContainer from '@components/pages/personas/form';
import PrivateLayout from '@layouts/privateLayout';
import { useRouter } from 'next/router';
import React from 'react';
import PersonaQueries from '@graphql/Matriculas/queries.gql';
import PersonaMutations from '@graphql/Matriculas/mutations.gql';

const CreatePersonaContainer = ({ items, title }) => {
  const [create] = useMutation(PersonaMutations.createPersona);

  const router = useRouter();

  const { data, loading } = useQuery(PersonaQueries.getParametrosForm);

  const onSubmit = async (input) => {
    const res = await create({ variables: { input } });
    router.push('/personas');
  };

  return (
    <PrivateLayout title="Crear Persona" loading={loading}>
      <PersonaFormContainer
        title={title}
        items={items}
        onSubmit={onSubmit}
        discapacidades={data?.discapacidades}
      />
    </PrivateLayout>
  );
};

CreatePersonaContainer.getInitialProps = () => {
  let title = 'Agregar Persona';
  const items = [
    { title: 'Personas', href: '/personas' },
    { title: 'Agregar Persona', active: true },
  ];

  return {
    items,
    title,
  };
};

export default CreatePersonaContainer;
