import { useMutation, useQuery } from '@apollo/client';
import PersonaFormContainer from '@components/pages/personas/form';
import PrivateLayout from '@layouts/privateLayout';
import { useRouter } from 'next/router';
import React from 'react';
import PersonaQueries from '@graphql/Matriculas/queries.gql';
import PersonaMutations from '@graphql/Matriculas/mutations.gql';

const UpdatePersonaContainer = ({ title, id }) => {
  const { loading, data } = useQuery(PersonaQueries.getByIdPersona, { variables: { id } });

  const [update] = useMutation(PersonaMutations.updatePersona);

  const router = useRouter();

  const onSubmit = async (input) => {
    try {
      const res = await update({ variables: { id, input } });
      router.push('/personas');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PrivateLayout loading={loading} title={title}>
      <PersonaFormContainer
        title={title}
        items={[
          { title: 'Personas', href: '/personas' },
          {
            title: data?.persona?.str,
            active: true,
          },
        ]}
        onSubmit={onSubmit}
        discapacidades={data?.persona?.discapacidadesDisponibles}
        defaultValues={data?.persona}
      />
    </PrivateLayout>
  );
};

UpdatePersonaContainer.getInitialProps = ({ query }) => {
  let title = 'Editar Persona';

  return {
    title,
    id: query.id,
  };
};

export default UpdatePersonaContainer;
