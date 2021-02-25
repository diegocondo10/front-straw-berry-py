import { useMutation, useQuery } from '@apollo/client';
import PersonaFormContainer from 'src/components/pages/personas/form';
import PersonaMutations from '@graphql/Personas/mutations.gql';
import PersonaQueries from '@graphql/Personas/queries.gql';
import PrivateLayout from '@layouts/privateLayout';
import { useRouter } from 'next/router';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

const UpdatePersonaContainer = ({ title, id }) => {
  const methods = useForm({ mode: 'onChange' });

  const { loading, data } = useQuery(PersonaQueries.getPersonaByIdForm, {
    variables: { id },
    onCompleted: ({ persona }) => {
      methods.reset(persona);
    },
  });

  const [update] = useMutation(PersonaMutations.updatePersona);

  const router = useRouter();

  const onSubmit = async (input, formData) => {
    try {
      const res = await update({ variables: { id, input } });
      router.push('/personas');
    } catch (error) {
      console.log(error);
      methods.reset(formData);
    }
  };

  return (
    <FormProvider {...methods}>
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
        />
      </PrivateLayout>
    </FormProvider>
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
